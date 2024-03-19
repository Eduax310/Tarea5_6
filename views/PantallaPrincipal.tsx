import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

const PantallaPrincipal = ({ navigation }: { navigation: any }) => {
  const handlePress = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../Imagenes/Fondo.jpg')}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image source={require('../Imagenes/Pokeball.png')} style={styles.image} />
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Comenzar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default PantallaPrincipal;
