function ItsDiariesStore() {
  const handleClick = () => {
    alert("Shop coming soon 🛍️")
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Her Diaries 💖</h1>
      <p>Welcome to my store</p>
      <button onClick={handleClick}>Shop Now</button>
    </div>
  )
}

export default ItsDiariesStore
