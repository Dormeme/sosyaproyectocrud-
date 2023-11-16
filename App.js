import { StatusBar } from 'expo-status-bar';
import   React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

const Stack= createStackNavigator()

import productoscreados from './screens/productoscreados'
import productosdetalle from './screens/productosdetalle'
import ListaProducto from './screens/ListaProducto';

function MyStack() {
 return (
    <Stack.Navigator>
      <Stack.Screen name='List' component={ListaProducto} />
      <Stack.Screen name='Crear' component={productoscreados} />
      <Stack.Screen name='Detalle' component={productosdetalle} />
    </Stack.Navigator>
 )
}

export default function App() {
 return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
