import axios from 'axios';

const API_URL = 'http://localhost:3011';

// Função para buscar o último registro RGB
export const getLastRGB = async () => {
  const response = await axios.get(`${API_URL}/get`); // Busca o último registro
  return response.data;
};

// Função para salvar o valor RGB no banco de dados
export const saveToDB = async (r: number, g: number, b: number) => {
  const response = await axios.post(`${API_URL}/save`, { r, g, b });
  console.log("Registro salvo:", response.data);
};

// Função para buscar o próximo registro com base no ID atual
export const fetchNextRGB = async (currentId: number) => {
  const response = await axios.get(`${API_URL}/next`, { params: { id: currentId } });
  return response.data;
};

// Função para buscar o registro anterior com base no ID atual
export const fetchPreviousRGB = async (currentId: number) => {
  const response = await axios.get(`${API_URL}/previous`, { params: { id: currentId } });
  return response.data;
};
