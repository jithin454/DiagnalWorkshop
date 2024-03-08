// Assuming your component file name is SearchHeader.tsx
import React, { useRef } from 'react';
import {
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from './styles'; // Adjust the import path as necessary

interface SearchHeaderProps {
    searchText: string;
    handleTextChange: (text: string) => void;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ searchText, handleTextChange }) => {
    return (
        <>
            <View style={styles.searchBarContainer}>
                <TouchableOpacity>

                    <Image
                        style={styles.backIcon}
                        source={require('../../assets/icons/arrow.png')}
                    />
                </TouchableOpacity>
                <TextInput
                    style={styles.searchText}
                    placeholder="Search"
                    cursorColor="#ccc"
                    placeholderTextColor="#ccc"
                    selectionColor="#ccc"
                    value={searchText}
                    onChangeText={handleTextChange}
                />
                <TouchableOpacity>
                    <Image
                        style={styles.searchIcon}
                        source={require('../../assets/icons/search.png')}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
};

export default SearchHeader;
