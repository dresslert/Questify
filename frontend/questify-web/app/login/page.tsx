'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '../styles/loadingAnimation.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Ativar o carregamento
    try {
      const response = await axios.post('/auth/login', { username, password });
      
      // Salvar o token JWT no localStorage
      localStorage.setItem('token', response.data.token);

      // Simular tempo de redirecionamento e exibir o carregamento
      setTimeout(() => {
        router.push('/profile'); // Redirecionar para a tela de perfil
      }, 2500); // Aguarda 2.5 segundos para a animação
    } catch (err) {
      setLoading(false); // Desativar carregamento no caso de erro
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-scroll bg-center bg-cover text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: "url('/images/medieval-background.png')" }}
    >
      {loading ? (
        // Tela de carregamento com tema de forja
        <div className="flex flex-col items-center justify-center text-center">
          {/* Animação de círculo pulsante */}
          <div className="forge-animation"></div>
          <p className="text-3xl text-red-500 mt-4 animate-glow">Metal quente... ⚒️</p>
        </div>
      ) : (
        <div className="container p-8 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg w-full max-w-3xl">
          <h1
            className="text-4xl font-extrabold text-center mb-8 tracking-widest text-gold"
            style={{ fontFamily: 'Uncial Antiqua, serif' }}
          >
            🏰 Portal do Aventureiro 🏰
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md border-2 border-yellow-500"
          >
            <h2
              className="text-2xl font-bold mb-6 text-center text-yellow-500"
              style={{ fontFamily: 'Cinzel Decorative, serif' }}
            >
              ⚔️ Entrar na Jornada ⚔️
            </h2>

            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <div className="mb-4">
              <label className="block text-lg font-medium text-gold">Nome de Usuário</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 mt-2 rounded bg-gray-800 border border-gray-600 focus:border-yellow-400"
                placeholder="Digite seu nome de usuário"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium text-gold">Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 rounded bg-gray-800 border border-gray-600 focus:border-yellow-400"
                placeholder="Digite sua senha"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold py-2 rounded shadow-lg transform hover:scale-105 transition duration-300"
            >
              ⚔️ Entrar no Reino
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
