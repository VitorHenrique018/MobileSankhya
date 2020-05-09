import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';


export default function Login() {

    const navigation = useNavigation();

    function navigationToMenu(){
        navigation.navigate('Menu');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    Social. <Text style={styles.headerTextBold}>Vendas</Text>
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.loginText}>Representante</Text>
                <TextInput style={styles.loginInput} placeholder={'Insira seu Login'}></TextInput>
                <Text style={styles.loginText}>Senha</Text>
                <TextInput style={styles.loginInput} placeholder={'Insira sua senha'} textContentType={'password'}></TextInput>
                

                <TouchableOpacity
                style={styles.detailsButton} 
                //realizar uma ação
                onPress={navigationToMenu}>
                    <Text style={styles.detailsButtonText}>Entrar</Text>
                </TouchableOpacity>            
                
            </View>

        </View>

    )
}