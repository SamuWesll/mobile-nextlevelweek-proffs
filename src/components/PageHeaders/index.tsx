import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import LogoImg from '../../assets/images/logo.png';
import style from './style';

interface PageHeadersProps {
    title: string;
    headerRight?: ReactNode;
}

const PageHeaders: React.FC<PageHeadersProps> = ({ title, headerRight ,children }) => {

    const { navigate} = useNavigation();

    function handleGoBak() {
        navigate('Landing');
    }

    return (
        <View style={style.container}>
            <View style={style.topBar}>
                <BorderlessButton onPress={handleGoBak}>
                    <Image source={backIcon} resizeMode="contain"/>
                </BorderlessButton>

                <Image source={LogoImg} resizeMode="contain"/>
            </View>

            <View style={style.header}>
                <Text style={style.title}>{title}</Text>

                {headerRight}
            </View>

            {children}
        </View>
    )
}

export default PageHeaders;