import React from "react";
import {VIew, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

const Tache = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>

            </View>
            <Text style={styles.circular}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item : {
        backgroundColor: '#e1e2e3',
        padding: 15,
        borderRadius: 10, 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft : {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap', 
    },
    square : {
        width: 24,
        height: 24, 
        backgroundColor: '#b554ff',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText : {
        maxWidth: '80%',
    },
    circular : {
        width: 12,
        height: 12, 
        borderColor: '#b554ff',
        borderWidth: 2,
        borderRadius: 5,
    },
});
export default Tache;