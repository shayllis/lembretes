import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ReminderItem from "./components/Reminderitem";
import ReminderInput from "./components/ReminderInput";

export default function App() {
  
  const [lembretes, setLembretes] = useState([]);
  const [contadorLembretes, setContadorLembretes] = useState(0);

  // const capturaLembrete = (lembrete) => {
  //   setLembrete(lembrete);
  
  // }
  // const [lembrete, setLembrete] = useState('');

  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes => {
      setContadorLembretes(contadorLembretes + 1);

      return [...lembretes, {key: contadorLembretes.toString(), value: lembrete}];
    });
  }

  const removeItem = (key) => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => {
        return lembrete.key !== key;
      })
    });
  }

  return (
    <View style={styles.telaPrincipal}>
      <ReminderInput onAddReminder={adicionarLembrete}/>

      <View>
        <FlatList
          data={lembretes}
          renderItem={(lembrete) => (
            <ReminderItem
              lembrete={lembrete.item.value}
              chave={lembrete.item.key}
              onDelete={removeItem}
            />
          )
        } />
        {/* lembretes */}
        {/* <ScrollView>
          {lembretes.map(lembrete => (
            <View style={styles.itemListaView}>
              <Text key={lembrete}>{lembrete}</Text>
            </View>
          ))
          }
        </ScrollView> */}
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipal: {
    backgroundColor: '#fff',
    padding: 50
  },
  lembreteTxt: {
    borderBottomColor: '#000', borderBottomWidth: 2, marginBottom: 4, textAlign: 'center'
  },
  itemListaView: {
    padding: 12,
    backgroundColor: '#ddd',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
  entradaView: {
    marginBottom: 8
  }
});
