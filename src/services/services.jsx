import { FaBalanceScale } from "react-icons/fa";
import RevealSection from "../revealAnimation";
import {
  FaWrench,
  FaChartLine,
  FaExchangeAlt,
  FaShieldAlt,
  FaClock,
  FaCheck,
  FaBolt,
  FaGem,
  FaRandom,
  FaProjectDiagram,
  FaTools,
  FaBox,
  FaLink,
  FaMoneyCheckAlt,
  FaExclamationTriangle,
  FaImage,
  FaUndo,
  FaUserLock,
  FaDice,
  FaCoins,
} from "react-icons/fa";
import { GiMagnifyingGlass } from "react-icons/gi";
import { Link } from "react-router-dom";

function Cryptoservices() {
  const servicesData = [
    {
      heading: "Recovery",
      paragraph:
        "Recovering lost crypto assets is a complex process, but our expert team is here to guide you through it. We provide tailored advice and solutions to help you regain control of your assets and mitigate potential losses.",
      icon: <FaUndo size={32} />,
    },
    {
      heading: "Investment",
      paragraph:
        "Make informed investment decisions with our comprehensive investment services. Whether you are a beginner or an experienced investor, we offer insights and strategies to optimize your crypto portfolio and maximize returns.",
      icon: <FaChartLine size={15} />,
    },
    {
      heading: "Buy/Sell",
      paragraph:
        "Navigate the crypto markets with confidence when buying or selling assets. Our services provide a seamless experience, ensuring secure and efficient transactions tailored to your buying or selling preferences.",
      icon: <FaExchangeAlt size={15} />,
    },
    {
      heading: "Wallet Compromise",
      paragraph:
        "Secure your crypto wallet against compromise with our advanced security measures. We offer solutions to protect your digital assets, detect potential threats, and guide you in recovering compromised wallets.",
      icon: <FaShieldAlt size={15} />,
    },
    {
      heading: "Delayed Transaction",
      paragraph:
        "Experience delays in your crypto transactions? Our experts analyze and address transaction delays, providing solutions to expedite and streamline the transaction process for a smoother experience.",
      icon: <FaClock size={15} />,
    },
    {
      heading: "Validation",
      paragraph:
        "Ensure the validity of your crypto transactions with our validation services. We implement rigorous processes to verify and authenticate transactions, maintaining the integrity of your crypto activities.",
      icon: <FaCheck size={15} />,
    },
    {
      heading: "Transaction Glitch",
      paragraph:
        "Encounter transaction glitches? Our team specializes in identifying and resolving transaction-related issues, ensuring that your crypto transactions proceed smoothly without any technical glitches.",
      icon: <FaBolt size={15} />,
    },
    {
      heading: "Claim Reward",
      paragraph:
        "Optimize your crypto earnings by efficiently claiming rewards. Our services guide you through the process of claiming and managing rewards, maximizing the benefits of your crypto investments.",
      icon: <FaGem size={15} />,
    },
    {
      heading: "Swapping Issues",
      paragraph:
        "Experience difficulties with swapping crypto assets? Our team addresses swapping issues, providing solutions to enhance the efficiency and accuracy of your asset swapping activities.",
      icon: <FaRandom size={15} />,
    },
    {
      heading: "Migration",
      paragraph:
        "Navigate the process of migrating your crypto assets seamlessly. Our experts assist in ensuring a smooth transition, minimizing potential risks and optimizing the migration of your digital holdings.",
      icon: <FaProjectDiagram size={15} />,
    },
    {
      heading: "Maintenance",
      paragraph:
        "Keep your crypto assets in optimal condition with our maintenance services. We provide regular maintenance checks and updates to safeguard your assets and maintain their overall health.",
      icon: <FaTools size={15} />,
    },
    {
      heading: "TVLDrop",
      paragraph:
        "Participate in token drops with ease using our TVL drop services. We guide you through the process, ensuring that you can take full advantage of token drops and maximize your crypto holdings.",
      icon: <FaBox size={15} />,
    },
    {
      heading: "Bridge",
      paragraph:
        "Cross bridges confidently with our bridge services. We facilitate secure and efficient crypto asset transfers between different blockchain networks, ensuring a seamless and reliable bridge experience.",
      icon: <FaLink size={15} />,
    },
    {
      heading: "Rectification",
      paragraph:
        "Address issues and rectify discrepancies in your crypto transactions with our rectification services. Our team is dedicated to resolving any errors and ensuring the accuracy of your crypto activities.",
      icon: <FaWrench size={15} />,
    },
    {
      heading: "Pending Withdrawal",
      paragraph:
        "Resolve pending withdrawal issues with our expert assistance. We analyze and address the root cause of pending withdrawals, ensuring that you can access your funds without unnecessary delays.",
      icon: <FaMoneyCheckAlt size={15} />,
    },
    {
      heading: "Slippage Error",
      paragraph:
        "Minimize slippage errors in your crypto trades with our specialized services. We provide strategies and solutions to reduce slippage, optimizing the execution of your trades in the crypto market.",
      icon: <FaExclamationTriangle size={15} />,
    },
    {
      heading: "NFT Issues",
      paragraph:
        "Navigate the complexities of the NFT space with our NFT issue resolution services. Our experts address issues related to non-fungible tokens, ensuring a smooth and trouble-free NFT experience.",
      icon: <FaImage size={15} />,
    },
    {
      heading: "Delayed Transaction",
      paragraph:
        "Experience delays in your crypto transactions? Our experts analyze and address transaction delays, providing solutions to expedite and streamline the transaction process for a smoother experience.",
      icon: <FaClock size={15} />,
    },
    {
      heading: "Airdrop",
      paragraph:
        "Participate in airdrops seamlessly with our airdrop services. We guide you through the process, ensuring that you can take full advantage of airdrop opportunities and enhance your crypto holdings.",
      icon: <GiMagnifyingGlass size={15} />,
    },
    {
      heading: "Staking",
      paragraph:
        "Optimize your crypto holdings through strategic staking. Our staking services provide insights and guidance on maximizing rewards and benefits through secure and efficient staking activities.",
      icon: <FaDice size={15} />,
    },
    {
      heading: "Token Issues",
      paragraph:
        "Address and resolve issues related to crypto tokens with our specialized services. Whether it's token-related glitches or discrepancies, our team is dedicated to ensuring the smooth functioning of your tokens.",
      icon: <FaCoins size={15} />,
    },
    {
      heading: "Reauthentication",
      paragraph:
        "Enhance the security of your crypto accounts through reauthentication. Our services guide you through the process of reauthentication, adding an extra layer of protection to your digital assets.",
      icon: <FaUserLock size={15} />,
    },
  ];

  return (
    <RevealSection>
      <section className="bg-white " id="service">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16 reveal">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Explore Our Comprehensive Crypto Services
            </h2>
            <p className="text-gray-500 sm:text-xl ">
              At CyberBlog, we offer a diverse range of specialized services to
              cater to your unique crypto needs. Our team is committed to
              delivering expert solutions across various aspects of the
              cryptocurrency landscape. Whether you require assistance in
              recovery, investment strategies, transaction support, or security
              enhancements, we have you covered.
            </p>
            <p className="text-gray-500 sm:text-xl ">
              Discover the power of our tailored services designed to optimize
              your crypto experience. Explore the specific services listed
              below, each backed by our expertise and dedication to providing
              seamless solutions for the challenges you may encounter in the
              dynamic world of digital assets.
            </p>
            <p className="text-gray-500 sm:text-xl ">
              Ready to elevate your crypto journey? Dive into our specialized
              services and empower yourself with the knowledge and support
              needed to navigate the complexities of the crypto space
              confidently.
            </p>
            <div className="my-5">
              <button className="bg-teal-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-9">
                <Link
                  className="text-white underline  text-xl btn btn-primary"
                  to={"/contact"}
                >
                  Contact us
                </Link>
              </button>
            </div>
          </div>
          <div className="mt-9">
            <h3 className="my-3 font-semibold text- text-[#FD8D1E] underline">
              Our services
            </h3>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 reveal fade-bottom">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12 ">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 "
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
              <h3 className="mb-2 text-xl font-bold ">
                Crypto Asset Consultation
              </h3>
              <p className="text-gray-500 ">
                Guiding you through the process of recovering lost crypto
                assets. Expert advice tailored to your unique situation.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12 ">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaBalanceScale />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold ">
                Blockchain Legal Expertise
              </h3>
              <p className="text-gray-500 ">
                Legal support to navigate the complexities of blockchain
                transactions. Ensuring compliance and protection for your crypto
                holdings.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12 ">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 "
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
              <h3 className="mb-2 text-xl font-bold ">
                Decentralized Security Solutions
              </h3>
              <p className="text-gray-500 ">
                Implementing cutting-edge security measures for decentralized
                assets. Safeguarding your crypto holdings from potential threats
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12 ">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                  <FaShieldAlt />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold ">Smart Contract Audits</h3>
              <p className="text-gray-500 ">
                Thorough examination of smart contracts to identify
                vulnerabilities. Enhancing the security of your crypto
                investments.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12 ">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <GiMagnifyingGlass />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold ">
                Risk Management and Recovery
              </h3>
              <p className="text-gray-500 ">
                Strategic risk assessment to prevent future losses. Proactive
                recovery solutions for lost crypto assets.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12 ">
                <svg
                  className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6 "
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
              <h3 className="mb-2 text-xl font-bold ">
                Cybersecurity for Crypto
              </h3>
              <p className="text-gray-500 ">
                Robust cybersecurity protocols tailored to the crypto industry.
                Protecting your digital assets from online threats
              </p>
            </div>
            {servicesData.map((service) => {
              return (
                <div key={service.heading} className="reveal fade-bottom">
                  <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-teal-700 lg:h-12 lg:w-12  ">
                    <svg
                      className="w-5 h-5 text-[#FD8D1E] lg:w-6 lg:h-6  items-center flex bg-red"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {service.icon}
                    </svg>
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">{service.heading}</h3>
                  <p className="text-gray-500 ">{service.paragraph}</p>
                </div>
              );
            })}
          </div>
          <div className="my-5">
            <Link className="text-[#FD8D1E] underline  text-xl" to={"/contact"}>
              Get in Touch now to get started
            </Link>
          </div>
        </div>
      </section>
    </RevealSection>
  );
}

export default Cryptoservices;
