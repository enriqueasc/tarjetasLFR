//rafce estructura de un formulario

import React, { useEffect, useState } from 'react'
import { Alert, Button, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

const Formulario = ({
    modalVisible, 
    setModalVisible, 
    personas, 
    setPersonas,  
    persona: personaObj,
    setPersona: setPersonaApp
}) => {

   //console.log("aqui ", setModalVisible);

   const [id, setId] = useState('');
   const [persona, setPersona] = useState('');
   const [tarjeta, setTarjeta] = useState('');
   const [email, setEmail] = useState('');
   const [cvc, setCvc] = useState('');
   const [sintomas, setSintomas] = useState('');
   const [expira, setExpira] = useState('');    

  const [fecha, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(true);

  useEffect(()=>{
    if(Object.keys(personaObj).length > 0){
      const {id, persona, tarjeta, cvc, expira, email, fecha, sintomas} = personaObj;
      setId(id);
      setPersona(persona);
      setTarjeta(tarjeta);
      setCvc(cvc);
      setExpira(expira)
      setEmail(email);
      setDate(fecha);
      setSintomas(sintomas);
    }
  
  }, [personaObj])

  const handleCita = ()=>{
    
    if([persona, tarjeta, email, cvc, fecha, sintomas].includes('')){
        
        Alert.alert(
            'Error', //titulo
            'Todos los campos son obligatorios', //mensaje
            [{text: 'Recordar después'},{text: 'cancelar'}, {text: 'ok'}] //arreglo de botones
        )

        return;
        
    }

    const nuevaPersona={

        persona,
        tarjeta,
        email,
        cvc,
        expira,
        fecha,
        sintomas
        
    }

    //si hay id editamos
    if(id){

        nuevaPersona.id = id;
        const personasEditadas =  personas.map( personaState =>
            personaState.id === id ? nuevaPersona : 
            personaState
        )

        setPersonas(personasEditadas);
        setPersonaApp({});
    //si no hay id agregamos
    }else{
        nuevaPersona.id = Date.now();
        setPersonas([...personas, nuevaPersona]);

    }
    setId('');
    setModalVisible(!modalVisible);
    setPersona('');
    setTarjeta('');
    setEmail('');
    setCvc('');
    setExpira('');
    setDate(new Date());
    setSintomas('');




  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    //setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };




  return (
    <Modal
        animationType='slide'
        visible={modalVisible}    
      >
        <SafeAreaView style={styles.contenido}>
            <ScrollView>
             
                <Text style={styles.titulo}>{personaObj.id ? 'Editar' : 'Nueva'}{' '}
                    <Text style={styles.tituloBold}> Tarjeta</Text>
                </Text>

                <Pressable 
                    style={styles.btnCancelar}
                    onPress={()=> {
                        setModalVisible(!modalVisible)
                        setPersonaApp({})
                        setId('')
                        setModalVisible(!modalVisible)
                        setPersona('')
                        setTarjeta('')
                        setEmail('')
                        setCvc('')
                        setExpira('')
                        setDate(new Date())
                        setSintomas('')
                    }}
                
                >
                    <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
                </Pressable>

                <View style = {styles.campo}>
                    <Text style={styles.label}>Nombre </Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        placeholder='Nombre'
                        placeholderTextColor={'#666'}
                        value={persona}
                        onChangeText={setPersona}
                    />
                </View>
                <View style = {styles.campo}>
                    <Text style={styles.label}>Tarjeta</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='default'
                        placeholder='Tarjeta'
                        placeholderTextColor={'#666'}
                        value={tarjeta}
                        onChangeText={setTarjeta}
                    />
                </View>
                <View style = {styles.campo}>
                    <Text style={styles.label}>CVC</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        placeholder='cvc'
                        placeholderTextColor={'#666'}
                        value={cvc}
                        onChangeText={setCvc}
                        maxLength={20}
                    />
                </View>
                <View style = {styles.campo}>
                    <Text style={styles.label}>Fecha expiración</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        placeholder='expira'
                        placeholderTextColor={'#666'}
                        value={expira}
                        onChangeText={setExpira}
                        maxLength={10}
                    />
                </View>
                <View style = {styles.campo}>
                    <Text style={styles.label}>email</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType='email-address'
                        placeholder='Email'
                        placeholderTextColor={'#666'}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                

                <View style = {styles.campo}>
                    <Text style={styles.label}>Fecha</Text>

                    <View style={styles.datePiker}>
                        {show && (
                            <DateTimePicker
                            display="spinner"
                            value={fecha}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                            />
                        )}

                    </View>

                    


                    
                </View>



                <View style = {styles.campo}>
                    <Text style={styles.label}>Adicionales</Text>
                    <TextInput
                        style={[styles.input, styles.sintomasInput ]}
                        
                        placeholder='Adicionales'
                        placeholderTextColor={'#666'}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View>
                <Pressable 
                    style={styles.btnNuevaCita}
                    onPress={handleCita}
                
                >
                    <Text style={styles.btnNuevaCitaTexto}>{personaObj.id ? 'Guardar cambios': ' Agregar tarjeta'}</Text>
                </Pressable>

            </ScrollView>    
        </SafeAreaView>


      </Modal>
  )
}

const styles = StyleSheet.create({
    contenido:{
        backgroundColor: '#008cdd',
        flex: 1
    },
    titulo:{
        fontSize: 38,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#FFF'


    },
    tituloBold:{
        fontWeight: '900',

    },
    datePiker:{
        backgroundColor: '#FFF',
        borderRadius: 10,


    },
    btnCancelar:{
        marginTop: 20,
        backgroundColor:'#5827A4',
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',

    },
    btnCancelarTexto:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
        textTransform: 'uppercase'

    },
    btnNuevaCita:{
        marginVertical: 50,
        backgroundColor:'#F59E0B',
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10,


    },
    btnNuevaCitaTexto:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 20,
        textTransform: 'uppercase'

    },
    campo:{
        marginTop:10,
        marginHorizontal:30,
        
    },
    label:{
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize:20,
        fontWeight: '700'
    },
    input:{
        backgroundColor: '#FFF',
        padding:15,
        borderRadius: 10,
        
    }, 
    sintomasInput:{
        height: 200,
        
    }
        
})

export default Formulario