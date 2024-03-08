/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import RenderImageItem from '../../components/renderImageItem/renderImageItem';
import { styles } from './styles';
import SearchHeader from '../../components/header/SearchHeader';

function HomeScreen(): React.JSX.Element {
    const [searchText, setSearchText] = useState<string>('');

    const handleTextChange = (text: string) => {
        setSearchText(text);
    };
    return (
        <SafeAreaView style={styles.Container}>
            <SearchHeader
                searchText={searchText}
                handleTextChange={handleTextChange}
            />
            <View>
                <Text >Welcome</Text>
                <RenderImageItem />
            </View>
        </SafeAreaView>
    );
}

export default HomeScreen;
