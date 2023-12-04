import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const FrequencyHistogram = ({ data }) => {
  // Перевіряємо, чи 'data' існує і є об'єктом, та що всі його значення є числами
  const chartData = data && typeof data === 'object' ? {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data).map(value => typeof value === 'number' ? value : 0),
      },
    ],
  } : {
    labels: [],
    datasets: [
      {
        data: [],
      },
    ],
  };

  return (
    <View>
      <Text style={styles.title}>Гістограма частот:</Text>
      <BarChart
        data={chartData}
        width={300}
        height={200}
        yAxisLabel=""
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={styles.chart}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  chart: {
    marginVertical: 16,
  },
});

export default FrequencyHistogram;