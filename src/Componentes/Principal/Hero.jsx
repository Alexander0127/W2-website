import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Hero() {
  const [text] = useTypewriter({
    words: [
      "de la atracción.",
      "del employer branding.",
      "del inbound recruiting.",
      "del talent relationship management.",
    ],
    loop: {},
    typeSpeed: 120,
  });
  return (
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
      <div class="bg-primarycolor bg-contain bg-repeat rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
        <div class="flex justify-around">
        <img
            className="w-48 hidden md:block"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/hired-8980687-7374596.png"
            alt=""
          />
          <div>
            <h2 class="font-display text-2xl font-bold tracking-tight text-white sm:text-5xl lg:text-4xl">
              ¿Estás listo? <br />
              <span className="text-4xl md:text-6xl">Vive la experiencia</span> <br />{" "}
              <span class="text-teal-100 mx-1 font-extrabold text-2xl sm:text-5xl lg:text-4xl relative inline-block stroke-current">
                {text}
                <Cursor />
                <svg
                  class="absolute -bottom-0.5 w-full max-h-1.5"
                  viewBox="0 0 55 5"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                    stroke-width="2"
                  ></path>
                </svg>
              </span>
            </h2>
            <p class="max-w-lg text-base text-indigo-100 mx-auto mt-4 sm:text-lg">
              Te ayudaremos a fortalecer tu Marca Empleadora y que la atracción
              sea solo una consecuencia. Somos expertos en:
            </p>
          </div>
          <img
            className="w-48 hidden md:block"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/job-recruitment-website-5241931-4390948.png?f=webp"
            alt=""
          />
        </div>

        <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
          <li class="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Reclutamiento y Selección
          </li>
          <li class="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Inbound Recruiting
          </li>
          <li class="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Head hunting
          </li>
          <li class="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Capacitación y desarrollo
          </li>
          <li class="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Evaluación de desempeño
          </li>
          <li class="inline-flex items-center gap-2">
            <svg
              aria-hidden="true"
              class="h-5 w-5 shrink-0 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
            </svg>
            Employer Branding
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero;
