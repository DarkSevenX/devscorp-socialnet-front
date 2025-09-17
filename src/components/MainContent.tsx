import { Nav } from './Nav';
import { FaRegBookmark } from 'react-icons/fa6';
import { FaRegHeart } from "react-icons/fa";
import { FiShare2 } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { useState } from 'react';

const postsData = [
  {
    username: 'Davo duh',
    profileImg:
      'https://plus.unsplash.com/premium_photo-1757392183699-ab8884a4eb05?q=80&w=870&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=870&auto=format&fit=crop',
    description: 'Probando un nuevo setup con Node.js y React. 🚀',
    uploadTime: '20m'
  },
  {
    username: 'Keyla Poloh',
    profileImg:
      'https://plus.unsplash.com/premium_photo-1757392183484-db7d416357a3?q=80&w=761&auto=format&fit=crop',
    image:
      'https://plus.unsplash.com/premium_photo-1757392183484-db7d416357a3?q=80&w=761&auto=format&fit=crop',
    description: 'Café y lectura en una tarde tranquila ☕📖',
    uploadTime: 'Hace 5h'
  },
  {
    username: 'Juan Salazar',
    profileImg:
      'https://images.unsplash.com/photo-1757452608866-0b9c2f3e2d6b?q=80&w=387&auto=format&fit=crop',
    image:
      'https://plus.unsplash.com/premium_photo-1757392183411-05b939d37bf5?q=80&w=805&auto=format&fit=crop',
    description: 'Explorando nuevos estilos de fotografía urbana 📸',
    uploadTime: 'Hace 2h'
  },
  {
    username: 'Mariana López',
    profileImg:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=870&auto=format&fit=crop',
    description: 'Un amanecer increíble en la playa 🌅',
    uploadTime: 'Hace 1d'
  },
  {
    username: 'Carlos Mendoza',
    profileImg:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=870&auto=format&fit=crop',
    description: 'Probando el nuevo chip M3 en mi MacBook, la velocidad es brutal 💻🔥',
    uploadTime: 'Hace 3h'
  },
  {
    username: 'Laura García',
    profileImg:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded79a5c9?q=80&w=870&auto=format&fit=crop',
    description: 'Plantas nuevas para mi rincón verde 🌱✨',
    uploadTime: 'Hace 8h'
  },
  {
    username: 'Andrés Torres',
    profileImg:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=870&auto=format&fit=crop',
    description: 'Noches de código y café ☕💡',
    uploadTime: 'Hace 30m'
  },
  {
    username: 'Sofía Méndez',
    profileImg:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop',
    description: 'La vista desde mi ventana no tiene precio ✨',
    uploadTime: 'Hace 4h'
  },
  {
    username: 'Miguel Castillo',
    profileImg:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1549921296-3a95a1a4f8d6?q=80&w=870&auto=format&fit=crop',
    description: 'Practicando fotografía de comida, este ramen estuvo 🔥🍜',
    uploadTime: 'Hace 6h'
  },
  {
    username: 'Camila Herrera',
    profileImg:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop',
    description: 'Estudiando un nuevo curso de diseño UX/UI 🎨💻',
    uploadTime: 'Hace 2d'
  },
  {
    username: 'Pedro Alvarez',
    profileImg:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=870&auto=format&fit=crop',
    description: 'Un paseo rápido por el centro histórico 🚶‍♂️',
    uploadTime: 'Hace 1h'
  },
  {
    username: 'Natalia Ruiz',
    profileImg:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=870&auto=format&fit=crop',
    description: 'Un poco de inspiración artística 🎨🖌️',
    uploadTime: 'Hace 12h'
  },
  {
    username: 'Daniel Rojas',
    profileImg:
      'https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&w=387&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=870&auto=format&fit=crop',
    description: 'Primeras pruebas con mi dron, la vista aérea es increíble 🚁🌍',
    uploadTime: 'Hace 15m'
  },
  {
    username: 'Ana Pérez',
    profileImg:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1522204523234-8729aa6e3d59?q=80&w=870&auto=format&fit=crop',
    description: 'Primera práctica de acuarela 🎨🌸',
    uploadTime: 'Hace 25m'
  },
  {
    username: 'Luis Ramírez',
    profileImg:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=870&auto=format&fit=crop',
    description: 'Armando mi primer PC gamer 🔧💻',
    uploadTime: 'Hace 1h'
  },
  {
    username: 'Claudia Estrada',
    profileImg:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=870&auto=format&fit=crop',
    description: 'Un café helado para sobrevivir el calor ☀️🥶',
    uploadTime: 'Hace 2h'
  },
  {
    username: 'Diego Moreno',
    profileImg:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1483794344563-d27a8d18014e?q=80&w=870&auto=format&fit=crop',
    description: 'Probando fotografía nocturna 🌌✨',
    uploadTime: 'Hace 5h'
  },
  {
    username: 'Valentina Ortiz',
    profileImg:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=870&auto=format&fit=crop',
    description: 'Nuevo proyecto de crochet 🧵🪡',
    uploadTime: 'Hace 8h'
  },
  {
    username: 'Gabriel Silva',
    profileImg:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?q=80&w=870&auto=format&fit=crop',
    description: 'Explorando bases de datos NoSQL 📚💡',
    uploadTime: 'Hace 12h'
  },
  {
    username: 'Marta Jiménez',
    profileImg:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=870&auto=format&fit=crop',
    description: 'Flores en el jardín de mi abuela 🌻🌼',
    uploadTime: 'Hace 20h'
  },
  {
    username: 'Roberto Díaz',
    profileImg:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1581093588401-22c07f1a8d1a?q=80&w=870&auto=format&fit=crop',
    description: 'Probando un robot de Arduino 🤖🔋',
    uploadTime: 'Hace 1d'
  },
  {
    username: 'Isabella Cruz',
    profileImg:
      'https://images.unsplash.com/photo-1546539782-6fc531453083?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=870&auto=format&fit=crop',
    description: 'Pizza casera para el fin de semana 🍕🥂',
    uploadTime: 'Hace 2d'
  },
  {
    username: 'Tomás Herrera',
    profileImg:
      'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1465311440773-6eb0f76ebc3a?q=80&w=870&auto=format&fit=crop',
    description: 'Un día de hiking por las montañas 🥾⛰️',
    uploadTime: 'Hace 3d'
  },
  {
    username: 'Andrea Flores',
    profileImg:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=870&auto=format&fit=crop',
    description: 'Aprendiendo a tocar guitarra 🎶🎸',
    uploadTime: 'Hace 4d'
  },
  {
    username: 'Santiago León',
    profileImg:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1541534401786-2077eed87a9c?q=80&w=870&auto=format&fit=crop',
    description: 'Tarde de lectura en la biblioteca 📖☕',
    uploadTime: 'Hace 5d'
  },
  {
    username: 'Paula Castro',
    profileImg:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=870&auto=format&fit=crop',
    description: 'Montando mi setup de streaming 🎥🎮',
    uploadTime: 'Hace 6d'
  },
  {
    username: 'Fernando Reyes',
    profileImg:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=870&auto=format&fit=crop',
    description: 'La ciudad desde lo alto 🏙️🌃',
    uploadTime: 'Hace 1sem'
  },
  {
    username: 'Elena Vargas',
    profileImg:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=870&auto=format&fit=crop',
    description: 'Día de picnic con amigos 🧺🍇',
    uploadTime: 'Hace 2sem'
  },
  {
    username: 'Javier Romero',
    profileImg:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1504203700686-f21d938e1eae?q=80&w=870&auto=format&fit=crop',
    description: 'Probando realidad virtual por primera vez 🕶️🎮',
    uploadTime: 'Hace 3sem'
  },
  {
    username: 'Lucía Torres',
    profileImg:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400&auto=format&fit=crop',
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=870&auto=format&fit=crop',
    description: 'Atardecer mágico en el campo 🌾🌄',
    uploadTime: 'Hace 1mes'
  }
];

