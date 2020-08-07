import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';

import PageHeaders from '../../components/PageHeaders';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import style from './style';
import api from '../../services/api';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })
                setFavorites(favoritedTeachersIds);
            }
        })
    }

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }


    async function handleFiltersSubmit() {

        loadFavorites();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    return (
        <View style={style.container}>
            <PageHeaders
                title="Proffs disponíveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#FFF" />
                    </BorderlessButton>
                )}
            >
                {isFiltersVisible && (
                    <View style={style.searchForm}>
                        <Text style={style.label}>Matéria</Text>
                        <TextInput
                            style={style.input}
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholder="Qual a matéria"
                            placeholderTextColor="#c1bccc"
                        />

                        <View style={style.inputGroup}>
                            <View style={style.inputBlock}>
                                <Text style={style.label}>Dia da semana</Text>
                                <TextInput
                                    style={style.input}
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>

                            <View style={style.inputBlock}>
                                <Text style={style.label}>Horário</Text>
                                <TextInput
                                    style={style.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="Qual horário?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton onPress={handleFiltersSubmit} style={style.submitButton}>
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
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.avatar}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        />)
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;