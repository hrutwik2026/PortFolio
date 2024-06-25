import { useEffect, useState } from "react";
import logo from "./assets/logo2.webp";
import myimage from "./assets/KAKASHI2.jpg";
import { useSpring, animated, config } from "react-spring";
import { Link, Element, scroller } from "react-scroll";
import Cards from "./Componets/Cards";
import css from "./assets/css-removebg-preview.png";
import society from "./assets/security-management-buildin.jpg";
import html from "./assets/html-removebg-preview.png";
import java from "./assets/Java-Logo.png";
import jdbc from "./assets/jdbc-removebg-preview.png";
import js from "./assets/js2.png";
import mysql from "./assets/postgres-removebg-preview.png";
import react1 from "./assets/react-removebg-preview (1).png";
import spring from "./assets/Spring_Framework-Logo.wine.png";
import tailwind from "./assets/tailwindLOGO-removebg-preview (1).png";
import Projects from "./Componets/Projects";
import student from "./assets/Student-tracking-system.png";
import hotel from "./assets/hotel.png";
import shopping from "./assets/Screenshot 2024-06-24 172327.png";
import des from "./assets/Screenshot 2024-06-24 172359.png";
import mine from "./assets/IMG_20240220_113043__1_-removebg-preview.png";

// import './App.css'