export const MainContent = () => {
  const [likedPosts, setLikedPosts] = useState<boolean[]>(postsData.map(() => false));

  const toggleLike = (index: number) => {
    const newLikes = [...likedPosts];
    newLikes[index] = !newLikes[index];
    setLikedPosts(newLikes);
  };

  return (
    <main className='flex-1 md:mx-64 lg:mx-80 overflow-y-auto bg-black scrollbar-hide'>
      <div className='max-w-xl mx-auto p-2 space-y-6'>
        {postsData.map((post, index) => (
          <div className='rounded-xl p-4 space-y-4' key={index}>
            <div className='flex items-center space-x-3'>
              <img
                className='w-10 h-10 rounded-full'
                src={post.profileImg}
                alt=''
              />
              <div>
                <p className='font-semibold text-white'>{post.username}</p>
                <p className='text-xs text-gray-400'>{post.uploadTime}</p>
              </div>
            </div>
            <img className='w-full rounded-lg' src={post.image} alt='' />
            <div className='flex justify-between text-gray-400 text-sm items-center'>
              <div>
                <FaRegBookmark className='text-xl hover:cursor-pointer hover:text-white'/>
              </div>
              <div className='flex flex-row justify-between w-40 items-center'>
                {/* Cambiamos entre corazón vacío y lleno según el estado */}
                {likedPosts[index] ? (
                  <FaRegHeart
                    className='text-xl text-red-500 hover:cursor-pointer transition-all duration-150 ease-in-out'
                    onClick={() => toggleLike(index)}
                  />
                ) : (
                  <FaRegHeart
                    className='text-xl hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out'
                    onClick={() => toggleLike(index)}
                  />
                )}
                <FaRegComment className='text-xl hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out' />
                <FiShare2 className='text-xl hover:cursor-pointer hover:text-white transition-all duration-150 ease-in-out' />
              </div>
            </div>
            <p className='text-white'>{post.description}</p>
          </div>
        ))}
        <Nav />
      </div>
    </main>
  );
};
