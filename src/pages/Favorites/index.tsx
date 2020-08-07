import React from 'react';
import { View, ScrollView } from 'react-native';

import style from './style';
import PageHeaders from '../../components/PageHeaders';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </ScrollView>
        </View>
    )
}

export default Favorites;