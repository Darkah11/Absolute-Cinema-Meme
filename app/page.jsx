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
        <div className=" max-w-[350px] relative z-30 py-7 px-3  border-2 border-green-400">
          <h1 className=" text-5xl text-white uppercase font-light leading-14">
            Absolute <br /> Cinema <br /> $ABC{" "}
          </h1>
          {/* <h1 className=" text-3xl text-white uppercase">Do you know about the Absolute Cinema meme that our coin is based on? </h1> */}
        </div>
      </section>
      <section className=" px-5 py-16">
        <div>
          <img src="/about-img.png" alt="" />
          <div className=" mt-5">
            <h2 className=" mx-auto uppercase text-2xl text-center font-medium about-head">
              About $ABC
            </h2>
            <p className=" text-center mt-3 text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              doloremque nemo earum labore provident temporibus!
            </p>
            <div className=" flex justify-center items-center gap-x-5">
              <button className=" hover:border-black hover:bg-black hover:text-white transition-all text-sm border bg-green-400 border-green-400 w-[150px] py-3 uppercase font-medium text-white my-4">
                join telegram
              </button>
              <button className=" hover:border-black hover:text-black transition-all text-sm border border-green-400 w-[150px] py-3  uppercase font-medium text-green-400 my-4">
                join x
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className=" px-5">
        <div>
          <h2 className=" uppercase text-center text-2xl font-medium">
            Our Memes
          </h2>
          <button className=" hidden">See more</button>
        </div>
        <div className=" flex gap-x-5 overflow-x-scroll mt-5 scroller">
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                Meme <br />
                King
              </p>
            </div>
            <img
              src="acm-1.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                the <br />
                race
              </p>
            </div>
            <img
              src="acm-2.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                full <br />
                beard
              </p>
            </div>
            <img
              src="acm-3.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Excitement
              </p>
            </div>
            <img
              src="acm-5.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Trend
              </p>
            </div>
            <img
              src="acm-6.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                bullish <br />
                flex
              </p>
            </div>
            <img
              src="acm-7.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                The <br />
                Enlightenment
              </p>
            </div>
            <img
              src="acm-8.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
          <div className=" relative w-fit">
            <div className=" absolute top-0 left-0 w-full h-full img-overlay">
              <p className=" text-2xl absolute bottom-3 left-4 uppercase text-white">
                $abc <br />
                and chill
              </p>
            </div>
            <img
              src="acm-9.JPG"
              className=" min-w-[220px] h-[300px] object-cover"
              alt=""
            />
          </div>
        </div>
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
        <div className=" flex justify-center items-center">
          <button className=" hover:border-black hover:text-black transition-all text-sm border border-green-400 w-[130px] py-2 mx-auto uppercase font-medium text-green-400 my-4">
            See more
          </button>
        </div>
      </section>
      <section className=" bg-green-950 py-16">
        <h2 className=" text-center text-3xl uppercase text-white">
          Tokenomics
        </h2>
      </section>
      <footer className=" bg-black py-16 text-white">
        <div className=" flex flex-col justify-center items-center">
          <img src="acm-logo.png" alt="" />
          <button className=" hover:border-white hover:text-white transition-all text-sm border border-green-400 w-[130px] py-2 mx-auto uppercase font-medium text-green-400 my-4">
            Visit us
          </button>
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
          <p className=" text-center text-sm mt-3">
            &copy; 2025 Absolute Cinema Meme. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
