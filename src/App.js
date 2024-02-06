import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonial";
import Employee from "./components/Employee";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/*<Testimonials />*/}
      <Contact />
      {/* <Employee />
      <body class="h-screen flex flex-col justify-center items-center">
        <label class="text-gray-700 text-sm font-bold select-none" for="full_name">
        Full Name
        </label>
        <input id="full_name" placeholder="Enter your full name" 
        class="mt-2 shadow border rounded-lg w-4/6 px-3 py-2 text-gray-700
        focus:shadow-outline focus:bg-blue-100 placeholder-indigo-300"/>
        <button class="mt-2 px-3 py-2 bg-blue-900 text-blue-100 rounded-lg">
        Save
        </button>
      </body> */}
      {/* <body class="bg-gray-200">
       
        <div class="h-screen flex flex-wrap">
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-100 m-2 w-full flex justify-center items-center bg-blue-100">A</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-200 m-2 w-full flex justify-center items-center bg-blue-200">B</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-300 m-2 w-full flex justify-center items-center bg-blue-300">C</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-400 m-2 w-full flex justify-center items-center bg-blue-400">D</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-500 m-2 w-full flex justify-center items-center bg-blue-500">E</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-600 m-2 w-full flex justify-center items-center bg-blue-600">F</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-700 m-2 w-full flex justify-center items-center bg-blue-700">G</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-800 m-2 w-full flex justify-center items-center bg-blue-800">H</div>
          </div>
          <div class="flex w-1/3 h-1/3">
          <div class="bg-teal-900 m-2 w-full flex justify-center items-center bg-blue-900">I</div>
          </div>
        </div>

      </body> */}
    </main>
  )
}
