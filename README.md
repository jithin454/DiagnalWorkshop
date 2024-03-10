# DiagnalWorkshop React Native App

The "DiagnalWorkshop" is a React Native application designed to showcase a collection of movies available on an Over-The-Top (OTT) platform. Users can conveniently search for specific films using a search bar provided within the app. The movie listings are displayed as cards, enriched with Animatable elements to enhance user experience. The app retrieves its data from JSON files hosted on GitHub Pages.

## Features

- Displays a grid of Movies with their names.
- Implements search functionality to filter Movies based on the entered text.
- Loads data from GitHub Pagesfor representing content listings.
- Supports pagination for loading more images when scrolling to the end.
- Simple Animatable elements to enhance user experience.
- React Navigation's stack navigator uses to facilitate seamless navigation between screens. 


## Installation

1. Clone the repository:

### `https://github.com/jithin454/DiagnalWorkshop.git`

2. Change into the project directory:

### `cd DiagnalWorkshop`

3. Install the dependencies:

### `npm install`
### `cd ios && pod install`

4. Start the development server:

### `npm start`

5. Run the app on an emulator or connected device:

### `npm run ios` // For iOS
### `npm run android` // For Android

Make sure you have the necessary development environment set up for React Native. You can find detailed instructions in the React Native documentation.

## Project Structure
    .
    ├── ...
    │   ├── assets 
    │   │        └── icons            
    │   ├── components 
    │   │        ├── emptyListComponent
    │   │        ├── renderImageItem
    │   │        └──searchHeader
    │   └── screens  
    │            ├── aboutScreen
    │            └──homeScreen
    │            
    │                 
    └── README.md

## Dependencies

The project relies on the following dependencies:

- react-navigation/native
- react-navigation/stack
- react-native-gesture-handler
- react-native-screens

These dependencies are managed using npm and will be installed automatically when you run `npm install` as described in the Installation section.
