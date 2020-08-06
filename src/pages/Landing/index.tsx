import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import style from './style'

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {

    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPage() {
        navigate('Study');
    }

    return (
        <View style={style.component}>
            <Image source={landingImg} style={style.banner}/>

            <Text style={style.title}>
                Seja bem vindo, {'\n'}
                <Text style={style.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={style.buttonsContainer}>

                <RectButton onPress={handleNavigateToStudyPage} style={[style.button, style.buttonPrimary]}>
                    <Image source={studyImg}/>
                    <Text style={style.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigateToGiveClassesPage} style={[style.button, style.buttonSecondary]}>
                    <Image source={giveClassesIcon}/>
                    <Text style={style.buttonText}>Estudar</Text>
                </RectButton>

            </View>

            <Text style={style.totalConnections}>
                Total de 285 conexões já realizadas {'  '}
                <Image source={heartIcon}/>
            </Text>
        </View>
    )
};

export default Landing;