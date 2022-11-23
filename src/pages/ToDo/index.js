
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import ICON from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const COLORS = { primary: '#BE2444', secondary: '#F2F2F2', white: '#fff' };


const ToDo = () => {
    const [textInput, setTextInput] = React.useState('');
    const [tarefas, setTarefas] = React.useState([]);
   React.useEffect(()=>{getTarefasFromUserDevice();},[]);
   React.useEffect(()=>{saveTarefaToUserDevice(tarefas);},[tarefas]);

   const adicionarTarefa = () => { 
    if (textInput == '') {
        Alert.alert('Erro', 'Por favor, digite uma tarefa');

    } else {

        const newTarefa = {
            id: Math.random(),
            task: textInput,
            completed: false,
        };

        setTarefas([...tarefas, newTarefa]);
        setTextInput('');
    }   
};

const saveTarefaToUserDevice = async tarefas =>{
    try{
        const stringfyTarefas = JSON.stringify(tarefas);
        await AsyncStorage.setItem('tarefas', stringfyTarefas);
    } catch (error){
        console.log(error);
    }
};

const getTarefasFromUserDevice = async () => {
    try{
        const Tarefas = await AsyncStorage.getItem('tarefas');
        if (Tarefas != null){
            setTarefas(JSON.parse(Tarefas));
        }
    } catch (error){
        console.log(error);
    }
};

const marcarTarefaCompleta = tarefaId => {
    
    const newTarefasItem = tarefas.map(item => {
        if (item.id == tarefaId) {
            return { ...item, completed: true }
        }
        return item;
    });
    setTarefas(newTarefasItem);

};

const deleteTarefa = tarefaId => {
    const newTarefasItem = tarefas.filter(item => item.id != tarefaId);
    setTarefas(newTarefasItem);
    
};

const limparTodasTarefas = () => {
    Alert.alert('Deseja', 'Apagar todas as tarefas?', [
        {
            text: 'Sim',
            onPress: () => setTarefas([]),
        },
        {
            text: 'Não',
        },

     ]);
};


const ListItem = ({ tarefa }) => {
                                    return (
                                        <View style={styles.listItem}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={{
                                                    fontWeight: 'none', fontSize: 20, color: COLORS.white,
                                                    textDecorationLine: tarefa?.completed ? 'line-through' : 'none',
                                                }}>
                                                    {tarefa?.task}
                                                </Text>
                                            </View>

                                            {!tarefa?.completed && (
                                                    <TouchableOpacity onPress={()=> marcarTarefaCompleta(tarefa.id)}>
                                                        <View style={[styles.actionICON,{backgroundColor:'white'}]}>
                                                        <ICON name="done" size={20} color="white"/>
                                                        </View>
                                                    </TouchableOpacity>

                                                )}

                                                    <TouchableOpacity onPress={()=> deleteTarefa(tarefa.id)}>
                                                        <View style={[styles.actionICON]}>
                                                        <ICON name="delete" size={20} color="white"/>
                                                        </View>
                                                    </TouchableOpacity>
                                        </View>
                                    );
                              }; 







return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={styles.header}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: COLORS.primary }}>
                Tarefas Tech4Fight App
            </Text>
            <ICON name="delete" size={30} color={COLORS.primary} onPress={limparTodasTarefas}/>
        </View>

        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
            data={tarefas}
            renderItem={({ item }) => <ListItem tarefa={item} />}
        />
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Incluir Tarefa"
                    value={textInput}
                    onChangeText={text => setTextInput(text)}
                />
            </View>


            <TouchableOpacity onPress={adicionarTarefa}>
                <View style={styles.ICONContainer}>
                    <ICON name="add" size={50} color="white"/>
                </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);
};
const styles = StyleSheet.create({
    actionICON: {
        height: 25,
        width: 25,
        backgroundColor: COLORS.white,
        backgroundColor: '#BE2444',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 5,


    },
    listItem: {
        padding: 20,
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
        backgroundColor: '#BE2444',

    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    footer: {
        padding: 20,
        bottom: 0,
        position: 'absolute',
        backgroundColor: COLORS.white,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,

    },
    inputContainer: {
        backgroundColor: COLORS.white,
        elevation: 20,
        flex: 1,
        height: 50,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    ICONContainer: {
        height: 50,
        width: 50,
        elevation: 40,
        height: 50,
        borderRadius: 30,
        backgroundColor: COLORS.primary,
        alignItems: 'center'


    },
});

export default ToDo;