import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const ReminderInput = (props) => {
    const [lembrete, setLembrete] = useState('');

    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    };

    const addReminder = () => {
        // Verifica caracteres válidos
        if (lembrete.replace(/\s+/g, '').length) {
            props.onAddReminder(lembrete);
        }
    };

    return (
        <View style={styles.reminderView}>
            <TextInput
                placeholder="Lembrar..."
                style={styles.reminderTextInput}
                onChangeText={capturarLembrete}
                value={lembrete}
            />
            <Button title="Adicionar" onPress={addReminder}/>
        </View>
    )
}

const styles = StyleSheet.create({
    reminderView: {
        marginBottom: 8
    },
    reminderTextInput: {
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 8,
        marginBottom: 8,
        textAlign: 'center'
    }
})

export default ReminderInput;