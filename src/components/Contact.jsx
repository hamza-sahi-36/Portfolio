import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Aapki Access Key
    formData.append("access_key", "371676dd-92a7-4ca9-9870-1461195c9195");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-linear-to-b from-gray-800 to-black text-white py-20">
      <div className="flex flex-col p-4 justify-center max-w-5xl mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me!</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <form onSubmit={onSubmit} className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 duration-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 duration-200"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows={10}
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500 duration-200"
            ></textarea>

            <button className="text-white bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 shadow-md shadow-cyan-500/50">
              Let's Talk
            </button>
          </form>

          {result && (
            <div className="h-10">
              <p
                className={`text-lg font-semibold ${result.includes("successfully") ? "text-cyan-400" : "text-red-500"} animate-bounce`}
              >
                {result}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
