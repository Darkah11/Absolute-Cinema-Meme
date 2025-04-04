"use client";
import Image from "next/image";
import Link from "next/link";
import CopyButton from "./components/CopyButton";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

export default function Home() {
  return (
    <>
      <section className=" relative px-5 md:px-8 py-48 lg:px-12 xl:px-24">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className=" absolute top-0 left-0 w-full h-full object-cover"
        />
        <motion.div variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" absolute z-30 top-0">
          <img src="acm-logo.png" alt="" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className=" max-w-[350px]  md:max-w-fit relative z-30  "
        >
          <h1 className=" text-6xl md:text-7xl  lg:text-8xl text-white uppercase font-light leading-16 md:leading-18 lg:leading-24">
            Absolute <br /> Cinema <br /> $ABC{" "}
          </h1>
          {/* <h1 className=" text-3xl text-white uppercase">Do you know about the Absolute Cinema meme that our coin is based on? </h1> */}
        </motion.div>
      </section>
      <section className=" px-5 py-16 lg:px-12 xl:px-42">
        <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" mx-auto md:mx-0 relative w-fit  md:w-full md:flex md:justify-between gap-x-7 md:items-center">
          <img
            src="/about-img.png"
            alt=""
            className=" mx-auto md:mx-0 md:w-[50%]"
          />
          <div className=" about mt-5 md:mt-0  bg-white ">
            {/* <div className=" mt-5 md:absolute md:right-0 md:bottom-0 bg-white md:px-16 md:pt-12 "> */}
            <h2 className="  mx-auto uppercase text-3xl text-center font-bold about-head md:text-left md:mx-0">
              About $ABC
            </h2>
            <p className=" text-center mt-3 md:text-lg  text-base max-w-[450px] mx-auto md:text-left ">
              Do you know about the Absolute Cinema meme that our coin is based
              on?. Absolute Cinema is a reaction image of film director Martin
              Scorsese raising his hands captioned with the catchphrase. Once we become the largest meme coin on Abstract chain, it will be an ABSOLUTE CINEMA!.
            </p>
            <div className=" flex justify-center items-center gap-x-5 mt-4 md:justify-start">
              <Link target="_blank" href={"https://t.me/absolutecinemaABS"}>
                <button className=" about-btn hover:border-black hover:bg-black hover:text-white transition-all text-sm md:text-xs border bg-green-400 border-green-400 w-[150px] md:w-[120px] py-3 md:py-2 uppercase font-medium text-white ">
                  join telegram
                </button>
              </Link>
              <Link target="_blank" href={"https://x.com/absolutecineABS"}>
                <button className=" about-btn hover:border-black md:text-xs hover:text-black transition-all text-sm border border-green-400 w-[150px] md:w-[120px] py-3 md:py-2  uppercase font-medium text-green-400 ">
                  join x
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <section className=" px-5 py-10 lg:px-12 xl:px-24">
        <motion.div variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" flex md:items-center justify-center md:justify-between">
          <h2 className=" uppercase text-center text-2xl font-medium">
            Our Memes
          </h2>
          <Link
            href={"https://knowyourmeme.com/memes/absolute-cinema"}
            className=" mt-4 hidden md:block"
          >
            <button className="  hover:border-black hover:text-black transition-all text-sm border border-green-400 w-[130px] py-2 mx-auto uppercase font-medium text-green-400">
              See more
            </button>
          </Link>
        </motion.div>
        <motion.div variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" flex md:flex-wrap gap-x-5 md:gap-y-4 md:gap-x-0 md:justify-between overflow-x-scroll mt-5 scroller">
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                Meme <br />
                King
              </p>
            </div>
            <img
              src="acm-1.JPG"
              className=" min-w-[220px] h-[300px] w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                the <br />
                race
              </p>
            </div>
            <img
              src="acm-2.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                full <br />
                beard
              </p>
            </div>
            <img
              src="acm-3.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Excitement
              </p>
            </div>
            <img
              src="acm-5.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Trend
              </p>
            </div>
            <img
              src="acm-6.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                bullish <br />
                flex
              </p>
            </div>
            <img
              src="acm-7.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Enlightenment
              </p>
            </div>
            <img
              src="acm-8.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit md:w-[32%] lg:w-[24%]">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                $abc <br />
                and chill
              </p>
            </div>
            <img
              src="acm-9.JPG"
              className=" min-w-[220px] h-[300px] md:w-full object-cover"
              alt=""
            />
          </div>
        </motion.div>
        {/* <div className=" flex flex-col gap-y-5 mt-5 ">
          <div className=" flex">
            <div className=" relative w-fit mx-auto">
              <div className=" absolute top-0 left-0 w-full h-full img-overlay">
                <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                  The <br />
                  Race
                </p>
              </div>
              <img
                src="acm-2.JPG"
                className="h-[250px] object-cover mx-auto"
                alt=""
              />
            </div>
            <div className=" relative w-fit mx-auto">
              <div className=" absolute top-0 left-0 w-full h-full img-overlay">
                <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                  The <br />
                  Race
                </p>
              </div>
              <img
                src="acm-2.JPG"
                className="h-[250px]  object-cover mx-auto"
                alt=""
              />
            </div>
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                Meme <br />
                King
              </p>
            </div>
            <img
              src="ac-1.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Race
              </p>
            </div>
            <img
              src="ac-2.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                Full <br />
                Beard
              </p>
            </div>
            <img
              src="ac-3.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Excitement
              </p>
            </div>
            <img
              src="ac-5.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Trend
              </p>
            </div>
            <img
              src="ac-6.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                Bullish <br />
                Flex
              </p>
            </div>
            <img
              src="ac-7.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Enlightenment
              </p>
            </div>
            <img
              src="ac-8.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
          <div className=" relative w-fit mx-auto">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                $ABC <br />
                and chill
              </p>
            </div>
            <img
              src="ac-9.png"
              className="h-[150px] w-[335px] object-cover mx-auto"
              alt=""
            />
          </div>
        </div> */}
        <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" flex justify-center items-center">
          <Link
            href={"https://knowyourmeme.com/memes/absolute-cinema"}
            className=" mt-4 md:hidden"
          >
            <button className=" hover:border-black hover:text-black transition-all text-sm border border-green-400 w-[130px] py-2 mx-auto uppercase font-medium text-green-400">
              See more
            </button>
          </Link>
        </motion.div>
      </section>
      <section className=" bg-green-400 py-16 px-5 lg:px-12 xl:pl-24">
        <motion.div variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}>
          <h2 className=" text-center text-3xl uppercase text-white">
            How to buy
          </h2>
          <div className=" ca-container flex items-center w-fit py-2 px-5 gap-x-3 rounded-lg mx-auto mt-5 border border-gray-300">
            <p className=" text-white">0x1d7c7A06BA6.....</p>
            <CopyButton text={"0x1d7c7A06BA6F5A7ca84945b641617Aab8bBf1dE3"} />
          </div>
        </motion.div>
        <motion.div variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" mt-8 flex flex-col md:flex-wrap  md:flex-row md:justify-between gap-y-5">
          <div className=" w-full md:w-[47%]  hover:bg-gray-950 relative bg-black text-white px-5 py-10">
            <p className=" text-green-400 absolute right-3 bottom-3 text-3xl font-bold">
              01
            </p>
            <h3 className=" uppercase text-green-400 font-bold text-2xl">
              create a wallet{" "}
            </h3>
            <p className=" mt-2">
              Sign up directly at abs.xyz and create your wallet, or import
              abstract network into MetaMask/wallet of your choice
            </p>
          </div>
          <div className=" w-full md:w-[47%]  hover:bg-gray-950 relative bg-black text-white px-5 py-10">
            <p className=" text-green-400 absolute right-3 bottom-3 text-3xl font-bold">
              02
            </p>
            <h3 className=" uppercase text-green-400 font-bold text-2xl">
              deposit some eth
            </h3>
            <p className=" mt-2">
              Using a centralised exchange purchase your desired amount of ETH
              and send it to your new wallet
            </p>
          </div>
          <div className=" w-full md:w-[47%]  hover:bg-gray-950 relative bg-black text-white px-5 py-10">
            <p className=" text-green-400 absolute right-3 bottom-3 text-3xl font-bold">
              03
            </p>
            <h3 className=" uppercase text-green-400 font-bold text-2xl">
              BRIDGE TO ABSTRACT
            </h3>
            <p className=" mt-2">
              Bridge your mainnet ETH to Abstract ETH . This is important as you
              will need it to swap for $ABC
            </p>
          </div>
          <div className=" w-full md:w-[47%]  hover:bg-gray-950 relative bg-black text-white px-5 py-10">
            <p className=" text-green-400 absolute right-3 bottom-3 text-3xl font-bold">
              04
            </p>
            <h3 className=" uppercase text-green-400 font-bold text-2xl">
              swap to $ABC
            </h3>
            <p className=" mt-2">
              Using the abstract trade function at abs.xyz, You can now swap
              your abstract ETH for $ABC on the abstract dashboard
            </p>
          </div>
        </motion.div>
      </section>
      <section className=" bg-green-950 py-16 px-5">
        <motion.h2 variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" text-center text-3xl uppercase text-white ">
          Tokenomics
        </motion.h2>
        <motion.div variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" mt-8 flex flex-col md:flex-wrap  md:flex-row md:justify-between md:items-center gap-y-5">
          <div className=" hover:border-black bg-white w-full md:w-[45%] border-5 border-green-400 py-8 text-center mx-auto">
            <h3 className=" text-green-950 uppercase font-bold text-2xl">
              Symbol
            </h3>
            <p className=" text-lg font-medium uppercase">$ABC</p>
          </div>
          <div className=" hover:border-black bg-white w-full md:w-[45%] border-5 border-green-400 py-8 text-center mx-auto">
            <h3 className=" text-green-950 uppercase font-bold text-2xl">
              chain
            </h3>
            <p className=" text-lg font-medium uppercase">abstract</p>
          </div>
          <div className=" hover:border-black bg-white w-full md:w-[45%] border-5 border-green-400 py-8 text-center mx-auto">
            <h3 className=" text-green-950 uppercase font-bold text-2xl">
              tax
            </h3>
            <p className=" text-lg font-medium uppercase">0%</p>
          </div>
          <div className=" hover:border-black bg-white w-full md:w-[45%] border-5 border-green-400 py-8 text-center mx-auto">
            <h3 className=" text-green-950 uppercase font-bold text-2xl">
              supply
            </h3>
            <p className=" text-base font-medium uppercase">
              1% luca & 4% burnt
            </p>
          </div>
          <div className=" hover:border-black bg-white w-full md:w-[45%] border-5 border-green-400 py-8 text-center mx-auto">
            <h3 className=" text-green-950 uppercase font-bold text-2xl">
              liquidity
            </h3>
            <p className=" text-lg font-medium uppercase">burned and locked</p>
          </div>
        </motion.div>
      </section>
      <footer className=" bg-black py-16 text-white">
        <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" flex flex-col justify-center items-center">
          <img src="acm-logo.png" alt="" />
          <Link
            href={"https://knowyourmeme.com/memes/absolute-cinema"}
            className=" mt-4"
          >
            <button className=" hover:border-white hover:text-white transition-all text-sm border border-green-400 w-[130px] py-2 mx-auto uppercase font-medium text-green-400">
              Visit us
            </button>
          </Link>
        </motion.div>
        <motion.div variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }} className=" mt-10">
          <div className=" flex gap-x-3 items-center justify-center">
            <Link href={"https://t.me/absolutecinemaABS"}>
              <img src="/telegram.svg" alt="" />
            </Link>
            <Link href={"https://x.com/absolutecineABS"}>
              <img src="/x.svg" alt="" />
            </Link>
          </div>
          <p className=" text-center text-sm mt-3">
            &copy; 2025 Absolute Cinema Meme. All rights reserved.
          </p>
        </motion.div>
      </footer>
    </>
  );
}
