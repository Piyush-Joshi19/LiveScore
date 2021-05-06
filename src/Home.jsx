import React from "react";
import {Carousel} from "react-bootstrap";

const Home = () => {
    return (
        <>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 home_img"
      src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1494&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Welcome to my <strong className="app-name">Live Score App</strong></h1>
      <h3>Live Score provides you real time Cricket Score</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    )
}



export default Home;


