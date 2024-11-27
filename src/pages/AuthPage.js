//
// Страница регистрации и авторизации пользователей.
// Страница необходима для работы с пользовательской статистикой и профилями.
//

import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

export const AuthScreen = () => {
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