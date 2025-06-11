export default function Layout({ children }) {
  return (
    <div style={{
      fontFamily: "'Josefin Sans', sans-serif",
      backgroundImage: "url('/pastell-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "top center",
      minHeight: "100vh",
      color: "#222"
    }}>
      {children}
    </div>
  )
}