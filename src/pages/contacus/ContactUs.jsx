import {  Link } from "react-router-dom";
import Header from "../../ui/Header"
import { IoHomeOutline } from "react-icons/io5";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import Button from "../../ui/Button";
import Footer from "../../ui/Footer";
import MobileHeader from "../../ui/MobileHeder";
import { toast } from "react-toastify";
import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warning('لطفاً تمام فیلدها را پر کنید.');
     
    } else {
      toast.success("پیام شما با موفقیت ارسال شد!");
    }
  }
    return (
      <div className="">
        <Header />
        <MobileHeader />
        <main className="py-10 bg-slate-100">
          <span className="flex items-center gap-2 mt-10  justify-center ">
            <Link
              to="/"
              className="flex gap-2 items-center text-slate-800 text-xl "
            >
              <IoHomeOutline size="22px" color="oklch(0.54 0.01 0)" /> Home
            </Link>
            <HiMiniChevronDoubleRight />
            <h4 className="text-slate-400">contactus</h4>
          </span>

          <section className="flex justify-center mt-5 ">
            <div className="flex md:flex-row flex-col justify-between lg:w-10/12 w-full  px-4 lg:px-0 gap-10">
              <div className="space-y-10 md:w-1/2 w-full">
                <div className="space-y-4">
                  <h2 className=" font-bold text-2xl">Contact info</h2>
                  <div className="space-y-2">
                    <span className="flex gap-2">
                      <SlLocationPin color="red" size="22px" />
                      <h6 className="font-bold"> Address</h6>
                    </span>
                    <p className="font-light">
                      160 Pennsylvania Ave NW, Washington, Castle, PA 16101-5161
                    </p>
                  </div>
                  <div className="space-y-2">
                    <span className="flex gap-2">
                      <SlPhone color="red" size="22px" />
                      <h6 className="font-bold">Phone numbers</h6>
                    </span>
                    <p className="font-light">125-711-811 | 125-668-886</p>
                  </div>
                  <div className="space-y-2">
                    <span className="flex gap-2">
                      <BiSupport color="red" size="22px" />
                      <h6 className="font-bold"> Support</h6>
                    </span>
                    <p className="font-light">Support.photography@gmail.com</p>
                  </div>
                </div>
                <div>
                  <h2 className=" font-bold text-2xl">Send message</h2>
                </div>
                <div>
                  <form action="" className="flex flex-col gap-5">
                    <input
                      className="py-4 rounded-md px-5 bg-slate-50 border border-slate-400 text-gray-500 focus:outline-none"
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <input
                      className="py-4 rounded-md px-5 bg-slate-50 border border-slate-400 text-gray-500 focus:outline-none"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className="py-4 rounded-md px-5 bg-slate-50 border border-slate-400 text-gray-500 focus:outline-none"
                      type="text"
                      placeholder="Website(optional)"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                    <textarea
                      className="py-10 rounded-md px-5 bg-slate-50 border border-slate-400 text-gray-500 focus:outline-none"
                      name="message"
                      placeholder="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <Button onClick={handleSubmit} type="submit">
                      Send message
                    </Button>
                  </form>
                </div>
              </div>
              <div className="h-full md:w-1/2 w-full">
                <iframe
                  className="h-full  w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48158.305462977965!2d-74.13283844036356!3d41.02757295168286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2e440473470d7%3A0xcaf503ca2ee57958!2sSaddle%20River%2C%20NJ%2007458%2C%20USA!5e0!3m2!1sen!2sbd!4v1575917275626!5m2!1sen!2sbd"
                ></iframe>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
}

export default ContactUs
