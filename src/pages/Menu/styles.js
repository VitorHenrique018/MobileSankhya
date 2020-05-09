import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30

    },
    header:{
        width: '100%',
        backgroundColor: 'orange',
        height: 40,
        marginBottom: 15
    },
    textHeader:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 8
    },
    body:{
        width: '95%',
        height: 60,
        backgroundColor: '#e9e9e9',
        marginBottom: '2%',
        marginLeft: '2.5%',
        borderRadius: 10
    },

    detailsButton:{
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2.5%'
    },
    
    detailsButtonText:{
        fontSize: 18,
        paddingRight: '50%',
        paddingTop: '1.25%',

    },
    iconOne:{
        paddingLeft: '2.5%',
        paddingRight: '4%',
        paddingTop: '1.25%'
        
    },

    iconTwo:{
        position: 'absolute',
        right: '2.5%',
        top: '45%'

    }

})