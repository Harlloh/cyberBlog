import { Link } from "react-router-dom";
import heroimg from "../assets/Group 26.png";
import globe from "../assets/globe.png";
import phone from "../assets/phone.png";
import { FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import "./home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
const Home = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="text-sm text-[#FD8D1E]">
              Join the our crypto exchange
            </p>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Crypto Asset Recovery and Investment Services.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              CyberBlog: Your Go-To for Swift Crypto Asset Recovery. Reclaim and
              secure your lost cryptocurrencies with our efficient and reliable
              services.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 bg-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Send us a message
            </a>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex mt-6 bg-[#5B46F6]">
            <img src={heroimg} alt="hero image" />
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-stone-100 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="lg:max-w-md">
                <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                  <span className="text-sm text-gray-600 uppercase dark:text-gray-400">
                    Who we are?
                  </span>
                  <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                    About Us
                  </h1>
                </div>
                <p className="px-4 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                  We are a dedicated Crypto Asset Recovery Agency, committed to
                  providing unparalleled services. Our team of experts is driven
                  by a mission to assist clients in the recovery of lost or
                  compromised crypto assets, ensuring security and peace of
                  mind. With a proven track record and a client-centric
                  approach, we strive to be the trusted partner in navigating
                  the complexities of crypto asset recovery.
                </p>
                <div className="flex flex-wrap items-center">
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          className="bi bi-file-earmark-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        $20,000+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Assests recovered
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          className="bi bi-people-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          <path
                            fillRule="evenodd"
                            d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                          />
                          <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        120+
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Assisted client
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          className="bi bi-person-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        74
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Operational project
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 mb-6 sm:w-1/2 md:w-1/2 lg:mb-6">
                    <div className="p-6 bg-white dark:bg-gray-900">
                      <span className="text-blue-500 dark:text-blue-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          className="w-10 h-10"
                          fill="currentColor"
                          className="bi bi-alarm-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                        </svg>
                      </span>
                      <p className="mt-4 mb-2 text-3xl font-bold text-gray-700 dark:text-gray-400">
                        100%
                      </p>
                      <h2 className="text-sm text-gray-700 dark:text-gray-400">
                        Success rate
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <img
                src="https://i.postimg.cc/9MW8G96J/pexels-the-coach-space-2977565.jpg"
                alt=""
                className="relative z-40 object-cover w-full h-full rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[700px] text-center">
              <h2 className="mb-6 text-center text-3xl font-bold text-[#5B46F6]">
                Why choose our{" "}
                <u className="text-primary dark:text-primary-400">
                  Crypto Recovery Services?
                </u>
              </h2>
              <p className="mb-16 text-neutral-500 dark:text-neutral-300">
                Safeguarding your digital assets is our top priority. Explore
                the unique features of our Crypto Recovery Services below.
              </p>
            </div>
          </div>

          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            <div className="mb-12 lg:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Secure Asset Recovery</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Our expert team ensures the secure recovery of your lost or
                inaccessible crypto assets, providing peace of mind and timely
                assistance.
              </p>
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Bulletproof Security</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Benefit from our state-of-the-art security protocols, ensuring
                the safety and integrity of your crypto assets throughout the
                recovery process.
              </p>
            </div>

            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Swift Recovery Process</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Experience an exceptionally fast recovery process, minimizing
                downtime and allowing you to regain access to your crypto assets
                promptly.
              </p>
            </div>

            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                  />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Real-time Analytics</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Gain insights into the recovery process with live analytics,
                keeping you informed and updated every step of the way.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-white dark:bg-gray-900 my-5">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="lg:mt-0 lg:col-span-5 lg:flex mt-6">
            <img src={globe} alt="globe" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="text-sm text-[#FD8D1E]">
              YOUR GATEWAY TO THE GLOBAL ECONOMY
            </p>
            <h2 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
              BCQ crypto lending, trading, and custody for worldwide
            </h2>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Institutional Markets is a full-stack crypto services platform
              that works worldwide with crypto-native businesses and
              institutional clients on trading, and custody solutions.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 bg-blue-600 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              We make crypto recovery easy and seemless.
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Our dedicated team at CyberBlog specializes in providing seamless
              solutions for the recovery of lost cryptocurrencies. We understand
              the challenges you face in the ever-evolving world of digital
              assets, and we're here to help you navigate the complexities with
              expertise and efficiency.
            </p>
            <Link to={"#"} className="text-[#FD8D1E]">
              Contact us to know more
            </Link>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Crypto Asset Consultation
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Guiding you through the process of recovering lost crypto
                assets. Expert advice tailored to your unique situation.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaBalanceScale />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Blockchain Legal Expertise
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Legal support to navigate the complexities of blockchain
                transactions. Ensuring compliance and protection for your crypto
                holdings.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Decentralized Security Solutions
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Implementing cutting-edge security measures for decentralized
                assets. Safeguarding your crypto holdings from potential threats
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <FaShieldAlt />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Smart Contract Audits
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Thorough examination of smart contracts to identify
                vulnerabilities. Enhancing the security of your crypto
                investments.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <GiMagnifyingGlass />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Risk Management and Recovery
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Strategic risk assessment to prevent future losses. Proactive
                recovery solutions for lost crypto assets.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                Cybersecurity for Crypto
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Robust cybersecurity protocols tailored to the crypto industry.
                Protecting your digital assets from online threats
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-12 text-3xl font-bold text-[#FD8D1E]">
            Testimonials
          </h2>

          {/* <div className="grid gap-x-6 md:grid-cols-3 xl:gap-x-12"> */}
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Halley Frank</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Marketing Specialist
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium accusamus voluptatum deleniti
                      atque corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/6.jpg"
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Halley Frank</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Marketing Specialist
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m480 757 157 95-42-178 138-120-182-16-71-168v387ZM233 976l65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium accusamus voluptatum deleniti
                      atque corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">John Doe</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Web Developer
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-6 lg:mb-0">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/8.jpg"
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">John Doe</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Web Developer
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Ut pretium ultricies dignissim. Sed sit amet mi eget urna
                      placerat vulputate. Ut vulputate est non quam dignissim
                      elementum. Donec a ullamcorper diam.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/15.jpg"
                      className="w-full rounded-t-lg"
                    />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute left-0 bottom-0 text-white dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="currentColor"
                        d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-2 text-lg font-bold">Lisa Trey</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Public Relations
                    </h6>
                    <ul className="mb-6 flex justify-center">
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                          />
                        </svg>
                      </li>
                      <li>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 96 960 960"
                          className="w-5 text-warning"
                        >
                          <path
                            fill="currentColor"
                            d="m323 851 157-94 157 95-42-178 138-120-182-16-71-168-71 167-182 16 138 120-42 178Zm-90 125 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-355Z"
                          />
                        </svg>
                      </li>
                    </ul>
                    <p>
                      Enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid commodi quis
                      nostrum minima.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* </div> */}
        </section>
      </div>

      {/* <section>
        <div className="flex flex-col items-center py-11"> */}
      <span className="flex items-center flex-col py-10">
        <h2>FAQs</h2>
        <ul className="max-w-2xl mx-auto mt-5 divide-y  shadow shadow-blue-600 rounded-xl">
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  What services does your Crypto Asset Recovery Agency provide?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Our agency specializes in the recovery of lost or compromised
                  crypto assets. We employ advanced techniques and a dedicated
                  team to assist clients in retrieving their digital assets
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>How does the asset recovery process work?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  The recovery process involves a thorough investigation and
                  analysis of the incident. Our experts leverage their skills
                  and knowledge to trace and recover the lost crypto assets,
                  employing legal means and innovative technologies.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  What types of crypto assets can your agency recover?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  We are equipped to recover a wide range of crypto assets,
                  including but not limited to Bitcoin, Ethereum, Ripple, and
                  various altcoins. Our expertise covers multiple blockchain
                  networks.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>Is there a guarantee of asset recovery success?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  While we cannot provide absolute guarantees, our agency has a
                  proven track record of successful asset recoveries. Each case
                  is unique, and our team employs every available resource to
                  maximize the chances of recovery.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  {" "}
                  How can I initiate the recovery process with your agency?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  To start the recovery process, simply contact our agency
                  through the designated channels on our website. Our team will
                  guide you through the initial steps and provide the necessary
                  information.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  {" "}
                  Is my information and identity kept confidential during the
                  recovery process?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Yes, we prioritize the confidentiality and security of our
                  clients. Your information and identity will be handled with
                  the utmost discretion throughout the entire recovery process.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>What are the costs associated with your services?</span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Our fee structure varies based on the complexity and scale of
                  the recovery process. We offer transparent pricing, and our
                  team will provide you with a detailed breakdown of costs
                  during the initial consultation.{" "}
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  How long does the asset recovery process typically take?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  The duration of the recovery process depends on various
                  factors, including the complexity of the case and cooperation
                  from relevant parties. Our team will provide an estimated
                  timeline based on the specifics of your situation.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  {" "}
                  Is your agency compliant with legal and ethical standards?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Absolutely. Our agency operates within the bounds of legal and
                  ethical frameworks. We adhere to industry regulations and
                  prioritize ethical practices in all aspects of our operations.
                </p>
              </article>
            </details>
          </li>
          <li>
            <details className="group">
              <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                <svg
                  className="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
                <span>
                  {" "}
                  How can I stay updated on the progress of my asset recovery
                  case?
                </span>
              </summary>

              <article className="px-4 pb-4">
                <p>
                  Our agency maintains open communication channels. You will be
                  assigned a dedicated point of contact who will keep you
                  informed about the progress of your case and address any
                  concerns you may have.
                </p>
              </article>
            </details>
          </li>
        </ul>
      </span>
      {/* </div>
      </section> */}
    </div>
  );
};

export default Home;
