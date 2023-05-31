// import { useState } from 'react'

import { useState } from "react";
import Profile from "./components/Profile";
import About from "./components/About";
import Resume from "./components/Resume.Jsx";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleClick = (section) => {
    setActiveSection(section);
  };
  return (
    <>
      <div className="bg-red-100 h-[100vh] w-full flex justify-center items-center">
        <div className="h-[660px] bg-gray-300 w-[90%] flex items-start">
          <div className="w-[8%] ">
            <button onClick={() => handleClick("about")} className={` ${activeSection === 'about' ? 'bg-red-200 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-500'}`}> 
              Show Section 1
            </button>
            <button onClick={() => handleClick("resume")} className={` ${activeSection === 'resume' ? 'bg-red-200 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-500'}`}>
              Show Section 1
            </button>
            <button onClick={() => handleClick("works")} className={` ${activeSection === 'works' ? 'bg-red-200 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-500'}`}>
              Show Section 1
            </button>
            <button onClick={() => handleClick("contact")} className={` ${activeSection === 'contact' ? 'bg-red-200 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-500'}`}>
              Show Section 1
            </button>
          </div>
          <div className="w-[35%] h-[100%] relative">
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
          <div className="w-[57%] h-[100%]">
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
