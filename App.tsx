import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Inicio from './views/Inicio';
import Detalle from './views/Detalle';
import PantallaPrincipal from './views/PantallaPrincipal';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Pantalla_Principal'>
        <Stack.Screen name="Pantalla_Principal" component={PantallaPrincipal}/>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Detalle" component={Detalle} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
