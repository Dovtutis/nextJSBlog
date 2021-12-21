import React from "react";
import Image from "next/image";

import classes from "./Hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/image1.jpg" alt="An image showing a man" width={300} height={300} />
      </div>
      <h1>Hi, I'm Dovydas</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate,
        labore nobis reprehenderit, nam asperiores dolore repudiandae corporis
        perferendis!
      </p>
    </section>
  );
}

export default Hero;
