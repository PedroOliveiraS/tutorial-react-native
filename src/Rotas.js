import React from 'react';
import { createDrawerNavigator} from 'react-navigation';

import Simples from './components/Simples';
import Parimpar from './components/Parimpar';
import Inverter, {Megasena } from './components/Multi';
import Contador from './components/Contador';
import Plataforma from './components/Plataforma';
import ValidarProps from './components/ValidarProps'
export default createDrawerNavigator({
    ValidarProps: {
        screen: () => <ValidarProps ano={10} />
    },
    Plataforma: {
        screen: Plataforma
    },
    Contador: {
       screen: () =>  <Contador valorInicial={5}/>
    },
    Megasena: {
        screen: () => <Megasena tamanho={10}/>
    },
    Inverter: {
        screen: () => <Inverter texto='Abcd'/>
    },
    Parimpar: {
        screen: () => < Parimpar numero={6} /> 
    },
    Simples: {
        screen: () => <Simples texto="Meu texto"/>,
        navigationOptions: {title: 'Exemplo simples'}
    }
}, {drawerWidth: 200});