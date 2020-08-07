import React, { useState } from 'react';
import { View, Image, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import style from './style';

export interface Teacher {
    id: number,
    subject: string,
    cost: number,
    user_id: number,
    name: string,
    avatar: string,
    whatsaap: string,
    bio: string
}

interface TeacherItemProps {
    teacher: Teacher;
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    const [isFavorited, setIsFavorited] = useState(favorited);

    function handleLinkToWhatapp() {
        Linking.openURL(`whatsapp://send?phone=${'+55' + teacher.whatsaap}`)
    }

    function numberToReal(valor: number) {
        var numero = valor.toFixed(2).split('.');
        numero[0] = "R$ " + numero[0].split(/(?=(?:...)*$)/).join('.');
        return numero.join(',');
    }

    async function handleToggleFavorite() {

        const favorites = await AsyncStorage.getItem('favorites');
        let favoritesArray = [];
        if (favorites) {
            favoritesArray = JSON.parse(favorites)
        }

        if (isFavorited) {
            //remover dos favoritos
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            })

            favoritesArray.splice(favoriteIndex, 1)

            setIsFavorited(false);

        } else {
            // adicionar aos favoritos
            favoritesArray.push(teacher);

            setIsFavorited(true)
        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
    }

    return (
        <View style={style.container}>
            <View style={style.profile}>
                <Image
                    style={style.avatar}
                    source={{ uri: teacher.avatar }}
                />

                <View style={style.profileInfo}>
                    <Text style={style.name}>{teacher.name}</Text>
                    <Text style={style.subject}>{teacher.subject}</Text>
                </View>
            </View>

            <Text style={style.bio}>{teacher.bio}</Text>

            <View style={style.footer}>
                <Text style={style.price}>
                    Preço/hora {'   '}
                    <Text style={style.priceValue}>{numberToReal(teacher.cost)}</Text>
                </Text>

                <View style={style.buttonsContainer}>
                    <RectButton
                        onPress={handleToggleFavorite}
                        style={[
                            style.favoriteButton,
                            isFavorited ? style.favorited : {}]}
                    >
                        {isFavorited
                            ? <Image source={unfavoriteIcon} />
                            : <Image source={heartOutlineIcon} />
                        }
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatapp} style={style.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={style.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
}

export default TeacherItem;