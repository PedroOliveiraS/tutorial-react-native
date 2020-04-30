import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    exercicio: {
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#222',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: Constants.statusBarHeight + 10,
    },
    container: {
        marginTop: Constants.statusBarHeight + 50,
    },
    font40: {
        fontSize: 30,
    }

});