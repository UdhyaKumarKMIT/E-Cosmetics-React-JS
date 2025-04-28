"use client"

import { useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FaUser, FaLock, FaEnvelope, FaPhone, FaHome } from "react-icons/fa"
import { useShop } from "../context/context"
import "./Signup.css"
import Login from './Login'
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { login } = useShop()
  const navigate = useNavigate()

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (Object.values(formData).some((value) => !value)) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      setLoading(false)
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    const existingUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]")


    if (existingUsers.some((user) => user.email === formData.email)) {
      setError("Email already registered. Please use a different email or login.")
      setLoading(false)
      return
    }

    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    }

    existingUsers.push(newUser)
    localStorage.setItem("registeredUsers", JSON.stringify(existingUsers))

    const allCarts = JSON.parse(localStorage.getItem("ShoppingCarts") || "{}")
    allCarts[formData.email] = []
    localStorage.setItem("ShoppingCarts", JSON.stringify(allCarts))
    navigate("/Login")
  }

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <Card.Body className="p-4 p-md-5">
          <div className="auth-header">
            <h2 className="auth-title">Create an Account</h2>
            <p className="auth-subtitle">Join our beauty community</p>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form className="auth-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaUser className="text-muted" />
                </span>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope className="text-muted" />
                </span>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone className="text-muted" />
                </span>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock className="text-muted" />
                </span>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <Form.Text className="text-muted">Password must be at least 8 characters long</Form.Text>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Confirm Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock className="text-muted" />
                </span>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 py-2" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </Button>
          </Form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign In
              </Link>
            </p>
            <Link to="/" className="home-link">
              <FaHome /> Back to Home
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Signup
