import { IoHomeOutline } from "react-icons/io5";
import Footer from "../../ui/Footer";
import Header from "../../ui/Header";

import { HiChevronDoubleRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import MobileHeader from "../../ui/MobileHeder";

function AboutUs() {
  return (
    <div className="">
      <Header />
      <MobileHeader />
      <main className="bg-white px-2">
        <span className="flex items-center gap-2 mt-2 w-full justify-center ">
          <Link
            to="/"
            className="flex gap-1 items-center text-slate-800 text-xl "
          >
            <IoHomeOutline size="22px" color="oklch(0.54 0.01 0)" /> Home
          </Link>
          <HiChevronDoubleRight />
          <h4 className="text-slate-400">aboutus</h4>
        </span>
        <div className="flex items-center justify-center   ">
          <div className="md:w-8/12 flex flex-col gap-16 w-full px-2 md:p-0 ">
            <h1 className="md:text-6xl text-5xl font-roboto font-bold mt-24 text-center text-slate-950">
              Who we are.
            </h1>
            <section className="flex flex-col items-center md:gap-10 gap-4 ">
              <p className="text-base font-roboto font-medium text-slate-500 lg:w-8/12 w-full ">
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be
                brave and grab life as the extraordinary adventure it is. So we
                make sure everyone has an equal chance to discover all the
                amazing things they’re capable of – no matter who they are,
                where they’re from or what looks they like to boss. We exist to
                give you the confidence to be whoever you want to be.{" "}
              </p>
              <img className="w-full" src="./who.jpg" alt="who we are" />
            </section>

            <section className="flex flex-col items-center md:gap-10 gap-4 ">
              <h2 className="text-center font-bold text-2xl">
                Fashion Democracy - Choice for All{" "}
              </h2>
              <p className="text-base font-roboto font-medium text-slate-500  lg:w-8/12 w-full ">
                Our audience (AKA you) is wonderfully unique, and we do
                everything we can to help you find your fit. We offer our ASOS
                Brands in more than 30 sizes – and we are committed to providing
                all sizes at the same price – so you can be confident we’ve got
                the perfect thing for you.
              </p>
              <img className="mt-10 w-full" src="./who2.avif" alt="who we are" />
            </section>
            <section className="flex flex-col items-center md:gap-10 gap-4 ">
              <h2 className="text-center font-bold text-2xl">
                Body positivity
              </h2>
              <p className="text-base font-roboto font-medium text-slate-500 lg:w-8/12 w-full ">
                It’s important for us to promote a healthy body image – we’re
                not about conforming to any stereotypes – so we work with more
                than 200 models to represent our audience. And we’re not in the
                business of digitally altering their appearance either… there’s
                no reshaping or removing stretch marks here. Our models are part
                of the ASHION family and we support them by following a Model
                Welfare Policy.
              </p>
              <img className="mt-10 mb-10 w-full" src="./who3.avif" alt="who we are" />
            </section>
            <div className="flex w-full justify-center">
              <LinkButton
                type="submit"
                to={`https://asos-12954-s3.s3.eu-west-2.amazonaws.com/files/4717/3159/7500/Fashion_with_Integrity_Strategy_Update.pdf`}
              >
                Read More
              </LinkButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
