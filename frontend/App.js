import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import CategoriasScreen from './screens/CategoriasScreen';
import Objetos from './screens/Objetos';
import Reportes from './screens/Reportes';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Categorias" component={CategoriasScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Objetos" component={Objetos} 
        options={{ headerShown: false }}
        />
        <Stack.Screen name="Reportes" component={Reportes} 
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;