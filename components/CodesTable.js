import React from 'react';
import { View, Text, FlatList } from 'react-native';

const CodesTable = ({ data }) => {
  // Переконуємося, що 'data' існує і є об'єктом
  const codesData = data && typeof data === 'object' ? Object.entries(data) : [];

  return (
    <View>
      <Text>Таблиця кодів Хаффмана:</Text>
      <FlatList
        data={codesData}
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

export default CodesTable;