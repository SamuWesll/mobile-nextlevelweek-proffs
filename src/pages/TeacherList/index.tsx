import React from 'react';
import { View } from 'react-native';

import PageHeaders from '../../components/PageHeaders';

import style from './style';

function TeacherList() {
    return (
        <View style={style.container}>
            <PageHeaders title="Proffs disponíveis"/>
        </View>
    )
}

export default TeacherList;