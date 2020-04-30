import React, { Component } from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import Padrao from '../styles/Padrao';


export default class Contador extends Component{
    state = {
        numero: this.props.valorInicial
    };

    incrementarContador(){
        this.setState({
            numero: this.state.numero + 1
        })
    }
    
    limpar(){
        this.setState({
            numero: 0
        })
    }

    render (){
        return (
            <View style={Padrao.container}>
                <Text style={Padrao.font40}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={() => this.incrementarContador()}
                    onLongPress={() => this.limpar()}

                >
                    <Text style={Padrao.font40}>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        );
    }
}