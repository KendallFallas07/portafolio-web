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

          Desarrollador FullStack | Enfoque en desarrollo web, IA y optimización.
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
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Mis tecnologías</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
          Estas son las tecnologías que utilizo a diario para construir soluciones eficientes y escalables, además de aquellas con las que tengo experiencia y conocimiento.
          </p>
        </div>
        <LogoCarousel />
      </section>


      {/* Sección de Proyectos Principales*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Proyectos principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/EPP.png" alt="Edu Plan Pro Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Edu Plan Pro</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              Una página web diseñada con el propósito de digitalizar cientos de registros, con el fin de mejorar la atención brindada a los estudiantes de la Universidad Nacional de Costa Rica al acceder a información sobre los cursos impartidos en la institución.              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/react.svg" alt="React Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/js.svg" alt="JS Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/tailwind.svg" alt="Tailwind Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/nodejs.svg" alt="NodeJs Image" className="w-28 h-10 mr-2" />
                <Image width={10} height={10} src="/postgres.svg" alt="Postgrees Image" className="w-10 h-10 mr-2" />

              </div>
              <div className="flex space-x-4">
                <a  href="javascript:void(0);"
                  className="bg-black text-white px-4 py-2 rounded cursor-not-allowed">En desarrollo</a>
              </div>
            </div>

            
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/cs.jpg" alt="Smart Query Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Muy pronto</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
                * <br/> * <br/> * <br/> * <br/> * 
                
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/sl.svg" alt="Sin logo Image" className="w-10 h-10 mr-2" />
                
              </div>
              <div className="flex space-x-4">
                <a href="javascript:void(0);" className="bg-black text-white px-4 py-2 cursor-not-allowed rounded">404</a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Sección de Otros Proyectos*/}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='projects'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Otros proyectos...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/CPU.jpg" alt="Simulacion CPU" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">Simulación de planificación CPU</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              Una aplicación diseñada para el sistema operativo Linux que simula el proceso de planificación de la CPU, gestionando diversas tareas asociadas a la administración de procesos y su asignación en diferentes estados.              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/c.svg" alt="Postgres Image" className="w-10 h-10 mr-2" />
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/KendallFallas07/Planificacion-CPU-SO" className="bg-black text-white px-4 py-2 rounded">Ver código</a>
              </div>
            </div>
            
            <div className="bg-slate-100 p-6 rounded-lg shadow-lg">
              <img src="/SAF.png" alt="Project 2 Image" className="w-full h-48 md:h-64 object-cover rounded-t-lg" />
              <h3 className="text-2xl md:text-3xl font-semibold my-4 text-gray-900">SAF</h3>
              <p className="text-base md:text-lg mb-4 text-gray-800">
              El sistema autónomo de facturación es una solución innovadora impulsada por inteligencia artificial que permite identificar productos en un centro comercial de manera automática, facilitando un proceso de pago más ágil y preciso. 
              </p>
              <div className="flex items-center mb-4">
                <Image width={10} height={10} src="/php.svg" alt="Php" className="w-16 h-10 mr-2" />
                <Image width={10} height={10} src="/js.svg" alt="Prometheus Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/html.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/python.svg" alt="Flask Image" className="w-10 h-10 mr-2" />
                <Image width={10} height={10} src="/mysql-original-wordmark.svg" alt="Grafana Image" className="w-10 h-10 mr-2" />
                
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com/KendallFallas07/SAF" className="bg-black text-white px-4 py-2 rounded">Ver código</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Experiencia */}
      <section className="w-full py-24 px-4 md:px-8 bg-slate-50" id='experience'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Experiencia laboral</h2>
          <p className="text-lg md:text-xl text-gray-800 mb-12">
            Descubre los proyectos y trabajos que han marcado mi camino profesional durante mi carrera.
          </p>
          <Experience />
        </div>
      </section>

    </main>
  );
};

export default HomePage;
