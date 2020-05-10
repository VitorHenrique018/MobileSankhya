import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './style';
import {Feather} from '@expo/vector-icons';
import logoImg from '../../assets/logo.png';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';




export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident;
    const message = `Ola ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso ${incident.title} com o valor de ${Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}}`;
    
    //ir para a pagina de incidents
    function navigateToIncidents(){
        navigation.navigate('Incidents');
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Heroi do Caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })

    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.sendwhatsapp}?text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} /> 

                <TouchableOpacity onPress={navigateToIncidents}>
                    <Feather name="arrow-left" size={28} color="#E02041"></Feather>
                </TouchableOpacity>
            </View>     

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty], {marginTop: 0}}>Ong:</Text>
    <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={[styles.incidentProperty], { marginTop: 0}}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.value}</Text>

                <Text style={[styles.incidentProperty], { marginTop: 0}}>Valor:</Text>
                <Text style={styles.incidentValue}>
                    {Intl.NumberFormat('pt-BR', 
                    {style: 'currency', 
                    currency: 'BRL'
                    }).format(incident.value)}
                    </Text>
            </View>   

            <View style={styles.contactBox}> 
                <Text style={styles.heroTitle}>Salve o dia</Text>
                <Text style={styles.heroTitle}>Seja o Heroi desse caso.</Text>
            
                <Text style={styles.heroDescription}>Entre em Contato:</Text>


                <View style = {styles.actions}>
                    <TouchableOpacity style={styles.action} onPress= {sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress= {sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

993629038