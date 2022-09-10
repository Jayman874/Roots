import React, { useEffect, useState } from 'react'
import Profiles from './Profiles';
import { StyleSheet, View, ScrollView, Text, Button, Alert, Image, TouchableOpacity, PanResponder } from 'react-native';
import AccountScreen from './AccountScreen';
import { doc, getDocs, collection, getFirestore } from '@firebase/firestore';
import { map } from 'parse';
import { app } from "../../App.js";
import { arrayRemove } from 'firebase/firestore';

async function getScores() {
    const querySnapshot = await getDocs(collection(getFirestore(app), "users"));
    let scores = new Map();
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, "- ", doc.data().first_name, " => ", doc.data().total_points);
        scores.set(doc.data().first_name, doc.data().total_points);
        // scores.push(doc.data.first_name, doc.data.total_points)
    });
    return scores;
}


export default function Leaderboard() {

    const scores = [
        {
            id: "77",
            name: "Earnest Green",
        },
        {
            id: "40",
            name: "Winston Orn",
        },
        {
            id: "95",
            name: "Carlton Collins",
        },
        {
            id: "105",
            name: "Malcolm Labadie",
        },
        {
            id: "27",
            name: "Michelle Dare",
        },
        {
            id: "62",
            name: "Carlton Zieme",
        },
        {
            id: "39",
            name: "Jessie Dickinson",
        },
        {
            id: "54",
            name: "Julian Gulgowski",
        },
        {
            id: "138",
            name: "Ellen Veum",
        },
        {
            id: "97",
            name: "Lorena Rice",
        },

        {
            id: "10",
            name: "Carlton Zieme",
        },
        {
            id: "48",
            name: "Jessie Dickinson",
        },
        {
            id: "37",
            name: "Julian Gulgowski",
        },
        {
            id: "138",
            name: "Ellen Veum",
        },
        {
            id: "142",
            name: "Lorena Rice",
        },
    ];

    return (

        <View style={styles.container}>
            <ScrollView horizontal={true} contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'flex-end',
            }}>
                {scores.map((person) => {
                    return (
                        <View style={styles.profileContainer}>
                            <Profiles name={person.name} score={person.id * 1.5}></Profiles>
                        </View>
                    );
                })}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    }
})