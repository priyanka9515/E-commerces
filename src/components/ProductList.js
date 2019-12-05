import React from "react";

import faker from "faker";
import Box from "./Box";
import "./Box.css";
import "bootstrap/dist/css/bootstrap.min.css";

let images = [];
for (let i = 0; i < 16; i++) {
  images.push({
    img: faker.image.image(250, 250, false),
    price: faker.random.number(),
    description: faker.lorem.sentence()
  });
}

export default class List extends React.Component {
  render() {
    return (
      <div className="box">
        {images.map(image => (
          <Box
            image={image.img}
            price={image.price}
            description={image.description}
          />
        ))}
      </div>
    );
    // return <div>{images}</div>;
  }
}
