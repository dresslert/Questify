'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface UserProfile {
  username: string;
  email: string;
  level: number;
  avatar: string; // URL da foto do usuário
  bio: string;
  achievements: string[];
}

export default function ProfilePage() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    setUser({
      username: 'Lulu Martina',
      email: 'lulu@lulu.com',
      level: 99,
      avatar: '/images/a.jpg',
      bio: 'Líder dos Exércitos do Norte, defensor da justiça e portador da espada encantada.',
      achievements: ['Conquistador dos Sete Reinos', 'Herói das Batalhas Épicas', 'Guardião do Trono de Ferro'],
    });
  }, [router]);

  if (error) return <p>{error}</p>;

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/medieval-background.png')" }}
    >
      {/* Container do perfil centralizado */}
      <div className="w-full max-w-6xl bg-black bg-opacity-60 p-8 rounded-lg shadow-2xl relative flex flex-col items-center">
        {/* Efeito visual medieval */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70 rounded-lg"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Avatar e informações do usuário */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-x-8">
            <img
              src={user?.avatar}
              alt="Avatar do Usuário"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-yellow-500 shadow-lg transform hover:scale-110 transition-transform duration-300"
            />
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-5xl font-extrabold text-yellow-500 drop-shadow-lg">
                {user?.username}
              </h1>
              <p className="text-xl font-light text-gray-300">
                {user?.email}
              </p>
              <p className="text-lg italic text-gray-400">
                "{user?.bio}"
              </p>
              <p className="text-sm font-bold text-yellow-400">
                ⚔️ Nível: {user?.level}
              </p>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-col space-y-4">
            <button className="bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold py-2 px-6 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
              🛡️ Editar Perfil
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-xl transform hover:scale-105 transition duration-300">
              ⚔️ Batalhas Recentes
            </button>
          </div>
        </div>

        {/* Conquistas */}
        <div className="mt-12 bg-black bg-opacity-50 p-8 rounded-lg border-2 border-yellow-600 shadow-lg">
          <h2 className="text-3xl font-extrabold text-center text-yellow-400 mb-6 drop-shadow-lg">
            🏆 Conquistas Épicas
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            {user?.achievements.map((achievement, index) => (
              <li key={index} className="bg-gray-700 p-6 rounded-lg shadow-lg border-2 border-yellow-500 text-yellow-300 font-semibold">
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Rodapé com status */}
        <div className="mt-8 flex justify-center space-x-6">
          <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-300">Missões Completas: 120</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-300">Títulos Conquistados: 8</p>
          </div>
          <div className="bg-gray-900 bg-opacity-80 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-300">Guilda: Cavaleiros da Luz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
