import React, { useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';

// Функція для побудови дерева Хаффмана
function buildHuffmanTree(frequency) {
  // Створюємо початковий масив вузлів (листків)
  const nodes = Object.keys(frequency).map((char) => ({
    char,
    frequency: frequency[char],
    left: null,
    right: null,
  }));

  // Поки в масиві є більше одного вузла, об'єднуємо їх у новий вузол
  while (nodes.length > 1) {
    nodes.sort((a, b) => a.frequency - b.frequency);
    const left = nodes.shift();
    const right = nodes.shift();
    const merged = {
      char: '',
      frequency: left.frequency + right.frequency,
      left,
      right,
    };
    nodes.push(merged);
  }

  return nodes[0]; // Повертаємо кореневий вузол дерева
}

// Функція для побудови таблиці кодів Хаффмана
function buildHuffmanCodes(tree, currentCode = '', codes = {}) {
  if (tree) {
    if (!tree.left && !tree.right) {
      codes[tree.char] = currentCode;
    }
    buildHuffmanCodes(tree.left, currentCode + '0', codes);
    buildHuffmanCodes(tree.right, currentCode + '1', codes);
  }
  return codes;
}

const HuffmanCoding = ({
  onInputTextChange,
  onEncodedTextChange,
  onFrequencyTableChange,
  onCodesTableChange
}) => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [frequencyTable, setFrequencyTable] = useState({});
  const [codesTable, setCodesTable] = useState({});

  const encodeText = () => {
    const frequency = {};
    for (let char of inputText) {
      frequency[char] = (frequency[char] || 0) + 1;
    }

    const huffmanTree = buildHuffmanTree(frequency);
    const huffmanCodes = buildHuffmanCodes(huffmanTree);

    let encoded = '';
    for (let char of inputText) {
      encoded += huffmanCodes[char];
    }

    setEncodedText(encoded);
    setFrequencyTable(frequency);
    setCodesTable(huffmanCodes);

    // Оновлення станів у батьківському компоненті через callback-функції
    onInputTextChange(inputText);
    onEncodedTextChange(encoded);
    onFrequencyTableChange(frequency);
    onCodesTableChange(huffmanCodes);

    Keyboard.dismiss();
  };

  const saveToFile = async () => {
    const fileName = 'huffman_codes.txt';
    const fileUri = FileSystem.documentDirectory + fileName;
    const content = `Encoded Text: ${encodedText}\nCodes Table: ${JSON.stringify(codesTable, null, 2)}`;
  
    try {
      await FileSystem.writeAsStringAsync(fileUri, content);
      alert(`Data saved to ${fileUri}`);
    } catch (error) {
      alert('Failed to save data: ' + error.message);
    }
  };

  return (
    <View>
      <Text>Введіть текст для кодування:</Text>
      <TextInput
        multiline
        placeholder="Текст"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 8 }}
      />
      <Button title="Кодувати текст" onPress={encodeText} />
      <Text>Закодований текст:</Text>
      <Text>{encodedText}</Text>
      <Text>Таблиця кодів Хаффмана:</Text>
      <Text>{JSON.stringify(codesTable, null, 2)}</Text>
      <Button title="Save to File" onPress={saveToFile} />
    </View>
  );
};

export default HuffmanCoding;
