import React from "react";
import Carousel from "./carosal";

          import img1 from "/img1.jpg";
          import img2 from "/img2.jpg";
          import img3 from "/img3.jpg";

function Home() {
  return (
    <div className="p-6">
      <Carousel images={[img1, img2, img3]} />
    </div>
  );
}

export default Home;
