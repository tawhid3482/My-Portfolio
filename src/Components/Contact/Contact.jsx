import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMap,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { MdMarkEmailUnread } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sv7i17n",
        "template_nf7vqxk",
        form.current,
        "Q3TAuECGDlUuLdAnW"
      )
      .then(
        (result) => {
            console.log(result.text);
            if (result.text === 'OK') {
              form.current.reset(); 
            }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="text-white">
      <SectionTitle subtitle1={"get in"} subtitle2={"touch"}></SectionTitle>
      <div className="flex gap-8">
        <div className="w-1/3">
          <h2 className="text-xl font-bold uppercase">Don't Be shy!</h2>
          <p>
            Fee free to get in touch with me. I am always open to discussing new
            projects,creative ideas or opportunities to the part your visions
          </p>
          <div className="text-left flex gap-5 mt-5">
            <div className="">
              <FaMap className="text-4xl text-yellow-600 "></FaMap>
            </div>
            <div className="">
              <p className="uppercase text-gray-300">address point</p>
              <h2 className=" font-medium text-lg">Madhupur,Tangail</h2>
              <h5 className="w-[450px]">Dhaka,Bangladesh</h5>
            </div>
          </div>
          <div className="text-left flex gap-5 mt-5">
            <div className="">
              <MdMarkEmailUnread className="text-4xl text-yellow-600 "></MdMarkEmailUnread>
            </div>
            <div className="">
              <p className="uppercase text-gray-300">Email me</p>
              <h2 className=" font-medium text-lg">
                tawhidulislam3482@gmail.com
              </h2>
            </div>
          </div>
          <div className="text-left flex gap-5 mt-5">
            <div className="">
              <FaPhone className="text-4xl text-yellow-600 "></FaPhone>
            </div>
            <div className="">
              <p className="uppercase text-gray-300">call me</p>
              <h2 className=" font-medium text-lg">01826853371</h2>
            </div>
          </div>
          <div className="mt-5">
            <p className="text-xl uppercase font-semibold mb-3">
              Social media{" "}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              <a href="">
                <FaFacebook className="text-4xl mt-2"></FaFacebook>
              </a>
              <a href="">
                <FaTwitter className="text-4xl mt-2"></FaTwitter>
              </a>
              <a href="">
                <FaLinkedin className="text-4xl mt-2"></FaLinkedin>
              </a>
              <a href="">
                <FaGithub className="text-4xl mt-2"></FaGithub>
              </a>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-around items-center gap-3">
              <input
                placeholder="Your Name"
                className="text-white bg-transparent border rounded-3xl p-3 w-full"
                type="text"
                name="from_name"
              />
              <input
                placeholder="Your Email"
                className="text-white w-full bg-transparent border rounded-3xl p-3"
                type="email"
                name="from_email"
              />
            </div>
            <br />
            <br />
            <textarea
              placeholder="Your Message"
              className=" bg-transparent border rounded-3xl p-8 w-full text-white"
              name="message"
            />
            <div className="text-center mt-3">
              <input
                className="btn rounded-3xl bg-transparent uppercase text-white border border-yellow-600"
                type="submit"
                value="send message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
