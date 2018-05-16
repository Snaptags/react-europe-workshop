import React from 'react';
import ReactDOM from 'react-dom';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import "./index.css";

class App extends React.Component {
  render() {
    return (
        <View style={styles.container} >
            <View style={styles.box} />
            <View style={styles.box} />
            <View style={[styles.box, { backgroundColor: "blue" }]} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItem: "center",
        justifyContent: "space-around"
    },
    box: {
        height: 50,
        width: 50,
        backgroundColor: "red"
    },
  text: { fontWeight: 'bold' },
});

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
