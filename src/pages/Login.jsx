"use client"

import { useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { FaLock, FaEnvelope, FaHome } from "react-icons/fa"
import { useShop } from "../context/context"
import "./Login.css"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const { login } = useShop()
  const navigate = useNavigate()

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (!email || !password) {
      setError("Please fill in all fields")
      setLoading(false)
      return
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      setLoading(false)
      return
    }

    // Get all registered users
    const users = JSON.parse(localStorage.getItem("registeredUsers") || "[]")
    const foundUser = users.find((user) => user.email === email)

    if (!foundUser) {
      setError("No user found with this email. Please sign up first.")
      setLoading(false)
      return
    }

    if (foundUser.password === password) {
      login({ email: foundUser.email, name: foundUser.name })
      navigate("/")
    } else {
      setError("Invalid password")
    }

    setLoading(false)
  }

  return (
    <div className="auth-container">
      <Card className="auth-card">
        <Card.Body className="p-4 p-md-5">
          <div className="auth-header">
            <h2 className="auth-title">Welcome Back</h2>
            <p className="auth-subtitle">Sign in to your account</p>
          </div>

          {error && <Alert variant="danger">{error}</Alert>}

          <Form className="auth-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope className="text-muted" />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock className="text-muted" />
                </span>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100 py-2" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </Form>

          <div className="auth-footer">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="auth-link">
                Sign Up
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

export default Login
