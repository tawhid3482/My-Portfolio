/* eslint-disable react/no-unescaped-entities */
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
import toast from "react-hot-toast";
// import { useRef } from "react";
const serviceId = import.meta.env.VITE_SERVICEID;
const templateId = import.meta.env.VITE_TEMPLATEID;
const publicKey = import.meta.env.VITE_PUBLICKEY;

const Contact = () => {
  // const form = useRef();
  const resetForm = () => {
    const form = document.getElementById("contactForm");
    form.reset();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const from_name = form.from_name.value;
    const from_email = form.from_email.value;
    const message = form.message.value;
    // console.log(from_name, from_email, message);

    const templateParams = {
      from_name,
      from_email,
      to_name: "Tawhidul Islam",
      message,
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        console.log(result.text);
        if (result.text === "OK") {
          resetForm();
          toast.success("Your message successfully send!");
        }
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="text-white w-11/12 mx-auto">
      <SectionTitle subtitle1={"get in"} subtitle2={"touch"}></SectionTitle>
      <div className="grid grid-cols-1 md:flex gap-8">
        <div className="md:w-1/3">
          <h2 className="text-xl font-bold uppercase"> Don't Be shy!</h2>
          <p className="">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be a part of your
            vision
          </p>

          <div className="text-left flex gap-5 mt-5">
            <div className="">
              <FaMap className="text-4xl text-yellow-600 "></FaMap>
            </div>
            <div className="">
              <p className="uppercase text-gray-300">address point</p>
              <h2 className=" font-medium text-lg">Madhupur,Tangail</h2>
              <h5 className=" w-full md:w-[450px]">Dhaka,Bangladesh</h5>
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
              <a href="https://web.facebook.com/profile.php?id=100060174410562">
                <FaFacebook className="text-4xl mt-2"></FaFacebook>
              </a>
              <a href="https://x.com/Tawhidul3482">
                <FaTwitter className="text-4xl mt-2"></FaTwitter>
              </a>
              <a href="https://www.linkedin.com/in/tawhidul-islam-saikat-86b61a2a0">
                <FaLinkedin className="text-4xl mt-2"></FaLinkedin>
              </a>
              <a href="https://github.com/tawhid3482">
                <FaGithub className="text-4xl mt-2"></FaGithub>
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          <form id="contactForm" onSubmit={sendEmail}>
            <div className="flex justify-around items-center gap-3">
              <input
                placeholder="Your Name"
                className="text-white bg-transparent border border-yellow-600 rounded-3xl p-3 w-full"
                type="text"
                name="from_name"
              />
              <input
                placeholder="Your Email"
                className="text-white w-full bg-transparent border-yellow-600 border rounded-3xl p-3"
                type="email"
                name="from_email"
              />
            </div>
            <br />
            <br />
            <textarea
              placeholder="Wright Your Message Here."
              className=" bg-transparent border-yellow-600 border rounded-3xl p-8 w-full text-white"
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
