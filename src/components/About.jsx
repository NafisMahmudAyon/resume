const AboutMe = () => {
  return (
    <>
      <div className="py-4 border-b-2 text-xl font-bold ">
        <span className="text-emerald-500">A</span>bout Me
      </div>
      <div className="flex h-[400px] pb-4">
        <div className="w-1/2 py-10 px-8">
          I am Ryan Adlard, web designer from USA, California. I have rich
          experience in web site design and building and customization, also I
          am good at wordpress. I love to talk with you about our unique.
        </div>
        <div className="w-1/2 border-l-2 px-8 py-10">
          <div className="flex w-full justify-between pb-6 border-b-2">
            <p>Age:</p>
            <p>24</p>
          </div>
          <div className="flex w-full justify-between py-6 border-b-2">
            <p>Address:</p>
            <p className="w-1/2 text-right">Rangpur, Bangladesh</p>
          </div>
          <div className="flex w-full justify-between py-6 border-b-2">
            <p>Freelance:</p>
          </div>
        </div>
      </div>
    </>
  );
};

const MyService = () => {
  return (
    <>
      <div className="py-4 border-b-2 text-xl font-bold ">
        <span className="text-emerald-500">M</span>y Service
      </div>
      <div className="flex h-[400px] ">
        <div className="w-1/2 py-10 px-8">
          I am Ryan Adlard, web designer from USA, California. I have rich
          experience in web site design and building and customization, also I
          am good at wordpress. I love to talk with you about our unique.
        </div>
        <div className="w-1/2 border-l-2 px-10  py-10">
          <div className="flex w-full justify-between pb-6 border-b-2">
            <p>Age:</p>
            <p>24</p>
          </div>
          <div className="flex w-full justify-between py-6 border-b-2">
            <p>Address:</p>
            <p className="w-1/2 text-right">Rangpur, Bangladesh</p>
          </div>
          <div className="flex w-full justify-between py-6 border-b-2">
            <p>Freelance:</p>
          </div>
        </div>
      </div>
    </>
  );
};

const About = () => {
  return (
    <div className="px-10 overflow-y-scroll h-full">
      <AboutMe />
      <MyService />
    </div>
  );
};

export default About;
