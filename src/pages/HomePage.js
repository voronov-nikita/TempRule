//
// Домашняя страница
//

import { StyleSheet, View, Text } from 'react-native';
import * as React from 'react';

export const HomeScreen = () => {
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