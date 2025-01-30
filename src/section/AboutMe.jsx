import myprofile from "../assets/myprofile.png"

const AboutMe = () => {
  return (
    <section id="about" className="bg-black text-white py-20 px-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left Section - Image */}
      <div className="flex justify-center ml-[0]">
        <img
          src={myprofile}
          alt="cadeau masengesho"
          className="rounded-lg shadow-md max-w-xs md:max-w-sm"
        />
      </div>

      {/* Right Section - Details */}
      <div>
        <h1 className="text-4xl font-bold text-yellow-400 mb-4">Mcadeau</h1>
        <ul className="text-lg space-y-3">
          <li>
            <span className="font-semibold">Age:</span> <span className="text-gray-300">22</span>
          </li>
          <li>
            <span className="font-semibold">Nationality:</span> <span className="text-gray-300">Rwandan</span>
          </li>
          <li>
            <span className="font-semibold">Open to Work:</span> <span className="text-gray-300">Yes</span>
          </li>
          <li>
            <span className="font-semibold">Languages:</span> <span className="text-gray-300">English</span>
          </li>
          <li>
            <span className="font-semibold">Address:</span> <span className="text-gray-300">Kigali - Rwanda</span>
          </li>
          <li>
            <span className="font-semibold">Phone:</span> <span className="text-gray-300">+250 791 531 026</span>
          </li>
          <li>
            <span className="font-semibold">Email:</span> <span className="text-yellow-400">masengeshocadeau602@gmail.com</span>
          </li>
          <li>
            <span className="font-semibold">GitHub and GitLab:</span>
            <a href="https://github.com/Masengesho666" className="text-blue-400 hover:underline ml-1">Masengesho666</a> 
    
          </li>
        </ul>
      </div>
    </div>
  </section>
  );
};

export default AboutMe;
