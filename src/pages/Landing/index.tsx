import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import style from './style'

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';


function Landing() {
    return (
        <View style={style.component}>
            <Image source={landingImg} style={style.banner}/>

            <Text style={style.title}>
                Seja bem vindo, {'\n'}
                <Text style={style.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={style.buttonsContainer}>
                <TouchableOpacity style={[style.button, style.buttonPrimary]}>
                    <Image source={studyImg}/>
                    <Text style={style.buttonText}>Estudar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[style.button, style.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={style.buttonText}>Estudar</Text>
                </TouchableOpacity>
            </View>

            <Text style={style.totalConnections}>
                Total de 285 conexões já realizadas.
            </Text>
        </View>
    )
};

export default Landing;