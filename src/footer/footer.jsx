import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Container from "../container";
import FooterList from "./footerList";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-teal-700 text-slate-200 text-sm mt-16 ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <NavLink
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Cyberblog
              </span>
            </NavLink>
            <p className="text-white text-sm font-italic">
              Your Trusted Partner in Crypto Recovery: Expert Solutions for Lost
              Assets
            </p>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Our Services</h3>
            <ul className="text-[#FD8D1E]">
              <li>Crypto Asset Consultation</li>
              <li>Blockchain Legal Expertise</li>
              <li>Decentralized Security Solutions</li>
              <li>Smart Contract Audits</li>
              <li>Risk Management and Recovery</li>
              <li>Cybersecurity for Crypto</li>
            </ul>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className=" text-base font-bold mb-2">About Us</h3>
            <p className="mb-2 text-[#FD8D1E]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, harum quis rerum voluptate, a dolorem tenetur maxime
              eaque sed placeat impedit. Veniam distinctio maxime necessitatibus
              fugiat error, autem non beatae similique incidunt expedita nostrum
              earum dicta deleniti cum. Saepe quis, eligendi distinctio ea
              laborum iure quisquam. Repellat facere hic magni.
            </p>
            <p className="text-white">
              &copy;{new Date().getFullYear()} CyberBlog. All rights reserved
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Get in Touch</h3>
            <div className="flex items-center text-[#FD8D1E]">
              <FaMapMarkerAlt size={24} className="mr-2" />
              <h3>Sytinskiy Lane, 5 с2, Moscow Russia 123104</h3>
            </div>
            <a
              href="mailto:support@cyberhelponline.org"
              className="flex items-center text-[#FD8D1E]"
            >
              <FaEnvelope size={24} className="mr-2" />
              <h3>support@cyberhelponline.org</h3>
            </a>
            <div className="flex gap-2 ">
              <Link href="#">
                <FaFacebook size={24} />
              </Link>
              <Link href="#">
                <FaTwitter size={24} />
              </Link>
              <Link href="#">
                <FaYoutube size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
}
