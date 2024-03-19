import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, Image, StyleSheet } from "react-native";
import axios from "axios";
import Pokemon from "../Types/Pokemon";
import styles from "../styles";
import { urlBase } from "./Inicio";

const Detalle = ({ route }: { route: any }) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [codigo, setCodigo] = useState<number>(0);

    const cargarPokemon = async () => {
        const codigoParam = route.params.codigo;
        setCodigo(codigoParam);
        const res = await axios.get(`${urlBase}/${codigoParam}`);
        if (res.data) {
            setPokemon(res.data);
        }
    }

    useEffect(() => {
        cargarPokemon();
    }, []);

    return (
        <SafeAreaView>
            <Image
              source={require('../Imagenes/Fondo.jpg')}
              style={styless.Image}
            />
            <View style={styles.ViewDetalle}>
                <Image
                    style={styles.fotoPokemonEnDetalle}
                    source={{
                        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${codigo}.png`
                    }}
                />
                <View style={styles.contenedorGrisClaro}>
                    <Text>ID: {pokemon?.id}</Text>
                    <Text>Name: {pokemon?.name}</Text>
                    <Text>Height: {pokemon?.height}</Text>
                    <Text>Weight: {pokemon?.weight}</Text>
                </View>
                <Text></Text>
                <View style={styles.contenedorGrisClaro}>
                    <Text>Types:</Text>
                    <View style={styles.contenedorRow}>
                        {pokemon?.types.map((type, index) => (
                        <Text key={index} style={[styles.datosGeneralFicha, { marginRight: 8 }]}>
                        {type.type.name}
                        </Text>
                        ))}
                    </View>
                </View>
                <Text></Text>
                <View style={styles.contenedorGrisClaro}>
                    <Text>Abilities:</Text>
                    <View style={styles.contenedorRow}>
                        {pokemon?.abilities.map((ability, index) => (
                            <Text key={index} style={[styles.datosGeneralFicha, { marginRight: 8 }]}>
                            {ability.ability.name}</Text>
                        ))}
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    );
}

const styless = StyleSheet.create({
    Image: {
      position: 'absolute',
      width: '100%',
      height: '149%',
      zIndex: -1,
    },
  });

export default Detalle;
