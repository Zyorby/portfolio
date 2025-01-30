import React, { useState } from 'react';
import './App.css';
import { DiHtml5, DiCss3, DiJsBadge, DiMysql, DiPython } from "react-icons/di";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import pfp from './main-pfp.jpg';
import study from './study.jpg';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  // Set your password here
  const correctPassword = "YourSecurePassword123";  // Change this to your own password

  const handleLogin = () => {
    if (inputPassword === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Try again!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Enter Password to Access</h1>
        <input 
          type="password"
          placeholder="Enter Password"
          value={inputPassword}
          onChange={(e) => setInputPassword(e.target.value)}
          className="p-2 border rounded-lg mb-3"
        />
        <button 
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Unlock
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="text-2xl font-semibold">agic.dev</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center text-black text-lg mt-20">
        <h1 className="font-mono text-3xl">Aspiring Cybersecurity Analyst</h1>
        <p className="pt-3">Hi, I'm <b>Almedin Agic</b>. A passionate future CyberSecurity expert based in Michigan.</p>

        <div className="text-3xl flex flex-row mt-5 space-x-3">
          <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <RxLinkedinLogo />
          </a>
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <RxGithubLogo />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-row pt-10 items-center">
          <h3 className="text-2xl">Tech Stack | </h3>
          <div className="flex flex-row text-3xl pl-2">
            <DiHtml5 className="pr-2" />
            <DiCss3 className="pr-2" />
            <DiJsBadge className="pr-2" />
            <DiMysql className="pr-2" />
            <DiPython />
          </div>
        </div>

        <img src={pfp} alt="Profile" className="rounded-full w-64 h-64 mt-10" />
      </main>

      {/* About Section */}
      <section id="about" className="flex flex-col md:flex-row items-center mt-20 p-10">
        <img src={study} alt="study" className="rounded-2xl w-64 h-64 mb-5 md:mb-0 md:mr-10" />
        <div>
          <h2 className="text-blue-600 font-bold text-lg pb-2">About Me</h2>
          <h2 className="font-bold text-lg pb-2">A passionate future CyberSecurity expert based in Michigan</h2>
          <p>
            I am currently learning and exploring the field of cybersecurity with a strong foundation in programming, ethical hacking, and data security. 
            I have experience with HTML, CSS, JavaScript, MySQL, and Python, and I am continuously developing my skills.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;