/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';



function HomeScreen(): React.JSX.Element {
    return (
        <View style={styles.sectionContainer}>
            <Text >Welcome</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

});

export default HomeScreen;
