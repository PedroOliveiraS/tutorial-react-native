import React from 'react';
import {Text} from 'react-native';
import Padrao from '../styles/Padrao';

const Inverter =  props => {
    //props.texto = "Marsh"
        // "Hsram"

    let invertido = props.texto.split('').reverse().join('');
    return <Text style={[Padrao.exercicio, {fontSize: 20} ]}>{invertido}</Text>
}

const Megasena = props => {
    //props.tamanho
    const [min, max] = [1, 60];
    const numeros = Array(props.tamanho || 6).fill(0);

    for(let i = 0; i < numeros.length; i++){
        let novoNumero = 0;
        while(numeros.includes(novoNumero)){
            novoNumero = Math.floor(Math.random() * (max - min + 1) + min);
        }

        numeros[i] = novoNumero;
    }

    //Ordenar o array de forma crescente
    numeros.sort((a, b) => a - b);

    return <Text style={Padrao.exercicio}>{numeros.join(','  )}</Text>
}

export {Megasena};
export default Inverter;