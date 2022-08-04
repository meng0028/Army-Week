import * as React from "react"
import Button from "@mui/material/Button"
import "bootstrap/dist/css/bootstrap.css"
import Carousel from "react-bootstrap/Carousel"
import "./carousel.css"

export default function App() {
  return (
    <div style={{ display: "block", width: 1600, padding: 30 }}>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          <Carousel.Caption>
            <h1>#1 Call to Action</h1>
            <h2>Solution Request?</h2>
            <Button variant="contained">Submit</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
