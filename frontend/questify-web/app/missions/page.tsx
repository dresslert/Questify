'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

interface Mission {
  _id: string;
  name: string;
  description: string;
  rewardPoints: number;
}

export default function MissionsPage() {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [rewardPoints, setRewardPoints] = useState(0);
  const [editingMissionId, setEditingMissionId] = useState<string | null>(null);

  useEffect(() => {
    fetchMissions();
  }, []);

  const fetchMissions = async () => {
    try {
      const response = await axios.get('/api/mission');
      setMissions(response.data);
    } catch (error) {
      console.error('Error fetching missions:', error);
    }
  };

  const createMission = async () => {
    try {
      const newMission = { name, description, rewardPoints };
      const response = await axios.post('/api/mission', newMission);
      setMissions([...missions, response.data]);
      setName('');
      setDescription('');
      setRewardPoints(0);
    } catch (error) {
      console.error('Error creating mission:', error);
    }
  };

  const updateMission = async (id: string) => {
    try {
      const updatedMission = { name, description, rewardPoints };
      const response = await axios.put(`/api/mission/${id}`, updatedMission);
      setMissions(
        missions.map((mission) => (mission._id === id ? response.data : mission))
      );
      setEditingMissionId(null);
      setName('');
      setDescription('');
      setRewardPoints(0);
    } catch (error) {
      console.error('Error updating mission:', error);
    }
  };

  const deleteMission = async (id: string) => {
    try {
      await axios.delete(`/api/mission/${id}`);
      setMissions(missions.filter((mission) => mission._id !== id));
    } catch (error) {
      console.error('Error deleting mission:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (editingMissionId) {
      updateMission(editingMissionId);
    } else {
      createMission();
    }
  };

  const handleEdit = (mission: Mission) => {
    setEditingMissionId(mission._id);
    setName(mission.name);
    setDescription(mission.description);
    setRewardPoints(mission.rewardPoints);
  };

  return (
    <div className="min-h-screen w-full bg-scroll bg-center bg-cover text-white flex flex-col justify-center items-center" 
         style={{ backgroundImage: "url('/images/medieval-background.png')" }}>
      <div className="container p-8 bg-gray-900 bg-opacity-80 text-white rounded-lg shadow-lg w-full max-w-5xl">
        <h1 className="text-4xl font-extrabold text-center mb-8 tracking-widest text-gold" 
            style={{ fontFamily: 'Uncial Antiqua, serif' }}>
          ⚔️ Forja das Aventuras ⚔️
        </h1>

        <form onSubmit={handleSubmit} className="mb-8 bg-gray-900 bg-opacity-70 p-6 rounded-lg shadow-md border-2 border-yellow-500">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-500" 
              style={{ fontFamily: 'Cinzel Decorative, serif' }}>
            📜 Forjar Nova Missão
          </h2>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gold">Nome da Missão</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 rounded bg-gray-800 border border-gray-600 focus:border-yellow-400"
              placeholder="Nomeie a missão..."
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gold">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 mt-2 rounded bg-gray-800 border border-gray-600 focus:border-yellow-400"
              placeholder="Detalhe o desafio..."
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gold">Pontos de Recompensa</label>
            <input
              type="number"
              value={rewardPoints}
              onChange={(e) => setRewardPoints(Number(e.target.value))}
              className="w-full p-3 mt-2 rounded bg-gray-800 border border-gray-600 focus:border-yellow-400"
              placeholder="Defina os pontos de recompensa..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 text-black font-bold py-2 rounded shadow-lg transform hover:scale-105 transition duration-300"
          >
            {editingMissionId ? '⚔️ Atualizar Juramento' : '🛡️ Forjar Nova Missão'}
          </button>
        </form>

        <div className="space-y-6">
          {missions.map((mission) => (
            <div key={mission._id} className="bg-gray-900 bg-opacity-80 p-6 rounded-lg shadow-md border-2 border-yellow-700">
              <h2 className="text-2xl font-bold mb-2 text-yellow-500">{mission.name}</h2>
              <p className="text-gray-300 mb-2">{mission.description}</p>
              <p className="text-sm text-gray-400 mb-4">Recompensa: 🏆 {mission.rewardPoints} pontos</p>

              <div className="flex justify-between">
                <button
                  onClick={() => handleEdit(mission)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transform hover:scale-105 transition duration-300"
                >
                  ✏️ Editar
                </button>
                <button
                  onClick={() => deleteMission(mission._id)}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transform hover:scale-105 transition duration-300"
                >
                  🗑️ Destruir Missão
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
