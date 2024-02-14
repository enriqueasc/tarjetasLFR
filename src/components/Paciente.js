import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function Paciente({
  item,
  setModalVisible, 
  personaEditar,
  personaEliminar
} ) {

    const {id, persona, fecha, cvc, tarjeta}= item;

    const formatearFecha = fecha =>{
      
      const nuevaFecha = new Date(fecha);

      const opciones ={
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
       return nuevaFecha.toLocaleDateString('es-ES', opciones);
    }



  return (
    <View style ={styles.contenedor}>
      <Text style = {styles.label}>{persona} </Text>
      <Text style= {styles.fecha}>{formatearFecha(fecha)} </Text>
      <Text style={ styles.texto}>{tarjeta} </Text>
      <Text style={ styles.cvc}>{cvc} </Text>

      <View style = {styles.contenedorBotones}>
        
        <Pressable 
          style={[styles.btn, styles.btnEditar]}
          onPress={ () => {
            setModalVisible(true)
            personaEditar(id)
          }
        }  
        >
          <Text style={styles.btnTexto} >Editar</Text>
        </Pressable>

        <Pressable 
          style={[styles.btn, styles.btnEliminar]}
          onPress={ () => {
              personaEliminar(id)
            }
          }
        >
          <Text style = {styles.btnTexto}>Eliminar</Text>
        </Pressable>
    </View>
     </View>
  );
}


const styles = StyleSheet.create({
  contenedor:{
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderBottomColor: '#94a388',
    borderBottomWidth: 2,
    marginBottom: 10,

  },
  label:{
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    
  },
  texto:{
    color: '#6D28D9',
    fontSize: 24,
    fontWeight: '700',
    

  },
  fecha:{
    color: '#374151',
    marginBottom: 10,

  },
  contenedorBotones:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn:{
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 3,
  },
  btnEditar:{
    backgroundColor: '#F59E0B',
  },
  btnEliminar:{
    backgroundColor: '#EF4444',
  },
  btnTexto:{
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 12,
    color: '#fff',
  }
})
