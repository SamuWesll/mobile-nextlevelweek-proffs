import React from 'react';
import { View } from 'react-native';

import style from './style';
import PageHeaders from '../../components/PageHeaders';

function Favorites() {
    return (
        <View style={style.container}>
            <PageHeaders title="Meus Proffs favoritos"/>
        </View>
    )
}

export default Favorites;