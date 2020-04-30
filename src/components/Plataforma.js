import React from 'react';
import { Button, Alert, ToastAndroid, Platform} from 'react-native';

export default props => {
    const notificar = mensagem => {
        // Android, vai imprimir a componente ToastAndroid
        // Ios, vai imprimir o component Alert

        if(Platform.OS == 'android'){
            ToastAndroid.show(mensagem, ToastAndroid.LONG);
        }else{
            Alert.alert('Informação',mensagem);
        }
    }
    return(
        <Button
            title='Plataforma'
            onPress={() => notificar('Parabéns')}/>
    
    );
}