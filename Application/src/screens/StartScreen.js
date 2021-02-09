import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import Logo from "../Images/wdrop.png";

const { width: WIDTH } = Dimensions.get("window")
function StartScreen({ navigation }) {
    return (
        <View style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.logoText}>Donate to Save Life</Text>

            </View>
            <View style={styles.btnMain}>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.btn}><Text style={styles.text}>Sign in</Text></TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Registration')} style={styles.btn2}><Text style={styles.text2}>Create Account</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D80132"
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    textContainer: {
        marginBottom: 10
    },
    btnMain: {
        marginTop: 90
    },
    btnContainer: {
        marginTop: 10,
    },
    logo: {
        width: 180,
        height: 130,
    },
    logoText: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
        opacity: 1,
        textDecorationLine: 'underline'
    },
    btn: {
        width: WIDTH - 100,
        height: 70,
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent: "center",
        marginTop: 5,
    },
    btn2: {
        width: WIDTH - 100,
        height: 70,
        borderRadius: 10,
        backgroundColor: "#D80132",
        justifyContent: "center",
        borderColor: 'white',
        borderWidth: 3,
        marginTop: 5
    },
    text: {
        color: "#D80132",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },
    text2: {
        color: "white",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    }

});
export default StartScreen;