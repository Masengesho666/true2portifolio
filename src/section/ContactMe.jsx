
import {
 
  FaTwitter,
  FaGithub,FaPhoneAlt ,
  FaWhatsapp,
  FaLinkedin,
  FaGitlab ,FaEnvelope 
} from "react-icons/fa";
const ContactMe = () => {
  return (
    <div>
          <section id="contact" className="bg-black text-white py-20 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">Get in touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Phone */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaPhoneAlt className="text-yellow-400 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <p className="text-gray-300">+250 791 531 026</p>
          </div>

          {/* Email */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaEnvelope className="text-yellow-400 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold">Email</h3>
            <p className="text-gray-300">masengeshocadeau602@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            {/* <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-yellow-400 text-3xl" />
            </div> */}
            <h3 className="text-lg font-semibold">Address</h3>
            <p className="text-gray-300">KIREHE, Mahama</p>
          </div>

          {/* Socials */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <div className="flex justify-center mb-4">
              <FaLinkedin className="text-yellow-400 text-3xl" />
            </div>
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://github.com/Masengesho666" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaGithub />
              </a>
              <a href="https://twitter.com/home" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaTwitter />
              </a>
              <a href="https://web.whatsapp.com/" className="text-gray-300 hover:text-yellow-400 text-xl">
                < FaWhatsapp/>
              </a>
              <a href="https://gitlab.com/nijohn" className="text-gray-300 hover:text-yellow-400 text-xl">
                <FaGitlab />
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    </div>
  )
}

export default ContactMe




// import { useState } from "react";

// const ContactMe = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

 
//   const [submissionMessage, setSubmissionMessage] = useState("");

  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form Data Submitted:", formData);

   
//     setFormData({ name: "", email: "", message: "" });
//     setSubmissionMessage("Thank you! Your message has been sent.");
//   };

//   return (
//     <section
//       id="contact"
//       className="p-8 bg-gray-100 rounded-lg shadow-lg max-w-2xl mx-auto text-center z-0"
//     >
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Me</h2>
//       <p className="text-gray-600 mb-6">
//         Feel free to reach out to me through the form below or connect via social media.
//       </p>
//       <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           required
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
//           rows="5"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="p-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-300"
//         >
//           Send Message
//         </button>
//       </form>
//       {submissionMessage && (
//         <p className="mt-4 text-green-600 font-semibold">{submissionMessage}</p>
//       )}
//     </section>
//   );
// };

// export default ContactMe;
