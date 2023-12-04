import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./your-profile-photo.jpg')} // Замініть шлях до своєї фотографії
        style={styles.profileImage}
      />
      <Text style={styles.name}>Ваше ім'я</Text> {/* Замініть на своє ім'я */}
      <Text style={styles.bio}>Інформація про вас</Text> {/* Додайте свою інформацію */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfileScreen;
