//
// Страница личного кабинета (профиля) игрока
// Здесь присутствует статистика по выиграным или проиграным "партиям", 
// а также личная статистика эффективности с конкретными персонажами и историческими личностями.
//

import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';


export const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello Help</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});