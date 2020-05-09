import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1

    },
    header:{
        paddingTop: 15,
        backgroundColor: '#ff8c00',
        width: '100%',
        height: 125,
        marginBottom: 150
    },
    headerText:{
        color: 'white',
        fontSize: 50,
        lineHeight: 100,
        textAlign: 'center'

    },
    headerTextBold: {
        fontWeight: 'bold',

    },
    body: {
        paddingTop: 50,
        backgroundColor: '#fff',
        height: 300,
        borderRadius: 10
    },

    loginText: {
        textAlign: 'center',
        paddingBottom: 5,
        fontSize: 20,
        marginBottom: 5
    },

    loginInput:{
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 1,
        width: '50%',
        height: 30,
        marginBottom: 10,
        textAlignVertical: 'top',
        marginLeft: 100
    },
    
    detailsButton:{
        backgroundColor: 'orange',
        width: '25%',
        height: 35,
        borderRadius: 5,
        marginLeft: 150,
        marginTop: 20

    },
    detailsButtonText:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 3
    }

})