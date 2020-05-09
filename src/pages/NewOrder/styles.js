import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 30,
        backgroundColor: 'white'
    },

    header:{
        width: '100%',
        backgroundColor: 'orange',
        height: 40,
        marginBottom: 15
    },
    headerText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 8,
        fontSize: 18
    },
    body:{
        width: '95%',
        marginBottom: '2%',
        marginLeft: '2.5%'

    },
    select:{
        height: 40, 
        width: '100%',
        backgroundColor: '#e9e9e9',
        marginTop: '1%',
        flexDirection: 'row'
    },
    selectText:{
        color: 'grey',
        
        
    }

})