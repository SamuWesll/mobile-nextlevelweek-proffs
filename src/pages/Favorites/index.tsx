import React, { useState} from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PageHeaders from '../../components/PageHeaders';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

import style from './style';

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        })
    }

    useFocusEffect(() => {
        loadFavorites();
    })

    return (
        <View style={style.container}>
            <PageHeaders title="Meus Proffs favoritos"/>

            <ScrollView 
                style={style.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            favorited
                            teacher={teacher} 
                        />
                    )
                })}
                

            </ScrollView>
        </View>
    )
}

export default Favorites;