/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react';
import Image from 'next/image';
import { FaEnvelope, FaCopy, FaCheck, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import LogoCarousel from './components/LogoCarousel';
import Navbar from './components/Navbar';
import Experience from './components/Experience';

const HomePage = () => {

  const email = "Kendall.Fallas.Mena@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset icon after 2 seconds
  };

  return (

    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-gray-800">
      <Navbar />
      {/* Primera Sección Visual */}
      <section className="relative w-full flex flex-col items-center justify-center py-12 px-4 text-gray-800 md:pb-48">
        {/* Círculo 1 */}
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-50 rounded-full mix-blend-multiply blur-xl transform -translate-y-1/2 animate-move-slower md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Círculo 2 */}
        <div className="absolute top-1/2 left-2/3 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply blur-2xl transform -translate-y-1/2 animate-move md:w-64 md:h-64 lg:w-96 lg:h-96"></div>
        {/* Contenido */}
        <img
          src="/logo.png"
          alt="Logo"
          className="relative z-10 w-24 h-24 rounded-full mb-4 md:w-32 md:h-32"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 relative z-10">Kendall Fallas</h1>
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-center max-w-2xl relative z-10">

          Full Stack Developer | Focused on web development, basic knowledge of AI, and optimization.
        </p>
        {/* Sección de Contacto */}
        <div className="flex items-center space-x-4 mt-12 relative z-10 bg-zinc-200/10 p-2 rounded-lg border border-[#e7e7e775]">
          <p className="text-lg md:text-xl text-gray-700">{email}</p>
          <a href={`mailto:${email}`} className="text-slate-400 hover:text-slate-500">
            <FaEnvelope size={24} />
          </a>
          <button onClick={handleCopyEmail} className="text-slate-400 hover:text-slate-500">
            {copied ? <FaCheck size={24} /> : <FaCopy size={24} />}
          </button>
        </div>
        <div className="flex space-x-8 mt-8 relative z-10">
          <a href="https://github.com/KendallFallas07" className="text-slate-900 hover:text-blue-500">
            <FaGithub size={52} />
          </a>
          <a href="https://www.linkedin.com/in/kendallfallas" className="text-slate-800 hover:text-blue-500">
            <FaLinkedin size={52} />
          </a>
        </div>
      </section>

      {/* Sección de Tecnologías */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='tools'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">My technologies</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            These are the technologies I use on a daily basis to develop efficient and scalable solutions, along with others I have experience and familiarity with.
          </p>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Main Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/EDUPLANPRO.jpg" alt="Edu Plan Pro Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Edu Plan Pro</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                A website designed to digitize hundreds of records with the goal of improving the service provided to students at the National University of Costa Rica by facilitating access to information about the courses offered by the institution.              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/react.svg" alt="React Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/js.svg" alt="JS Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/tailwind.svg" alt="Tailwind Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/nodejs.svg" alt="NodeJs Image" className="w-28 h-10 mr-2" />
                <Image width={10} height={10} src="/postgres.svg" alt="Postgrees Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/docker.svg" alt="Docker Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/brayrpgs/EduPlanPro-Frontend"
                  className="bg-black text-white px-4 py-2 rounded">View code</a>
              </div>
            </div>


            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/wsm.png" alt="Smart Query Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Shopping Engine Search</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">

              A mobile application that uses web scraping to collect product data from Amazon, Alibaba, and eBay. It displays items in cards, allowing users to compare and choose the best option from each store. The app includes login functionality with OAuth 2.

              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/ts.svg" alt="JS Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/nodejs.svg" alt="NodeJs Image" className="w-28 h-10 mr-2" />
                <Image width={10} height={10} src="/kotlin.svg" alt="Kotlin Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/postgres.svg" alt="Postgrees Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/docker.svg" alt="Docker Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/brayrpgs/ARShopping" className="bg-black text-white px-4 py-2 rounded">View code</a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Other Projects...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/CPU.jpg" alt="Simulacion CPU" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">CPU Scheduling Simulation</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                An application designed for the Linux operating system that simulates the CPU scheduling process, managing various tasks related to process management and their allocation across different states.              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/c.svg" alt="Postgres Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/KendallFallas07/Planificacion-CPU-SO" className="bg-black text-white px-4 py-2 rounded">View code</a>
              </div>
            </div>

            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/SAF.png" alt="Project 2 Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">SAF</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                The autonomous billing system is an innovative solution powered by artificial intelligence that enables automatic product identification in a shopping center, facilitating a faster and more accurate payment process.
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/php.svg" alt="Php" className="w-16 h-10 mr-2" />
                <Image width={10} height={10} src="/js.svg" alt="Prometheus Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/html.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/python.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/mysql-original-wordmark.svg" alt="Grafana Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/KendallFallas07/SAF" className="bg-black text-white px-4 py-2 rounded">View code</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='experience'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Work experience</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Discover the projects and work that have shaped my professional journey throughout my career.
          </p>
          <Experience />
        </div>
      </section>

    </main>
  );
};

export default HomePage;
