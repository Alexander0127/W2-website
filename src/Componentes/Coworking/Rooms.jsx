import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Talleres from '../../assets/coworking/Colegio.jpeg'
import Freelance from '../../assets/coworking/freelance.jpg'
import cw2_2 from '../../assets/coworking/Estrategia.jpeg'
import Charla from '../../assets/coworking/Charla.jpg'
import Equipo from '../../assets/coworking/equipo.jpg'
import Eventos from '../../assets/coworking/eventos.jpg'
import Individual from '../../assets/coworking/individual.jpg'
import flecha from "../../assets/flecha.png";

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      imageUrl: Individual, // Reemplaza con tus imágenes
      title: 'Espacio Individual',
      seats: 26,
    },
    {
      id: 2,
      imageUrl: Equipo,
      title: 'Trabajo en Equipo',
      seats: '2 - 26',
    },
    {
      id: 3,
      imageUrl: cw2_2,
      title: 'Capacitaciones',
      seats: 26,
    },
    {
      id: 4,
      imageUrl: Talleres,
      title: 'Talleres',
      seats: 26,
    },
    {
      id: 5,
      imageUrl: Charla,
      title: 'Charlas',
      seats: 26,
    },
    {
      id: 6,
      imageUrl: Eventos,
      title: 'Eventos Corporativos',
      seats: 30,
    },
    {
      id: 7,
      imageUrl: Freelance,
      title: 'Oficina de Freelance',
      seats: '1 - 26',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Desplazamiento automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Cambia de imagen cada 3 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === rooms.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10 mt-6 font-dmsans">
      {/* Título y subtítulo */}
      <div className="text-center mb-8">
      
        <h2 className="text-4xl font-bold text-gray-800">
          <img
            src={flecha}
            alt=""
            className="inline-block w-16 h-12 mr-2"
          ></img>Beneficios del <span className='text-primarycolor'>Coworking</span> </h2>
        <p className="text-gray-600 mt-2">
        Que los espacios no limiten tu crecimiento, si eres EMPRESARIO, EMPREDEDOR, PROFESIONAL, FREELANCE, ETC, este espacio es ideal para ti, adaptado a tus necesidades.
        </p>
      </div>

      <div className="relative">
        {/* Botón Anterior */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-white p-2 rounded-full shadow-md text-black hover:bg-gray-300 focus:outline-none z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Carrusel */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 25}%)` }}
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="min-w-[25%] h-auto p-4"
              >
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <img
                    src={room.imageUrl}
                    alt={`Room ${room.id}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{room.title}</h3>
                    <p className="text-gray-500">{room.seats} Asientos</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-white p-2 rounded-full shadow-md text-black hover:bg-gray-300 focus:outline-none z-10"
        >
          <FaChevronRight />
        </button>

    {/* Paginación */}
<div className="flex justify-center space-x-2 mt-4">
  {rooms.slice(0, 4).map((_, index) => (
    <button
      key={index}
      className={`h-2 w-2 rounded-full ${
        index === currentIndex ? 'bg-black' : 'bg-gray-400'
      }`}
      onClick={() => setCurrentIndex(index)}
    />
  ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
