import { Navbar1 as Navbar } from "./components/navbar"
import { Hero45 as Hero   } from "./components/hero"
import { JobListing } from "./components/jobListing"

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero heading="Find your dream job" />
        <JobListing />
      </div>
    </>
  )
}

export default App