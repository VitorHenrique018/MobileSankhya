import React from 'react';
import { Feather } from '@expo/vector-icons'
import {View, Text, TextInput, Button, TouchableOpacity, VirtualizedList } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Menu() {

    const navigation = useNavigation();

    function navigationToOrder(){
        navigation.navigate('NewOrder');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Menu Principal</Text> 
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={navigationToOrder}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Novo Pedido</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Clientes</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Pedidos</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Produtos</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Gerencial</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Agenda</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Recados</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Sincronização</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>

            <View style={styles.body}>      
                <TouchableOpacity 
                style={styles.detailsButton}
                onPress={() =>{}}
                >
                < Feather name="plus" size={22} color="orange" style={styles.iconOne} />
                <Text style={styles.detailsButtonText}>Novo Cliente</Text>
                < Feather name="arrow-right" size={22} color="orange" style={styles.iconTwo} />
                </TouchableOpacity>
            </View>
            
        </View>
        

    )
}