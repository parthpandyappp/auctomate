import { Routes } from "./routes"
import { Nav, Footer } from "./components"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Routes />
      <Footer />
    </div>
  )
}
export default App;
