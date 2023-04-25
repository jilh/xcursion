import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hotels from "./components/Hotels";
import Nav from "./components/Nav";
import Travel from "./components/Travel";
import Vacation from "./components/Vacation";

const App = () => {
  return(
    <>
      <Nav />
      <Header />
      <Travel />
      <Vacation />
      <Hotels />
      <Faq />
      <Footer />
    </>
  )
}

export default App;