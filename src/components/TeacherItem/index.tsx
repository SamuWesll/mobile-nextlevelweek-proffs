import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import style from './style';

const TeacherItem = () => {
    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image 
                    style={style.avatar}
                    source={{ uri: 'https://avatars2.githubusercontent.com/u/47816511?s=460&u=7b51046cf06cbf8ffee42546e04a10e71bee3e58&v=4'}}
                />

                <View style={style.profileInfo}>
                    <Text style={style.name}>Samuel Weslley</Text>
                    <Text style={style.subject}>Química</Text>
                </View>
            </View>

            <Text style={style.bio}>
                Sou um jovem desenvolvedor, estudante de engenharia da computação na UNIVESP. 
                {'\n'}{'\n'}
                Onde tem como interesse o continuo crescimento tanto pessol como profissional
            </Text>
            
            <View style={style.footer}>
                <Text style={style.price}>
                    Preço/hora {'   '}
                    <Text style={style.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={style.buttonsContainer}>
                    <RectButton style={[style.favoriteButton, style.favorited]}>
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={style.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;