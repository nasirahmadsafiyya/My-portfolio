import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "HTML AND CSS",
    // img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    img: "./people.webp",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure. Ratione, rem voluptate? Culpa quam facilis veniam iste iusto doloremque obcaecati officiis non. Itaque voluptatum eligendi quae asperiores dolor, modi perspiciatis consectetur corrupti dolorum debitis sunt ea ab a sed?",
  },

  {
    id: 2,
    title: "JAVASCRIPT",
    // img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    img: "./people.webp",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure. Ratione, rem voluptate? Culpa quam facilis veniam iste iusto doloremque obcaecati officiis non. Itaque voluptatum eligendi quae asperiores dolor, modi perspiciatis consectetur corrupti dolorum debitis sunt ea ab a sed?",
  },

  {
    id: 3,
    title: "REACT",
    // img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600",
    img: "./people.webp",
    desc: "Lorem, Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure. Ratione, rem voluptate? Culpa quam facilis veniam iste iusto doloremque obcaecati officiis non. Itaque voluptatum eligendi quae asperiores dolor, modi perspiciatis consectetur corrupti dolorum debitis sunt ea ab a sed?",
  },

  {
    id: 4,
    title: "NODE JS",
    // img: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    img: "./people.webp",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus earum porro nulla amet? Nemo, quisquam in deserunt libero harum iure. Ratione, rem voluptate? Culpa quam facilis veniam iste iusto doloremque obcaecati officiis non. Itaque voluptatum eligendi quae asperiores dolor, modi perspiciatis consectetur corrupti dolorum debitis sunt ea ab a sed?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref}>
      <div className="container flex items-center m-auto justify-center w-full h-full overflow-hidden">
        <div className="Wrapper max-w-7xl gap-12 flex items-center justify-center h-full">
          <div className="image-Container flex-1  h-2/4" ref={ref}>
            <img
              className="object-cover w-full h-full"
              src={item.img}
              alt="featured work"
            />
          </div>
          <motion.div
            className="textContainer flex-1 flex gap-1 flex-col"
            style={{y}}
          >
            <h2 className="text-3xl">{item.title}</h2>
            <p className="text-gray-400 text-l">{item.desc}</p>
            <button
              className="border-none rounded-lg p-2 w-52
             bg-orange-400 text-black font-medium"
            >
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div class="progress sticky top-0 left-0 text-center text-orange-400 p-2 text-4xl ">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="progressBar h-1 bg-white  m-2"
        ></motion.div>
      </div>

      {items.map((item) => (
        <Single item={item} key={item} />
      ))}
    </div>
  );
};

export default Portfolio;
