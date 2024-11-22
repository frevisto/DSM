import React, { useState } from 'react';
import styled from 'styled-components';
import { useColor } from '../contexts/ColorContext';
import { fetchNextRGB, fetchPreviousRGB } from '../services/BDLogic';



interface ColorInputProps {
  label: string;
  colorKey: 'r' | 'g' | 'b';
}






const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const StyledInput = styled.input`
  margin-top: 5px;
`;









const ColorInput: React.FC<ColorInputProps> = ({ label, colorKey }) => {
  const { r, g, b, setR, setG, setB, saveRGB } = useColor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(e.target.value);
    if (value > 255) value = 255;
    if (value < 0) value = 0;
    if (colorKey === 'r') setR(value);
    if (colorKey === 'g') setG(value);
    if (colorKey === 'b') setB(value);
  };


  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      saveRGB();  // Salva os valores atuais
    }
  }
    return (
      <InputContainer>
        {label}
        <StyledInput
          type="number"
          min="0"
          max="255"
          value={colorKey === 'r' ? r : colorKey === 'g' ? g : b}
          onChange={handleChange} onKeyDown={handleKeyDown}
        />
      </InputContainer>
    );
  };


  export default ColorInput;