import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
      <section className=" relative px-5 py-48">
        <img
          src="/hero-bg.jpg"
          alt="hero background"
          className=" absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className=" absolute z-30 top-0">
          <img src="acm-logo.png" alt="" />
        </div>
        <div className=" max-w-[350px] relative z-30 py-7 px-3  border-2 border-white">
          <h1 className=" text-5xl text-white uppercase font-light leading-14">
            Absolute <br /> Cinema <br /> meme{" "}
          </h1>
          {/* <h1 className=" text-3xl text-white uppercase">Do you know about the Absolute Cinema meme that our coin is based on? </h1> */}
        </div>
      </section>
      <section className=" px-5 py-16">
        <div>
          <img src="/about-img.png" alt="" />
          <div className=" mt-5">
            <h2 className=" capitalize text-xl text-center font-semibold">
              Do you know about the Absolute Cinema meme that our coin is based
              on?
            </h2>
            <p className=" text-center mt-3 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              doloremque nemo earum labore provident temporibus!
            </p>
          </div>
        </div>
      </section>
      <section className=" px-5">
        <div>
          <h2 className=" uppercase text-center text-2xl font-semibold">
            Our Memes
          </h2>
          <button className=" hidden">See more</button>
        </div>
        <div className=" flex flex-col gap-y-10 mt-5 ">
          <div>
            <img src="acm-1.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-2.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-3.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-4.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-5.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-6.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-7.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-8.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
          <div>
            <img src="acm-9.JPG" className=" max-w-[300px] mx-auto" alt="" />
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <button className=" text-sm border border-green-400 w-[130px] py-2 mx-auto uppercase font-medium text-green-400 my-4">
            See more
          </button>
        </div>
      </section>
      <section className=" bg-green-950 py-16">
        <h2 className=" text-center text-3xl uppercase text-white">Tokenomics</h2>
      </section>
      <footer className=" bg-black py-16 text-white">
        <div className=" flex justify-center items-center">
          <img src="acm-logo.png" alt="" />
        </div>
        <div className=" mt-5">
          <div className=" flex gap-x-3 items-center justify-center">
            <Link href={"/"}>
            <img src="/icon-twitter.svg" alt="" />
            </Link>
            <Link href={"/"}>
            <img src="/icon-pinterest.svg" alt="" />
            </Link>
            <Link href={"/"}>
            <img src="/icon-instagram.svg" alt="" />
            </Link>
          </div>
          <p className=" text-center text-sm mt-3">C 2025 Absolute Cinema Meme. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
