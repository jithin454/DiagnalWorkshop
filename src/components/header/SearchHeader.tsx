import React, { useRef } from 'react';
import {
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground,
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface SearchHeaderProps {
    searchText: string;
    handleTextChange: (text: string) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchText, handleTextChange }) => {
    const searchRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    return (
        <ImageBackground
            source={require('../../assets/icons/nav_bar.png')}
            style={styles.backGround}
        >
            <View style={styles.outerWrap}>
                <TouchableOpacity
                onPress={() => navigation.navigate('About')}
                >
                    <Image
                        style={styles.backIcon}
                        source={require('../../assets/icons/arrow.png')}
                    />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchText}
                    ref={searchRef}
                    placeholder="Search"
                    cursorColor="#ccc"
                    placeholderTextColor="#ccc"
                    selectionColor="#ccc"
                    value={searchText}
                    onChangeText={handleTextChange}
                />
                <TouchableOpacity onPress={() => searchRef.current?.focus()}>
                    <Image
                        style={styles.searchIcon}
                        source={require('../../assets/icons/search.png')}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default SearchHeader;
