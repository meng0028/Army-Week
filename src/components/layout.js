import * as React from "react"
import Navbar from "./Common/navbar/navbar.js"
import Footer from "./Common/footer/footer.js"
import Carousel from "./Common/carousel/carousel.js"
import Grid from "./Common/grid/grid.js"
import Paper from "./Common/paper/paper.js"

// Styles
import "../components/Common/styles/reset.css"
import "../components/Common/styles/accessibility.css"
import "../components/Common/styles/global.module.css"
import * as styles from "./layout.module.css"

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <Carousel />
      <Grid />
      <Paper />
      <Footer />
    </>
  )
}

export default Layout
