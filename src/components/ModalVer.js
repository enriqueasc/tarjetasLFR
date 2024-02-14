import { View, Text, Pressable, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function ModalVer({
    setModalVer, 
    item
}) {

    console.log("item ", item);
    return;

const{persona, tarjeta, email, cvc, expira, fecha, sintomas}=item;


  return (
    <SafeAreaView>
        <Pressable style={styles.btnCancelar}
            onPress={()=> setModalVer(false)}
        >
            <Text
                style={styles.btnCancelarTexto}
            >
                X cancelar</Text>
        </Pressable>  
        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>Nombre: </Text>
        {persona}
        </Text>

        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>Tarjeta: </Text>
        {persona}
        </Text>

        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>Email: </Text>
        {persona}
        </Text>

        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>CVC: </Text>
        {persona}
        </Text>

        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>Expira: </Text>
        {persona}
        </Text>

        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>Fecha: </Text>
        {persona}
        </Text>

        <Text
            style={styles.informacion}
        >
            <Text style={styles.titulosLineas}>Sintomas: </Text>
        {persona}
        </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    btnCancelar:{
        marginTop:30,
        backgroundColor: '#5827A4',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
    },
    btnCancelarTexto:{
        color: "#fff",
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase',
    },
    informacion:{
        marginTop: 20,
        marginHorizontal: 30,
        fontSize: 20
    },
    titulosLineas:{
        fontWeight: '900',
        
    }


})