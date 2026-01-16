// app/page.js

"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

export default function Home() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    
    <div className="relative min-h-screen bg-gray-100 overflow-x-hidden">
      {/* The cool Background stuff*/}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#8C1D40",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
              random: true,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#8C1D40",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: "out",
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />  


      {/*Header andNavigation bar */}
      
      <nav className="relative z-20 bg-white/90 backdrop-blur-sm shadow-sm sticky top-0">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              
              {/* DevSoc Logo */}
              <svg
                className="w-10 h-10"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="40" y="50" width="120" height="80" rx="5" fill="#8C1D40" />
                <rect x="50" y="60" width="100" height="60" fill="#f5f5f5" />
                <rect x="65" y="130" width="70" height="10" fill="#8C1D40" />
                <rect x="85" y="140" width="30" height="10" fill="#8C1D40" />
                <rect x="75" y="140" width="50" height="5" rx="2" fill="#8C1D40" />
                <path
                  d="M70,75 L60,90 L70,105"
                  stroke="#8C1D40"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M130,75 L140,90 L130,105"
                  stroke="#8C1D40"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M90,70 L110,110"
                  stroke="#8C1D40"
                  strokeWidth="3"
                  fill="none"
                />
              </svg>
              <h1 className="text-2xl font-bold text-[#8C1D40]">DevSoc</h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="text-gray-600 hover:text-[#8C1D40] transition-colors">
                About
              </a>
              <a href="#events" className="text-gray-600 hover:text-[#8C1D40] transition-colors">
                Events
              </a>
              <a href="#services" className="text-gray-600 hover:text-[#8C1D40] transition-colors">
                Services
              </a>
              <a href="#contact" className="text-gray-600 hover:text-[#8C1D40] transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 bg-gradient-to-br from-[#8C1D40] to-[#6B1530] text-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stellenbosch University
            <br />
            <span className="relative inline-block">
              Developer Society
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFB81C]"></span>
            </span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Building the future, one project at a time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#8C1D40] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Join Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8C1D40] transition-colors">
              Learn More
            </button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center mt-8">
            <a
              href="#"
              className="text-white hover:text-[#FFB81C] transition-colors text-2xl"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFB81C] transition-colors text-2xl"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFB81C] transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#FFB81C] transition-colors text-2xl"
              aria-label="Discord"
            >
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-center mb-8 text-[#8C1D40]">
            About Us
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            We're a community of students passionate about technology, coding, and innovation. 
            Join us for workshops, hackathons, and networking events throughout the year.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Event Card 1 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Web Dev Workshop</h4>
              <p className="text-gray-600 mb-4">Learn React and Next.js</p>
              <p className="text-sm text-gray-500">Jan XX, 20XX • 6:00 PM</p>
            </div>

            {/* Event Card 2 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Hackathon 20XX</h4>
              <p className="text-gray-600 mb-4">XX-hour coding challenge</p>
              <p className="text-sm text-gray-500">Feb XX, 20XX • 9:00 AM</p>
            </div>

            {/* Event Card 3 */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-bold mb-2">Tech Talk Series</h4>
              <p className="text-gray-600 mb-4">Industry professionals speak</p>
              <p className="text-sm text-gray-500">Mar XX, 20XX • 5:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 bg-gray-50/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8 text-[#8C1D40]">Get In Touch</h3>
          <p className="text-lg text-gray-700 mb-4">
            Email us at:{" "}
            <a
              href="mailto:info@devsoc.co.za"
              className="text-[#8C1D40] font-semibold hover:underline"
            >
              info@devsoc.co.za
            </a>
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Follow us on social media for the latest updates and announcements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://servicedesk.devsoc.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8C1D40] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#6B1530] transition-colors"
            >
              Get Support
            </a>
            <a
              href="https://su.devsoc.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#8C1D40] text-[#8C1D40] px-8 py-3 rounded-lg font-semibold hover:bg-[#8C1D40] hover:text-white transition-colors"
            >
              Visit Main Site
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Stellenbosch University Developer Society. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#FFB81C] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#FFB81C] transition-colors">
                Terms of Service
              </a>
              <a href="https://policy.devsoc.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB81C] transition-colors">
                Policies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

