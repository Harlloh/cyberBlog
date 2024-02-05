import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaCompass,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    occupation: "",
    phone: "", // Changed to string
    email: "",
    amount: "",
    complaint: "",
  });

  const initialFormData = {
    name: "",
    country: "",
    occupation: "",
    phone: "",
    email: "",
    amount: "",
    complaint: "",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // fetch('http://localhost:3001/send-email', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': "application/json"
    //   },
    //   body: JSON.stringify(formData)
    // })
    // .then(res => {
    //         console.log(res)
    //         if(res.text === 'OK'){
    //           setFormData(initialFormData);              toast.success('Your message as been sent succefully')
    //         }

    //     }).catch((err) => toast.error('Message sent failed'));

    // emailjs
    //   .sendForm(
    //     "service_2k5lg8r",
    //     // 'service_stxwd6g',
    //     "template_oiqws3p",
    //     // 'template_xewlvcq',
    //     e.target,
    //     "jg5LzRpGZ8fm9abb7"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     if (res.text === "OK") {
    //       setFormData(initialFormData);
    //       toast.success("Your message as been sent succefully");
    //     }
    //   })
    //   .catch(() => toast.error("Message sent failed"));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* <div className="container contactcont flex flex-col items-center gap-3 bg-blue-300">
        <h1
          className={`contactconthead ${
            shouldAnimate ? "animate" : ""
          } text-2xl`}
        >
          Complete this form to file a complaint
        </h1>
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="/send"
          className="flex flex-col gap-3 items-center bg-red-500 w-full"
        >
          <div className="inputcontainer">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control rounded p-2 w-full"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Country of Residence"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="text"
              placeholder="Occupation"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <PhoneInput
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              defaultCountry="US"
              onChange={(value) =>
                setFormData((prevData) => ({
                  ...prevData,
                  phone: value, // Update the phone field with the new value
                }))
              }
              international
              countryCallingCodeEditable={true}
            />
          </div>
          <div className="inputcontainer">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <input
              type="number"
              placeholder="Amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
            />
          </div>

          <div className="inputcontainer">
            <textarea
              name="complaint"
              id="complaint"
              cols="30"
              rows="10"
              placeholder="Complaint/Message"
              value={formData.complaint}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Send Complaint</button>
        </form>
      </div> */}

      <div className="container my-12 mx-auto px-2 md:px-4">
        <section className="mb-32">
          <div className="flex justify-center">
            <div className="text-center md:max-w-xl lg:max-w-3xl">
              <h2 className="mb-12 px-6 text-3xl font-bold">Contact us</h2>
            </div>
          </div>

          <div className="flex flex-wrap">
            <form
              className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
              onSubmit={handleSubmit}
              method="POST"
              action="/send"
              // className="flex flex-col gap-3 items-center bg-red-500 w-full"
            >
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-control rounded p-2 w-full"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="country"
                >
                  Country of Residence
                </label>
                <input
                  className="form-control rounded p-2 w-full"
                  type="text"
                  placeholder="Country of Residence"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="occupation"
                >
                  Occupation
                </label>
                <input
                  className="form-control rounded p-2 w-full"
                  type="text"
                  placeholder="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Email
                </label>
                <input
                  className="form-control rounded p-2 w-full"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <PhoneInput
                  className="form-control rounded p-5 w-full"
                  name="phone"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  style={{ padding: "1rem" }}
                  defaultCountry="US"
                  onChange={(value) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      phone: value, // Update the phone field with the new value
                    }))
                  }
                  international
                  countryCallingCodeEditable={true}
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="amount"
                >
                  Amount
                </label>
                <input
                  className="form-control rounded p-2 w-full"
                  type="number"
                  placeholder="Amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3 w-full">
                <label
                  className="block font-medium mb-[2px] text-teal-700"
                  htmlFor="exampleInput90"
                >
                  Message
                </label>
                <textarea
                  name="complaint"
                  id="complaint"
                  cols="30"
                  rows="10"
                  className="px-2 py-2 border rounded-[5px] w-full outline-none"
                  placeholder="Complaint/Message"
                  value={formData.complaint}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="mb-6 inline-block w-full rounded bg-teal-700 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
              >
                Send Message
              </button>
            </form>

            <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 text-teal-700">
                        <FaCompass
                          size={70}
                          className="p-3 bg-orange-200 rounded"
                        />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-xl">CyberBlog Inc.</p>
                      <p className="text-neutral-500 ">
                        Sytinskiy Lane, 5 с2, Moscow Russia 123104
                      </p>
                      {/* <p className="text-neutral-500 ">+1 234-567-89</p> */}
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <FaMapMarkerAlt
                          size={70}
                          className="p-3 bg-orange-200 rounded"
                        />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-xl ">Address:</p>
                      <p className="text-neutral-500 ">
                        Sytinskiy Lane, 5 с2, Moscow Russia 123104
                      </p>
                      <p className="text-neutral-500 ">
                        Zip Code/Postal code:03875
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                        <FaWhatsapp
                          size={70}
                          className="p-3 bg-orange-200 rounded"
                        />
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold text-xl">Whatsapp:</p>
                      {/* <p className="text-neutral-500 ">press@example.com</p> */}
                      <p className="text-neutral-500 ">+1 234-567-89</p>
                    </div>
                  </div>
                </div>
                {/* <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                  <div className="align-start flex">
                    <div className="shrink-0">
                      <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
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
                            d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6 grow">
                      <p className="mb-2 font-bold">Bug report</p>
                      <p className="text-neutral-500 ">bugs@example.com</p>
                      <p className="text-neutral-500">+1 234-567-89</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
