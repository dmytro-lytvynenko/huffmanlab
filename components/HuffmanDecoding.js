import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';

const HuffmanDecoding = ({ codes, encodedText }) => {
  const [decodedText, setDecodedText] = useState('');

  // Нова функція для виклику зовнішньої функції decodeHuffmanText
  const handleDecodePress = () => {
    console.log('Закодований текст:', encodedText); // Логування закодованого тексту
    console.log('Таблиця кодів:', codes); // Логування таблиці кодів

    const decoded = decodeHuffmanText(encodedText, codes);
    console.log('Розкодований текст:', decoded); // Логування розкодованого тексту

    setDecodedText(decoded);
    Keyboard.dismiss();
  };

  return (
    <View>
      <Text>Закодований текст:</Text>
      <TextInput
        multiline
        placeholder="Закодований текст"
        value={encodedText}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
      />
      <Button title="Декодувати" onPress={handleDecodePress} />
      <Text>Розкодований текст:</Text>
      <Text>{decodedText}</Text>
    </View>
  );
};

function decodeHuffmanText(encodedText, codes) {
  let decodedText = '';
  let currentCode = '';

  console.log('Початок декодування'); // Перевірка, чи функція викликається

  for (let bit of encodedText) {
    currentCode += bit;
    console.log('Поточний код:', currentCode); // Логування поточного коду

    for (let char in codes) {
      if (codes[char] === currentCode) {
        decodedText += char;
        console.log('Знайдено символ:', char); // Логування знайденого символу
        currentCode = '';
        break;
      }
    }
  }

  console.log('Кінець декодування', decodedText); // Логування результату
  return decodedText;
}

export default HuffmanDecoding;