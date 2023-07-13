import { motion, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { gaurav, bwmap, worldmap } from '../assets';

const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      setScrollProgress(value);
    });
  }, [scrollYProgress]);

  return (
    <>
      <div></div>
      <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden">
        <div className={`absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span className="sm:text-battleGray sm:text-[90px] text-eerieBlack text-[50px] font-mova font-extrabold uppercase">
                Gaurav Sharma
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              A Computer Science Student. <br className="sm:block hidden" />
              At VIT.
            </p>
          </div>
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div>
          <motion.img
            id="personal"
            className="absolute bottom-0 right-1 ml-[50vw] lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw] sm:h-[40vh] md:h-[70vh] xl:h-[80vh]"
            src={gaurav}
            alt="gaurav"
            style={{
              x: scrollProgress * -500,
              y: scrollProgress * 500,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
