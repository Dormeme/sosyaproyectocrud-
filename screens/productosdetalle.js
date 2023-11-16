import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Alert, Text, TouchableOpacity} from 'react-native'


//import fire database 
import appFirebase from '../credencialesBD/credenciales'
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, setDoct} from 'firebase/firestore'
//import appFirebase from '../database/firebase';


const db = getFirestore(appFirebase)

export default function productosdetalle(props) {

    const [product, setProduct] = useState({})


    const getOneProduct = async(id)=>{
        try{
            const docRef = doc(db,'productos', id)
            const docSnap = await getDoc(docRef)
            setProduct(docSnap.data())    
        }catch{
            console.error(error)
        }
    }

    useEffect(()=>{
        getOneProduct(props.route.params.productoId)
    },[])

    const deleteProduct = async(id)=>{
        await deleteDoc(doc(db, 'productos',id))
        Alert.alert('Exito', 'documento eliminado con exito')
        props.navigation.navigate('List')
    }

    return(
        <View>
        <Text style={styles.titulo}>productosdetalle</Text>
        <Text style={styles.sub}>articulo: {product.articulo}</Text>
        <Text style={styles.sub}>fecha: {product.fecha}</Text>
        <Text style={styles.sub}>bodega: {product.bodega}</Text>

        <TouchableOpacity style={styles.BotonLista} onPress={()=>deleteProduct(props.route.params.productoId)}>
            <Text style={styles.TextoNombre}>Eliminar </Text>
        </TouchableOpacity>
            <StatusBar style='auto'/>
        </View>
    )
}

const styles = StyleSheet.create({
    titulo:{
        textAlign:'center',
        marginTop:10,
        marginBottom:10,
        fontSize:20
    },
    sub:{
        fontSize:16
    },
    TextoNombre:{
        fontSize:16,
        textAlign:'center',
        color:'white'
    },
    BotonLista:{
        backgroundColor:'red',
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        marginBottom:3,
        padding:5,
        marginTop:5
    }
});