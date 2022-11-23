import React from 'react';
import { View ,
     Text,
      StyleSheet,
      Image,
      TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';
export default function Inicio() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.containerLogo}>
    <Image 
    
    source={require('../../assets/logoTech4Fight.png')}
    style={{width:'100%'}} 
    resizeMode="contain"
    />
    </View>
    <View style = {styles.containerForm}>
      <Text style={styles.title}>Bem vindo ao ToDo Tech4Fight</Text>
     
        <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('ToDo')}
        >
             <Text style={styles.buttonText}>Iniciar</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        
        
    },
    containerLogo:{
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
       flex: 1, 
       paddingStart: '5%',
       paddingEnd: '5%'
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 1,
        marginBottom: 20,
        textAlign: 'center',
        color: '#BE2444'  
    },
    button:{
        position: 'absolute',
        backgroundColor: '#BE2444',
        borderRadius: 50,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
    
})
