import React from 'react';
import Padrao from '../styles/Padrao';
import {View, Text} from 'react-native';

 import Condicao from './Codicao'

function parOuImpar(numero){
    let resultado = (numero % 2 == 0) ? 'Par' : 'Impar';
    return <Text>{resultado}</Text>
}

export default props => {
    // props.numero for par: "É par"
    // props.numero for impar: "É impar"
    return <View style={{marginTop: 50}}>
        {
            parOuImpar(props.numero)
        }
    </View>
}

/*export default props => {
    return <View>
        <Condicao teste={props.numero % 2 == 0}>
            <Text>É parr</Text>
        </Condicao>
        <Condicao teste={props.numero % 2 != 0}>
            <Text>É parr</Text>
        </Condicao>
    </View>
}*/