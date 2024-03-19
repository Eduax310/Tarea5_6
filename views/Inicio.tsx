import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Pressable, image, Image } from "react-native";
import axios from "axios";
import FichaListaPersonaje from "../components/FichaListaPersonaje";
import styles from "../styles";

export const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
const Inicio = ({ navigation }: { navigation: any }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [cargando, setCargando] = useState(false);
  const refScroll = useRef(null);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  useEffect(()=>{
    setCargando(false);
  }, [pokemonData]);

  const fetchPokemonData = async () => {
    setCargando(true);
    try {
      const response = await axios.get(nextPageUrl);
      const { results, next } = response.data;
      const pokemonDetails = await Promise.all(results.map(async (pokemon) => {
        const res = await axios.get(pokemon.url);
        return res.data;
      }));
      setPokemonData(prevData => [...prevData, ...pokemonDetails]);
      setNextPageUrl(next);
    } catch (error) {
      console.error("Error fetching Pokemon data:", error);
    }
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const handleScroll = ({ nativeEvent }) => {
    if (isCloseToBottom(nativeEvent)) {
        if(!cargando){
            fetchPokemonData();
        }
    }
  };

  const handlePressIrInicio = () => {
    refScroll.current.scrollTo({x: 0, y: 0, animated: true});
  };

  const handlePressPokemon = (codigo:number)=>{
    navigation.navigate('Detalle', {codigo: codigo});
  }

  return (
    <SafeAreaView style={styles.contenedorScroll}>
      <Image
        source={require('../Imagenes/Fondo.jpg')}
        style={styles.backgroundImage}
      />
      <ScrollView style={{height: '97%'}} onScroll={handleScroll} ref={refScroll}>
        {pokemonData.map((pokemon, index) => (
          <Pressable key={`pokemon-${index + 1}`} onPress={()=>handlePressPokemon(index+1)}>
            <FichaListaPersonaje codigo={index + 1} pokemon={pokemon} />
          </Pressable>
        ))}
        {cargando && <ActivityIndicator size={'large'} />}
      </ScrollView>
      <Pressable onPress={handlePressIrInicio}>
        <View style={styles.botonIrInicio}>
          <Text style={styles.textoBotonIrInicio}>Regresar al Inicio</Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Inicio;
