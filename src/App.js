import { Routes } from "./routes"
import { Nav, Footer } from "./components"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <Routes />
      <Footer />
      <Toaster />
    </div>
  )
}
export default App;
