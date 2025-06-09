import { Navbar1 as Navbar } from "./components/navbar"
import { Hero   } from "./components/hero"
import { JobListing } from "./components/jobListing"
import { Cta } from "./components/cta"


function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Hero heading="Find your dream job" />
        <JobListing />
        <Cta heading="Ready to find your dream job?" description="Our platform is designed to help you find your dream job. We have a wide range of jobs available for you to choose from." buttons={{
          primary: {
            text: "Get Started",
            url: "https://www.shadcnblocks.com",
          },
        }} />
      </div>
    </>
  )
}

export default App