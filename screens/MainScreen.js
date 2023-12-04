import React, { useState } from 'react';
import { View } from 'react-native';
import HuffmanCoding from './../components/HuffmanCoding';
import FrequencyTable from './../components/FrequencyTable';
import CodesTable from './../components/CodesTable';
import FrequencyHistogram from './../components/FrequencyHistogram';
import HuffmanDecoding from './../components/HuffmanDecoding'; 

const MainScreen = () => {
  const [inputText, setInputText] = useState('');
  const [encodedText, setEncodedText] = useState('');
  const [frequencyTable, setFrequencyTable] = useState({});
  const [codesTable, setCodesTable] = useState({});

  return (
    <View>
      <HuffmanCoding
        onInputTextChange={setInputText}
        onEncodedTextChange={setEncodedText}
        onFrequencyTableChange={setFrequencyTable}
        onCodesTableChange={setCodesTable}
      />
      <FrequencyTable data={frequencyTable} />
      <CodesTable data={codesTable} />
      <HuffmanDecoding 
        codes={codesTable}
        encodedText={encodedText} />
      <FrequencyHistogram data={frequencyTable} />
    </View>
  );
};

export default MainScreen;
