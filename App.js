//relacionado con  react native
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
//dependencias

// los props se pasan del padre al hijo y no alreves

//archivos internos
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import ModalVer from './src/components/ModalVer';


export default function App() {



const [modalVisible, setModalVisible] = useState(false);
const [personas, setPersonas] = useState([]);
const [persona , setPersona] = useState({});
const [modalVerState, setModalVer] = useState(false);

const personaEditar = id => {
  const personaEditar = personas.filter(persona => persona.id === id);

  setPersona(personaEditar[0]);

}

const personaEliminar = id =>{

  Alert.alert(
    '¿Estas seguro que deseas eliminar este registro?',
    'Una vez eliminado no se podra recuperar',
    [
      {text: 'Cancelar'},
      {text: 'Si, Eliminar', onPress:()=>{
        console.log('eliminando', id);

        const tarjetasSobrantes = personas.filter( personaState => personaState.id != id)

        setPersonas(tarjetasSobrantes);

      }}
    ]
  );

  console.log(id);
}

console.log(modalVisible);



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Pagos con {' '}

      <Text style={styles.tituloBold}>Stripe</Text>


      </Text>

      <Button 
        title="Click me"
        onPress={()=>{console.log('presionaron el boton')}}
      >
      </Button>

      <Pressable
        style={styles.btn}
        onPress={() => setModalVisible(!modalVisible) }
      >
        <Text
          style = {styles.btnText}
        >Agregar</Text>

      </Pressable>

      { personas.length === 0 ?
        <Text style={styles.noPersonas}>No hay registros</Text> : 
        <FlatList
          style={styles.listado}
          data={personas}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return(
              <Pressable
                onPress={()=> {
                  setModalVer(true)
                  item={item}
                }}
                
              >
                <Paciente 
                  item={item}
                  setModalVisible={setModalVisible}
                  personaEditar={personaEditar}
                  personaEliminar={personaEliminar}
               
              />
              </Pressable>
              
            )

          }}
        
        />
      }

      <Formulario 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        personas={personas}
        setPersonas={setPersonas}
        persona={persona}
        setPersona={setPersona}
        
        
      />
      <Modal
        animationType='fade'
        visible={modalVerState}
      >
        <ModalVer
          
          setModalVer={setModalVer}
        >


        </ModalVer>


      </Modal>

      
      




    </SafeAreaView>
    
  );
}



const mensajeFuncion = ()=>{
  console.log('presionaron el boton se cargo la funcion')
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F3F4F6',
    flex: 1,

  },
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold:{
    fontWeight: '900',
    color: '#6D28D9',
  },
  btn:{
    backgroundColor: '#6D28D9',
    padding : 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,

  },
  btnText:{
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'uppercase',
  }, 
  noPersonas:{
    marginTop: 40,
    textAlign: 'center',
    fontSize:24,
    fontWeight: '600',
    
  },
  
  listado:{
    marginTop: 50,
    marginHorizontal:30,
    
  }
  

})

