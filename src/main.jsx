{import { useState } from "react"

function ItsDiariesStore() {
  const [cart, setCart] = useState([])
  const [showForm, setShowForm] = useState(false)

  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [payment, setPayment] = useState("COD")

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const placeOrder = () => {
    if (!name || !address || !phone) {
      alert("Please fill all details ❗")
      return
    }

    alert(
      `Order Placed ✅\nName: ${name}\nPayment: ${payment}`
    )

    // reset
    setCart([])
    setShowForm(false)
    setName("")
    setAddress("")
    setPhone("")
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      
      <h1 style={{ textAlign: "center" }}>Her Diaries 💖</h1>

      {/* Products */}
      <h2>Jewellery</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>Bracelet 💫</h3>
          <p>₹499</p>
          <button onClick={() => addToCart("Bracelet")}>
            Add to Cart
          </button>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>Ring 💍</h3>
          <p>₹299</p>
          <button onClick={() => addToCart("Ring")}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Cart */}
      <h2 style={{ marginTop: "30px" }}>Cart 🛒</h2>

      {cart.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <button onClick={() => setShowForm(true)}>
          Proceed to Order
        </button>
      )}

      {/* Order Form */}
      {showForm && (
        <div style={{ marginTop: "20px" }}>
          <h3>Order Details 📦</h3>

          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          /><br /><br />

          <input
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          /><br /><br />

          <input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          /><br /><br />

          <h4>Payment Method</h4>

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <option>COD</option>
            <option>UPI</option>
          </select>

          <br /><br />

          <button onClick={placeOrder}>
            Place Order ✅
          </button>
        </div>
      )}

      {/* Support */}
      <div style={{ marginTop: "40px" }}>
        <h3>Customer Support 📞</h3>
        <p>Email: herdiaries69@gmail.com</p>
        <p>Phone: +91 7389957477</p>
      </div>

    </div>
  )
}

export default ItsDiariesStore
