import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    contenedorFicha:{
        backgroundColor: '#fce4ae',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#341257',
        borderRadius: 15,
    },
    contenedorDatosGenerales: {
        display: 'flex',
        flexDirection: 'column',
    },
    nombreEnFicha:{
        fontSize:24,
        color:'#332811',
        fontWeight: 'bold',
    },
    datosGeneralFicha: {
        fontSize:16,

    },
    fotoPersonajeEnFicha: {
        height: 100,
        width: 100,
        marginRight: 10,
    },
    contenedorScroll: {
        display: 'flex',
        flexDirection: 'column',
    },
    botonIrInicio: {
        backgroundColor: '#2a0c75',
        borderRadius: 15,
    },
    textoBotonIrInicio: {
        color: '#cab6fa',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ViewDetalle: {
        alignItems: 'center',
    },    
    fotoPokemonEnDetalle: {
        height: 300,
        width: 300,
    },
    contenedorGrisClaro: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        width: 300,
    },
    contenedorRow: {
        display: 'flex',
        flexDirection: 'row',
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -1,
      },
});

export default styles;