import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import style from './style';
import { RectButton } from 'react-native-gesture-handler';

function GiveClasses() {

    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={style.container}>
            <ImageBackground resizeMode="contain" source={giveClassesBgImg} style={style.content}>
                <Text style={style.title}>Quer ser um proff?</Text>
                <Text style={style.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton style={style.okButton}>
                <Text onPress={handleNavigateBack} style={style.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses;