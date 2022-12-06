import { motion } from "framer-motion";
import React from "react";
import me from "../../assets/founder.webp";
const Founder = () => {
  const options = {
    initial: { x: "-100%", opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
  };
  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Ajeet Singh</h3>
        <p>Hey everyone , I am the Ajeet Singh , the fouder of xyz company</p>
        <br />
        Our aim is make the product on this universe
      </motion.div>
    </section>
  );
};

export default Founder;
