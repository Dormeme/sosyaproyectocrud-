import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Alert } from 'react-native'
//imporrtar fecha para escojer y guardar
//import  DateTimePicker from "@react-native-community/datetimepicker"

//import fire database 
import appFirebase from '../credencialesBD/credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, setDoct } from 'firebase/firestore'
//import appFirebase from '../database/firebase';


const db = getFirestore(appFirebase)

export default function productoscreados(props) {

  const initialState = {
      articulo:'', 
      fecha:'',    
      bodega:''
    }
  
  const [state, setState] = useState(initialState)

  const handleChangeText = (value, name)=>{
    setState({...state, [name]:value})
  }

  const saveProduct = async()=> {
    try{
      await addDoc(collection(db, 'productos'),{
        ...state
      })

      Alert.alert('Alerta', 'guardado con exito') 
      props.navigation.navigate('List')
    }
    catch{
      console.log(error);
            Alert.alert('Error', '¡no se a conectado la base de datos o no se guardo la informacion!')
    }
  }
    return (
      <ScrollView style={styles.container}>
      <View style={styles.imputGroup}> 
        <TextInput placeholder='ingresa articulo'
        onChangeText={(value) => handleChangeText(value, 'articulo')}
        value={state.articulo}/>
      </View>
      <View style={styles.imputGroup}> 
        <TextInput placeholder='ingrese fecha'
        onChangeText={(value) => handleChangeText(value, 'fecha')}
        value={state.fecha}/>
      </View>
      <View style={styles.imputGroup}> 
        <TextInput placeholder='seleccione bodega'
        onChangeText={(value) => handleChangeText(value, 'bodega')}
        value={state.bodega}/>
      </View>
      <View > 
        <Button title="guardar datos" onPress={() => saveProduct()}/>
      </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 35
  },

  imputGroup: {
    flex: 1,
    padding:0,
    marginBottom: 15,
    borderBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  }
})