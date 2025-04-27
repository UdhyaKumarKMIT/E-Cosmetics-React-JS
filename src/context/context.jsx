"use client"

import { createContext, useState, useContext, useEffect } from "react"

// Create context
const ShopContext = createContext()

// Sample cosmetics products data
const products = [
  {
    id: 1,
    name: "Hydrating Face Cream",
    price: 120,
    image: "ProductImages/cream1.png",
    category: "skincare",
    featured: true,
    description: "A deeply hydrating face cream that nourishes and revitalizes your skin.",
  },
  {
    id: 2,
    name: "Indulekha Bringha Oil",
    price: 300,
    image: "ProductImages/indulekha1.png",
    category: "makeup",
    featured: true,
    description: "Bringha Hair oil is an ayurvedic medicine recommended by Ayurvedic Experts to reduce Hair fall.",
  },
  {
    id: 3,
    name: "Himalayas Facewash",
    price: 200,
    image: "ProductImages/Himalayas.png",
    category: "makeup",
    featured: true,
    description: "Himalaya's Purifying Neem Foaming Face Wash, developed after extensive research, is a combination of Neem and Turmeric. ",
  },
  {
    id: 4,
    name: "Emulse Perfume ",
    price: 750,
    image: "ProductImages/emulse.png",
    category: "haircare",
    featured: false,
    description: "Emulse is for the men and women who stand out and aren't afraid to command any room that they enter. The fragrance opens with lemon and fresh notes.",
  },
  {
    id: 5,
    name: "Indigo Henna Hair Color",
    price: 400,
    image: "ProductImages/indigo.png",
    category: "skincare",
    featured: false,
    description: "Indigo can be applied in one step or two step process to get different tones such as Black, Brown, dark brown etc. It gives natural and attractive color to hair without any chemicals. ",
  },
  {
    id: 6,
    name: "Titka Face Wash",
    price: 300,
    image: "ProductImages/tikta.png",
    category: "skincare",
    featured: true,
    description: "The Fresh Daily Tikta is a revolutionary deep cleansing formula made of rich tikta ingredients such as karela, neem, guduchi, patola, turmeric, chicory & more. ",
  },
  {
    id: 7,
    name: "Eye Shadow Liner",
    price: 500,
    image: "ProductImages/eyeliner.png",
    category: "makeup",
    featured: false,
    description: "Long-lasting eye shadow liner that glides on smoothly and stays put all day.",
  },
  
  {
    id: 8,
    name: "Refreshing Face Wash",
    price: 350,
    image: "ProductImages/simple.png",
    category: "skincare",
    featured: false,
    description: "A refreshing face wash that cleanses and refresses your skin. Perfect for daily use.",
  },
]

export const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState(null)

  // Load user and cart from localStorage on initial render
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser)
      setUser(parsedUser)

      // Load cart for the logged-in user
      const allCarts = JSON.parse(localStorage.getItem("ShoppingCarts") || "{}")
      const userCart = allCarts[parsedUser.email] || []
      setCartItems(userCart)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      const allCarts = JSON.parse(localStorage.getItem("ShoppingCarts") || "{}")
      allCarts[user.email] = cartItems
      localStorage.setItem("ShoppingCarts", JSON.stringify(allCarts))
    }
  }, [cartItems, user])

  // Add to cart
  const addToCart = (product) => {
    if (!user) {
      alert("Please login to add items to cart")
      return
    }

    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  // Remove from cart
  const removeFromCart = (productId) => {
    const existingItem = cartItems.find((item) => item.id === productId)

    if (existingItem.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== productId))
    } else {
      setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)))
    }
  }

  // Clear cart
  const clearCart = () => {
    setCartItems([])
  }

  // Login user
  const login = (userData) => {
    setUser(userData)
    localStorage.setItem("currentUser", JSON.stringify(userData))

    // Load user's cart
    const allCarts = JSON.parse(localStorage.getItem("ShoppingCarts") || "{}")
    const userCart = allCarts[userData.email] || []
    setCartItems(userCart)
  }

  // Logout user
  const logout = () => {
    setUser(null)
    setCartItems([])
    localStorage.removeItem("currentUser")
  }

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  // Get cart items count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        user,
        addToCart,
        removeFromCart,
        clearCart,
        login,
        logout,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

// Custom hook to use the shop context
export const useShop = () => {
  return useContext(ShopContext)
}
