import { Routes } from "./routes"
import { Nav, Footer } from "./components"

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Routes />
      <Footer />
    </div>
  )
}
export default App;
