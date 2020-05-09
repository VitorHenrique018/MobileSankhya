import React, { useState } from 'react';
import {View, Text,Picker} from 'react-native';




import styles from './styles';

export default function NewOrder() {
    
    const [selectedValue, setSelectedValue] = useState("java");
    
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Selecione um Cliente</Text>
                
            </View>

            <View style={styles.body}>
                <Text style={styles.selectText}>Representante</Text>
            <Picker
            selectedValue={selectedValue}
            style={styles.select}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="Exemplo1" value="ex1" />
            <Picker.Item label="Exemplo2" value="ex2" />
            <Picker.Item label="Exemplo3" value="ex3" />
            <Picker.Item label="Exemplo4" value="ex4" />
            
            </Picker>

            
            
            </View>
      
        </View>
    )
}