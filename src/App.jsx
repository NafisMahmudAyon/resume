// import { useState } from 'react'

import { useState } from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Resume from "./components/Resume.Jsx";
import Works from "./components/Works";
import Contact from "./components/Contact";


function App() {
  const [activeSection, setActiveSection] = useState("about");

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <div className="bg-red-100 h-[100vh] w-full flex justify-center items-center">
        <div className="h-[660px]  w-[90%] flex items-center">
          <div className="w-[8%] text-center h-full flex flex-col pt-8 mr-3">
            <button
              onClick={() => handleClick("about")}
              className={` ${
                activeSection === "about"
                  ? "bg-red-200 w-full flex flex-col items-center rounded-t-lg py-2 hover:bg-blue-500"
                  : "bg-gray-200 w-full flex flex-col items-center rounded-t-lg py-2 hover:bg-blue-500"
              }`}
            >
              <img src="./icon/02.png" alt="" className="w-10 " />

              <p className="text-center pt-2 text-md font font-semibold">About Me</p>
            </button>
            <button
              onClick={() => handleClick("resume")}
              className={` ${
                activeSection === "resume"
                  ? "bg-red-200 w-full flex flex-col items-center py-2 hover:bg-blue-500"
                  : "bg-gray-200 w-full flex flex-col items-center py-2 hover:bg-blue-500"
              }`}
            >
              <img src="./icon/04.png" alt="" className="w-10 " />

              <p className="text-center pt-2 text-md font font-semibold">Resume</p>
            </button>
            <button
              onClick={() => handleClick("works")}
              className={` ${
                activeSection === "works"
                  ? "bg-red-200 w-full flex flex-col items-center py-2 hover:bg-blue-500"
                  : "bg-gray-200 w-full flex flex-col items-center py-2 hover:bg-blue-500"
              }`}
            >
              <img src="./icon/03.png" alt="" className="w-10 " />

              <p className="text-center pt-2 text-md font font-semibold">Work</p>
            </button>
            <button
              onClick={() => handleClick("contact")}
              className={` ${
                activeSection === "contact"
                  ? "bg-red-200 w-full flex flex-col rounded-b-lg items-center py-2 hover:bg-blue-500"
                  : "bg-gray-200 w-full flex flex-col rounded-b-lg items-center py-2 hover:bg-blue-500"
              }`}
            >
              <img src="./icon/01.png" alt="" className="w-10 " />

              <p className="text-center pt-2 text-md font font-semibold">Contact</p>
            </button>
          </div>
          <div className="w-[35%] h-[100%] relative bg-white shadow-2xl rounded-lg overflow-hidden">
            <Profile />
            <div className="flex h-14 absolute bottom-0 left-0 w-full px-5">
              <div className="w-1/2 border-t-2 border-r-[1px] border-slate-900 flex justify-center items-center">
                Hello
              </div>
              <div className="w-1/2 border-t-2 border-l-[1px] flex justify-center items-center border-slate-900">
                Hello
              </div>
            </div>
          </div>
          <div className="w-[57%] h-[95%] rounded-r-lg px-[10px] bg-white py-6">
            {activeSection === "about" && <About />}
            {activeSection === "resume" && <Resume />}
            {activeSection === "works" && <Works />}
            {activeSection === "contact" && <Contact />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
