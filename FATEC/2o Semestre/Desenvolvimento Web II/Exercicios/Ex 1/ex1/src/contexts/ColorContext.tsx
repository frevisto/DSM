import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getLastRGB, fetchNextRGB, fetchPreviousRGB, saveToDB } from '../services/BDLogic';

interface Row {
  id: number;
  r: number;
  g: number;
  b: number;
}

interface ColorContextType {
  r: number;
  g: number;
  b: number;
  saveRGB: () => void;
  setR: (value: number) => void;
  setG: (value: number) => void;
  setB: (value: number) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [r, setR] = useState<number>(0);
  const [g, setG] = useState<number>(0);
  const [b, setB] = useState<number>(0);
  const [currentId, setCurrentId] = useState<number | null>(null);



  // Inicializa o componente com o último registro
  useEffect(() => {
    const fetchLast = async () => {
      const lastRGB = await getLastRGB();
      if (lastRGB) {
        setR(lastRGB.r);
        setG(lastRGB.g);
        setB(lastRGB.b);
        setCurrentId(lastRGB.id);
      }
    };
    fetchLast();
  }, []);




  // Função para navegar para o próximo registro
  const nextColor = async () => {
    if (currentId === null) return;
    const nextRGB = await fetchNextRGB(currentId);
    if (nextRGB) {
      setR(nextRGB.r);
      setG(nextRGB.g);
      setB(nextRGB.b);
      setCurrentId(nextRGB.id);
    }
  };




  // Função para navegar para o registro anterior
  const previousColor = async () => {
    if (currentId === null) return;
    const previousRGB = await fetchPreviousRGB(currentId);
    if (previousRGB) {
      setR(previousRGB.r);
      setG(previousRGB.g);
      setB(previousRGB.b);
      setCurrentId(previousRGB.id);
    }
  };




  // Função para salvar os valores RGB
  const saveRGB = () => {
    saveToDB(r, g, b);
  };



  // Listener de teclas para as setas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextColor();
      } else if (e.key === 'ArrowLeft') {
        previousColor();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentId]); // Adicione currentId como dependência

  return (
    <ColorContext.Provider value={{ r, g, b, setR, setG, setB, saveRGB }}>
      {children}
    </ColorContext.Provider>
  );
};




export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};
