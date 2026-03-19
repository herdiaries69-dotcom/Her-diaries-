import { useState } from "react"

function ItsDiariesStore() {
  const [page, setPage] = useState("home")

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Her Diaries 💖</h1>

      {/* Navbar */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("products")}>Jewellery</button>
        <button onClick={() => setPage("cart")}>Cart</button>
        <button onClick={() => setPage("support")}>Support</button>
        <button onClick={() => setPage("dashboard")}>Dashboard</button>
      </div>

      {/* Pages */}
      {page === "home" && <Home />}
      {page === "products" && <Products />}
      {page === "cart" && <Cart />}
      {page === "support" && <Support />}
      {page === "dashboard" && <Dashboard />}
    </div>
  )
}

/* ---------------- Pages ---------------- */

function Home() {
  return <p>Welcome to my jewellery store 💍</p>
}

function Products() {
  return (
    <div>
      <h2>Jewellery</h2>

      <h3>Bracelet</h3>
      <p>Price: ₹499</p>
      <button onClick={() => alert("Added to cart")}>Buy</button>

      <h3>Ring</h3>
      <p>Price: ₹299</p>
      <button onClick={() => alert("Added to cart")}>Buy</button>
    </div>
  )
}

function Cart() {
  return (
    <div>
      <h2>Your Cart 🛒</h2>
      <button onClick={() => alert("Payment Successful 💳")}>
        Pay Now
      </button>
    </div>
  )
}

function Support() {
  return (
    <div>
      <h2>Customer Support 📞</h2>
      <p>Email: support@herdiaries.com</p>
      <p>WhatsApp: 9999999999</p>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Admin Dashboard 📊</h2>
      <p>Total Orders: 10</p>
      <p>Total Revenue: ₹5000</p>
    </div>
  )
}

export default ItsDiariesStore
