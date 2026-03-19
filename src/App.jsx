import { useState } from "react"

function ItsDiariesStore() {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
    alert(item + " added to cart 🛒")
  }

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      
      {/* Header */}
      <h1 style={{ textAlign: "center" }}>Her Diaries 💖</h1>

      {/* Products */}
      <h2>Jewellery Collection</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        
        {/* Bracelet */}
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>Bracelet 💫</h3>
          <p>Price: ₹499</p>
          <button onClick={() => addToCart("Bracelet")}>
            Add to Cart
          </button>
        </div>

        {/* Ring */}
        <div style={{ border: "1px solid #ccc", padding: "10px" }}>
          <h3>Ring 💍</h3>
          <p>Price: ₹299</p>
          <button onClick={() => addToCart("Ring")}>
            Add to Cart
          </button>
        </div>

      </div>

      {/* Cart */}
      <h2 style={{ marginTop: "30px" }}>Cart 🛒</h2>
      <p>{cart.length} items added</p>

      <button onClick={() => alert("Order placed (demo) ✅")}>
        Place Order
      </button>

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