function App() {
  const [value, setvalue] = useState(true);
  const [addcss, setcss] = useState();

  const slide = useSpring({
    from: { opacity: 0, transform: "translateX(-100px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 500 },
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });

  const zoomIn = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 300 },
  });

  useEffect(() => {
    if (value) {
      setcss("bg-transparent");
    } else {
      setcss("bg-gray-900");
    }
  }, [value]);

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Spring animations
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });
  const slideIn = useSpring({
    from: { transform: "translateY(50px)" },
    to: { transform: "translateY(0px)" },
    delay: 200,
  });
  const spin = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    config: config.wobbly,
    loop: true,
  });
  const bounce = useSpring({
    from: { transform: "translateY(0)" },
    to: { transform: "translateY(-20px)" },
    config: config.wobbly,
    loop: true,
  });
  const pulse = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.1)" },
    config: config.wobbly,
    loop: true,
  });

  return (
    <div className="bg-slate-700">
      <animated.nav style={slideIn} className={`w-full ${addcss} h-14 fixed `}>
        <ul className="flex gap-36 justify-start p-3 text-slate-100 text-lg font-serif font-bold">
          <li className="w-1/4 hover:scale-110 duration-100">
            <img className="w-32" src={logo} alt="Logo" />
          </li>
          <div className="w-3/4 flex gap-36 justify-start">
            <li className="hover:text-gray-500 hover:scale-110 duration-300">
              <Link to="home" smooth={true} duration={900}>
                Home
              </Link>
            </li>
            <li className="hover:text-gray-500 hover:scale-110 duration-300">
              <Link to="about" smooth={true} duration={1500}>
                About
              </Link>
            </li>
            <li className="hover:text-gray-500 hover:scale-110 duration-300">
              <Link to="project" smooth={true} duration={900}>
                Projects
              </Link>
            </li>
            {/* <li className="hover:text-gray-500 hover:scale-110 duration-300">
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li> */}
            <li className="hover:text-gray-500 hover:scale-110 duration-300">
              <Link to="aboutme" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
          </div>
        </ul>
      </animated.nav>

      <Element name="home">
        <div className=" flex flex-col ">
          <section className=" flex h-96 min-h-screen ">
            <animated.div
              style={slideIn}
              className="w-2/3 flex flex-col justify-center items-center md:p-10 mt-6 lg:p-16"
            >
              <div className="text-center mb-4">
                <span className="text-amber-500 font-bold font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  <u>Web Dev</u>
                </span>
              </div>
              <p className="text-gray-900 text-lg sm:text-xl md:text-2xl text-center mb-2">
                Passionate React and Java Developer | Building Modern Web
                Applications
              </p>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl text-center mb-2">
                A dedicated software developer specializing in React and Java.
              </p>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl text-center mb-2">
                I recently graduated with a Master’s degree in Computer Science.
              </p>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl text-center mb-2">
                I have been actively developing projects that demonstrate my
              </p>
              <p className="text-slate-500 text-base sm:text-lg md:text-xl text-center">
                skills in both front-end and back-end development.
              </p>
            </animated.div>
            <animated.div
              style={fade}
              className="w-2/3 flex justify-center  items-center"
            >
              <animated.img
                style={fadeIn}
                className="h-3/4"
                src={mine}
                alt="My image"
              />
            </animated.div>
          </section>
        </div>
        <div className=" border-b-8 border-slate-900 font-serif p-2">
          {" "}
          <h1 className=" text-slate-200 font-bold text-2xl">
            Some Deploy Project on Versal :
          </h1>
          <div className="flex gap-20 items-center justify-center text-slate-900 p-5">
            <div className="">
              <p className="p-2">
                <a
                  className="hover:text-black"
                  href="https://destination-picker-rho.vercel.app/"
                  target="_blank"
                >
                  https://destination-picker-rho.vercel.app/
                </a>
              </p>
              <p className="p-2">
                <a
                  className="hover:text-black"
                  href="https://shopping-clone.vercel.app/"
                  target="_blank"
                >
                  https://shopping-clone.vercel.app/
                </a>
              </p>
            </div>
            <div>
              <p className="p-2">
                <a
                  className="hover:text-black"
                  href="https://sample-deploy-kappa.vercel.app/"
                  target="_blank"
                >
                  https://sample-deploy-kappa.vercel.app/
                </a>
              </p>
              <p className="p-2">
                <a
                  className="hover:text-black"
                  href="https://employe-details.vercel.app/"
                  target="_blank"
                >
                  https://employe-details.vercel.app/
                </a>
              </p>
            </div>
          </div>
        </div>
      </Element>

      <Element name="about">
        <section className=" h-auto  border-b-8 border-slate-900 text-base ">
          <h1 className="font-serif font-bold text-4xl text-black p-3">
            About
          </h1>
          <div className="text-gray-400 ml-24">
            <animated.p
              // style={slideIn}
              className="p-2 hover:text-gray-600 sm:text-lg md:text-lg"
            >
              I have always been fascinated by technology and the endless
              possibilities it offers. My journey into software development
              began in college, where I discovered my passion for creating
              intuitive and efficient web applications. The thrill of solving
              complex problems and the satisfaction of bringing ideas to life
              through code keeps me deeply engaged in this field.
            </animated.p>

            <animated.p
              style={slideIn}
              className="p-2 hover:text-gray-600 sm:text-lg md:text-lg"
            >
              I enjoy continuously learning new technologies to stay up-to-date
              with industry trends, ensuring that my skills remain sharp and
              relevant. This drive for knowledge often leads me to explore
              emerging technologies, frameworks, and methodologies, allowing me
              to incorporate the latest advancements into my projects.
            </animated.p>
          </div>

          <h1 className="pt-14 pb-16 font-bold font-serif hover:text-amber-700 text-amber-500 text-4xl flex justify-center">
            My Skills
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 p-8">
            <Cards image={java} title="Java" />
            <Cards image={js} title="Javascript" props="bg-none" />
            <Cards image={spring} title="Spring" />
            <Cards image={react1} title="React JS" />
            <Cards image={mysql} title="PostgreSQL" props="bg-none" />
            <Cards image={html} title="HTML 5" />
            <Cards image={css} title="CSS" />
            <Cards image={tailwind} title="Tailwind CSS" />
            <Cards image={jdbc} title="Java JDBC" />
          </div>
        </section>
      </Element>

      <Element name="project">
        <h1 className="pt-12 font-bold font-serif hover:text-amber-700 text-amber-500 text-4xl flex justify-center">
          Projects
        </h1>
        <div className="h-auto  border-b-8 border-slate-900 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 p-16">
            <Projects image={hotel} title="Hotel Management System" />
            <Projects image={student} title="Student Tracking System" />
            <Projects image={society} title="Society Security Management" />
            <Projects image={shopping} title="Shopping Clone UI in React" />
            <Projects image={des} title="Destination Picker UI in React JS" />
          </div>
          <div>
            <div className="bg-gray-800 text-gray-300 p-6 md:p-10 animate__animated">
              <h2 className="text-3xl font-serif mb-5">Experience</h2>
              <ul className="font-serif text-gray-300 ml-2 md:ml-5 pl-2 md:pl-5 list-disc space-y-4">
                <li className="mb-4 animate__animated ">
                  I recently completed my internship at AyanWorks, where I
                  gained extensive hands-on experience in key technologies such
                  as React, Java, JavaScript, and PostgreSQL. Throughout the
                  internship, I had the opportunity to work on real-world
                  projects that enhanced my understanding and proficiency in
                  these tools.
                </li>
                <li className="mb-4 animate__animated ">
                  Utilizing React, I developed dynamic and responsive user
                  interfaces, while my knowledge of Java and JavaScript was
                  instrumental in creating efficient and scalable backend
                  solutions. Additionally, I worked with PostgreSQL to manage
                  and manipulate complex datasets, ensuring data integrity and
                  performance.
                </li>
                <li className="animate__animated ">
                  This internship not only solidified my technical skills but
                  also provided me with valuable insights into industry best
                  practices and collaborative software development.
                </li>
              </ul>
            </div>

            {/* <p className="font-serif text-gray-300 ml-24 p-5 pl-5">
              I recently completed my internship at AyanWorks, where I gained
              extensive hands-on experience in key technologies such as React,
              Java, JavaScript, and PostgreSQL. Throughout the internship, I had
              the opportunity to work on real-world projects that enhanced my
              understanding and proficiency in these tools.</p>
              
               <p className="font-serif text-gray-300 ml-24 p-5 pl-5">Utilizing React, I
              developed dynamic and responsive user interfaces, while my
              knowledge of Java and JavaScript was instrumental in creating
              efficient and scalable backend solutions. Additionally, I worked
              with PostgreSQL to manage and manipulate complex datasets,
              ensuring data integrity and performance.</p>
               <p className="font-serif text-gray-300 ml-24 p-5 pl-5">This internship not only
              solidified my technical skills but also provided me with valuable
              insights into industry best practices and collaborative software
              development.
            </p> */}
          </div>
        </div>
      </Element>

      {/* <Element name="contact">
        <section className="bg-gray-800 h-60 p-5 border-b-2">
          <h1 className="text-3xl flex justify-center text-amber-700 font-bold font-serif">
            Contact Me
          </h1>
          <div className="flex flex-wrap gap-6 sm:gap-10 font-serif p-4 sm:p-6 justify-center">
            <div className="bg-slate-600 p-4  rounded-lg hover:bg-slate-700 px-16 hover:text-slate-100">
              <h1>
                <u>Contact Number</u>
              </h1>
              <p className="pt-2">7720976985</p>
            </div>
            <div className="bg-slate-600 p-2 rounded-lg px-16 hover:bg-slate-700 hover:text-slate-100">
              <h1>
                <u>Linkedin ID:</u>
              </h1>
              <p className="pt-2">
                https://Linkedin.com/in/hrutwik-kale-45333b25a
              </p>
            </div>
            <div className="bg-slate-600 p-2 rounded-lg px-16 hover:bg-slate-700 hover:text-slate-100">
              <u>
                <h1>GitHub ID:</h1>
              </u>
              <p className="pt-2">hrutwik2026</p>
            </div>
          </div>
        </section>
      </Element> */}
      <Element name="aboutme">
        <h1 className="text-3xl flex   justify-center text-amber-700 font-bold font-serif p-5">
          About Me
        </h1>

        <div className="border-b-2  flex flex-col  lg:flex-row  md:flex-col sm:flex-col ">
          <div className="flex border-b-2 justify-center items-center sm:flex-col flex-col p-10 gap-4 flex-1">
            <label className=" text-slate-400 text-2xl">
              Name :
              <span className="text-slate-400 hover:text-slate-900 font-serif text-2xl">
                {" "}
                Hrutwik Nilkanth Kale
              </span>{" "}
            </label>
            <label className=" text-slate-400 text-xl">
              Address :
              <span className="text-slate-400 font-serif text-xl">
                {" "}
                At-Kalewadi Post-Dive tal-Purandar D-Pune
              </span>
            </label>
            <div className="flex flex-wrap gap-6 sm:gap-10 font-serif p-4 sm:p-6 justify-center">
              <div className="bg-slate-600 p-4  rounded-lg hover:bg-slate-700 px-16 hover:text-slate-100">
                <h1>
                  <u>Contact Number</u>
                </h1>
                <p className="pt-2">7720976985</p>
              </div>
              <div className="bg-slate-600 p-2 rounded-lg px-16 hover:bg-slate-700 hover:text-slate-100">
                <u>
                  <h1>GitHub ID:</h1>
                </u>
                <p className="pt-2">hrutwik2026</p>
              </div>
              <div className="bg-slate-600 p-2 rounded-lg px-16 hover:bg-slate-700 hover:text-slate-100">
                <h1>
                  <u>Linkedin ID:</u>
                </h1>
                <p className="pt-2">
                  <a
                    href="https://Linkedin.com/in/hrutwik-kale-45333b25a "
                    target="_blank"
                  >
                    https://Linkedin.com/in/hrutwik-kale-45333b25a
                  </a>
                </p>
              </div>
            </div>
            <label className=" text-slate-400 ">
              Hobbies :
              <span className="text-slate-400 font-serif text-xl">
                {" "}
                Cricket , Swimming
              </span>
            </label>
            {/* <div className="flex-1 flex flex-col border-t-2 w-full justify-center items-center">
              <h1 className="text-2xl  text-slate-400 font-bold font-serif p-5">
                Certification
              </h1>
              <ul className="flex gap-12">
                <li className="p-2 font-serif text-slate-200 ">
                  <p className=" text-2xl">Full Stack Java Development </p>{" "}
                  <p className="text-slate-500">Qspider & Jspider Institute</p>
                </li>
                <li className="p-2 font-serif text-slate-200">
                  <p className=" text-2xl">Art of C Programming </p>{" "}
                  <p className="text-slate-500">University of Calicut</p>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="flex-1 ">
            <h1 className="text-2xl  text-slate-400 font-bold font-serif p-5">
              Education
            </h1>
            <div className="overflow-x-auto p-5">
              <table className="min-w-full border-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-900 hover:text-slate-900  font-serif text-slate-300 ">
                  <tr className="hover:bg-slate-700 hover:text-slate-950  ">
                    <th className="py-2  text-slate-300  px-4">Class</th>
                    <th className="py-2  text-slate-300  px-4">
                      School / College name
                    </th>
                    <th className="py-2  text-slate-300  px-4">Percentage</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 font-serif">
                  <tr className="bg-gray-600 hover:bg-slate-400 text-black hover:text-slate-700 border-b border-gray-200">
                    <td className="py-2  px-4">10th / SSC</td>
                    <td className="py-2  px-4">Grurkul Vidyalay Saswad</td>
                    <td className="py-2  px-4">79.40%</td>
                  </tr>
                  <tr className="bg-gray-600 text-black hover:bg-slate-400 border-b hover:text-slate-700 border-gray-200">
                    <td className="py-2   px-4">12th / HSC</td>
                    <td className="py-2   px-4">Waghire College Saswad</td>
                    <td className="py-2   px-4">52.91%</td>
                  </tr>
                  <tr className="bg-gray-600 border-b text-black hover:bg-slate-400 hover:text-slate-700 border-gray-200">
                    <td className="py-2   px-4">Graduation</td>
                    <td className="py-2   px-4">Waghire College Saswad</td>
                    <td className="py-2   px-4">83.23%</td>
                  </tr>
                  <tr className="bg-gray-600 border-b text-black hover:bg-slate-400 hover:text-slate-700 border-gray-200">
                    <td className="py-2   px-4">Post-Gradution</td>
                    <td className="py-2   px-4">Waghire College Saswad</td>
                    <td className="py-2   px-4">77.7%</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex-1 flex flex-col  w-full justify-center pt-6 items-start">
                <h1 className="text-2xl  text-slate-700 font-bold font-serif p-5">
                  Certification
                </h1>
                <ul className="flex gap-12">
                  <li className="p-2 font-serif text-slate-200 ">
                    <p className=" text-2xl text-slate-400">
                      Full Stack Java Development{" "}
                    </p>{" "}
                    <p className="text-slate-500">
                      Qspider & Jspider Institute
                    </p>
                  </li>
                  <li className="p-2 font-serif text-slate-200">
                    <p className=" text-2xl  text-slate-400">
                      Art of C Programming{" "}
                    </p>{" "}
                    <p className="text-slate-500">University of Calicut</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}
export default App;
