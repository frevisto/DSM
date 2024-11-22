import React from 'react';
import styled from 'styled-components';
import { ColorProvider, useColor } from './contexts/ColorContext';
import ColorInput from './components/Input';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;


/// aqui
const ColorBox = styled.div<{ color: string }>`
  font-family: Arial, Helvetica, sans-serif;
  color: aliceblue;
  width: 300px;
  height: 200px;
  display: flex;
  border-radius: 12px;
  height: calc(100vh-30rem);
  width: fit-content;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  transition: 0.5s ease-in-out;
  background-color: ${({ color }) => color};
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;
`;

const App: React.FC = () => {
  const { r, g, b } = useColor();
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <AppContainer>
      <ColorBox color={color}>
      <Controls>
        <ColorInput label="R:" colorKey="r" />
        <ColorInput label="G:" colorKey="g" />
        <ColorInput label="B:" colorKey="b" />
      </Controls>
      </ColorBox>
    </AppContainer>
  );
};

const AppWrapper: React.FC = () => (
  <ColorProvider>
    <App />
  </ColorProvider>
);

export default AppWrapper;
