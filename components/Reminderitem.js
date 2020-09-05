import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const ReminderItem = (props) => {

    return (
        <TouchableOpacity onPress={() => props.onDelete(props.chave)}>
            <View style={styles.listItem}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 12,
        backgroundColor: '#ccc',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8
    }
});

export default ReminderItem;