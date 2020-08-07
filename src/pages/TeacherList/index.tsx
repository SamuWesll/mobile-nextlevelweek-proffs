import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import PageHeaders from '../../components/PageHeaders';
import TeacherItem from '../../components/TeacherItem';

import style from './style';

function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={style.container}>
            <PageHeaders 
                title="Proffs disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF"/>
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (
                    <View style={style.searchForm}>
                        <Text style={style.label}>Matéria</Text>
                        <TextInput
                            style={style.input}
                            placeholder="Qual a matéria"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={style.inputGroup}>
                            <View style={style.inputBlock}>
                                <Text style={style.label}>Dia da semana</Text>
                                <TextInput
                                    style={style.input}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={style.inputBlock}>
                                <Text style={style.label}>Horário</Text>
                                <TextInput
                                    style={style.input}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton style={style.submitButton}>
                            <Text style={style.submitButtonText}>Filtrar</Text>
                        </RectButton>

                    </View>
                )}
            </PageHeaders>

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

export default TeacherList;