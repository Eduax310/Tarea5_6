import React from "react";
import People from "../Types/Pokemon";
import { View, Text, Image } from "react-native";
import styles from "../styles";

type FichaListaPersonajeProps = {
  pokemon: People;
};

const FichaListaPersonaje = ({ pokemon }: FichaListaPersonajeProps) => {
  return (
    <View style={styles.contenedorFicha}>
      <Image
        style={styles.fotoPersonajeEnFicha}
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${pokemon.id}.png`
        }}
      />
      <View style={styles.contenedorDatosGenerales}>
        <Text style={styles.nombreEnFicha}>{pokemon.name}</Text>
        <Text style={styles.datosGeneralFicha}>Código: {pokemon.id}</Text>
        <Text style={styles.datosGeneralFicha}>Altura: {pokemon.height} cm</Text>
        <Text style={styles.datosGeneralFicha}>Peso: {pokemon.weight} g</Text>
      </View>
    </View>
  );
};

export default FichaListaPersonaje;
