import React from 'react';
import { View, Text, FlatList } from 'react-native';

const FrequencyTable = ({ data }) => {
  // Перевіряємо, чи існує 'data' і є об'єктом перед перетворенням у масив
  const frequencyData = data && typeof data === 'object' ? Object.entries(data) : [];

  return (
    <View>
      <Text>Таблиця частот:</Text>
      <FlatList
        data={frequencyData}
        keyExtractor={(item) => item[0]}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16 }}>
            <Text>{item[0]}</Text>
            <Text>{item[1]}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default FrequencyTable;

