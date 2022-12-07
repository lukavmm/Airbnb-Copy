import Navbar from "./Components/Navbar"
import Filters from "./Components/Filters"
import Rentals from "./Components/Rentals"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="App ">
        <Navbar />
        <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3"> 
          <Filters />
          <Rentals />
        </div>
        <Footer />
    </div>
  )
}

export default App
