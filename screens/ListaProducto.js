//import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import productoscreados from './productoscreados';

//import fire database 
import appFirebase from '../credencialesBD/credenciales';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, setDoct } from 'firebase/firestore'
import { useEffect, useState } from 'react';
//import appFirebase from '../database/firebase';

//import { Link, useNavigation } from '@react-navigation/native';
//import { List } from 'reactstrap';

const db = getFirestore(appFirebase)

export default function ListaProducto(props) {

  const [lista, setLista] = useState([])

  useEffect(()=>{
    const getLista = async()=>{
     try{
       const QuerySnapshot = await getDocs(collection(db, 'productos'))
       const docs = []
       QuerySnapshot.forEach((doc)=>{
         const {articulo, bodega, fecha} = doc.data()
         docs.push({
           id:doc.id, 
           articulo,     
           bodega,
           fecha
       })
       })
       setLista(docs);
     } catch (error) {
       console.log(error);
       Alert.alert('Error','¡No se puede leer el documento!')
     }
    } 
    getLista()
 },[])

  return (
    <ScrollView>
        <TouchableOpacity style={styles.Boton} onPress={()=>props.navigation.navigate('Crear')}>
        <Text style={styles.TextoBoton}>Agregar Productos</Text> 
        </TouchableOpacity>

        <View>
          <Text style={styles.TextoTitulo}>Lista de los Productos</Text>
        </View>

        <View>
            {
              lista.map((list)=>(
                <TouchableOpacity key={list.id} style={styles.BotonLista}
                onPress={()=>props.navigation.navigate('Detalle', {productoId:list.id})}>
                  <Text style={styles.TextoNombre}>{list.articulo}</Text>
                </TouchableOpacity>
              ))
            } 


        </View>
        



    </ScrollView>

  );
}

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Boton:{
    backgroundColor:'cyan',
    height: 35,
    borderColor: 'black',
    borderWidth:1
  },
  TextoBoton:{
    fontSize:18,
    textAlign:'center'
  },
  TextoTitulo:{
    textAlign:'center',
    marginTop:20,
    marginBottom:10,
    fontSize:16
  },
  TextoNombre:{
    fontSize:16,
    backgroundColor: '#00ffff'
  },
  BotonLista:{
    backgroundColor:'#000000',
    borderBottomWidth:1,
    borderBottomColor:'#cccccc',
    marginBottom:3,
    padding:5  
  },
});