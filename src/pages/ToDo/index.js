
import React, {useState} from 'react';
import { StyleSheet, View, StyleView, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';


export default function ToDo() {

    const [tarefas, setTarefas] = useState(['app']); 
    const [text, setText] = useState("");
  //dia e hora
  var hoje = new Date();
  var horaData = hoje.getHours() + ':' + hoje.getMinutes() + ' ' + hoje.getDate() + '/' + (hoje.getMonth()+1) + '/' + hoje.getFullYear();





//adicionar tarefa
  const Adicionar = () => {
    if(text == ""){
        alert("Digite uma tarefa");
    }
    else{
    setTarefas([...tarefas, text])         
    setText(" ") }

  }


//editar tarefa
  const Editar = (index) => {
    setText(tarefas[index])
    tarefas.splice(index, 1)
    setTarefas([...tarefas])
  }

//marcar tarefa completa
const Completa = (index) => {
    setText(tarefas[index])
    tarefas.splice(index, 1)
    setTarefas([...tarefas])
  }

//excluir tarefa                                       
    const Excluir = (index) => {
    tarefas.splice(index, 1)                                     
    setTarefas([...tarefas])
    }




//limpar tarefas
    const Limpar = () => {
        setTarefas([])

    }
    return (
        <View style = {styles.Tarefa_Container}> 

            <View style={styles.Tarefa_Header}>
                <Text style={styles.Tarefa_Header_Text}>Lista de Tarefas</Text>
            </View>
            <View style={styles.Tarefa_Body}>
                <TextInput style={{backgroundColor:'ffffff', color:'white',height:55}} label={'Digite a descrição da tarefa:'} value={text} onChangeText={text => setText(text)}/>
                






                <View style={styles.Body}>
                    <Button style={{marginTop: 10, with:"48.5", color:'white', marginRight:5,flex:1,borderRadius:20}} mode="contained" onPress={() => setTarefas([...tarefas, text])}
                    mode='contained'
                    color={'#BE2444'}
                    onPress={Adicionar}
                    >
                        Adicionar
                    </Button>
                    <Button style={{marginTop: 10, with:"48.5", color:'white', marginLeft:5,flex:1,borderRadius:20}} mode="contained" onPress={() => setTarefas([...tarefas, text])}
                    mode='contained'
                    color={'#BE2444'}
                    onPress={Limpar}
                    >
                        Deletar todos
                    </Button>

                </View>

            </View>




            <ScrollView>
                {
                tarefas.map((data, index) => {
                 return <TouchableOpacity activeOpacity={.7} style={styles.Tarefa_Footer} key={index}>
                    <Text styel={styles.Text}><Text>Tarefa {index+1} - </Text></Text>
                    <Text style={styles.Text}>{data}</Text>
                    <Text style={styles.HoraData}>{horaData}</Text>
                
                <Button style={styles.Edit_Button} color={'#BE2444'} onPress={()=>Editar(index)}> |Editar |</Button>
                <Button style={styles.Delete_Button} color={'#BE2444'} onPress={()=>Excluir(index)}>Feita|</Button>
                 </TouchableOpacity>
                })

                }
            </ScrollView>
       
        </View>
    );
    }

    const styles = StyleSheet.create({
        Tarefa_Container: {
            flex: 1,
            backgroundColor: 'white',
        },

        //header
        Tarefa_Header: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
        },

        Tarefa_Header_Text: {
            fontWeight: 'bold',
            fontSize: 37,
            color: '#BE2444',
            textShadowColor: 'rgba(0, 0, 0, 0.55)',
            textShadowOffset: {width: -1, height: 1.2},
            textShadowRadius: 10,
        },



        //body
        Tarefa_Body: {
            flex: 8,
            padding: 10,
        },

        Body: {
            flexDirection: 'row',
            marginBottom: 20,
        },



//Rodapé
Tarefa_Footer: {
    flexDirection: 'row',
    backgroundColor: '#d3d3d3',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    margin:5,
},

Text: {
    width: '80%',
    paddingBottom: 5,
    textTransform: 'capitalize',
    
},

HoraData: {
    position: 'absolute',
    left: 10,
    bottom: 1,
    fontSize: 9,
},


Edit_Button: {
    position: 'absolute',
    right: 50,
},

Delete_Button: {
    position: 'absolute',
    right: 0,
},

    })
