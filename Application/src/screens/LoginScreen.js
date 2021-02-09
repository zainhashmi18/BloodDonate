import React from "react";
import { StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Item, Label, Input, Form } from 'native-base';
import 'react-native-gesture-handler';
import Logo from "../Images/wdrop.png";

const { width: WIDTH } = Dimensions.get("window")
function LoginScreen({ navigation }) {
    return (
        <View style={styles.backgroundContainer}>
            <KeyboardAvoidingView behavior="position">
                <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo} />
                    <Text style={styles.logoText}>Sign In</Text>
                </View>

                <View style={styles.textContainer}>
                    <Form style={{ marginHorizontal: 0 }}>
                        <Item style={{ marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "white" }}>Email</Label>
                            <Input style={{ color: "white" }} />
                        </Item>
                        <Item style={{ marginHorizontal: 30, borderBottomWidth: 3, marginVertical: 10 }} floatingLabel>
                            <Label style={{ marginVertical: -12, color: "white" }}>Password</Label>
                            <Input style={{ color: "white" }} secureTextEntry />
                        </Item>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity onPress={() => navigation.navigate('Main')} style={styles.btn}><Text style={styles.text}>Sign in</Text></TouchableOpacity>
                        </View>
                    </Form>

                </View>
            </KeyboardAvoidingView>
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
        backgroundColor: "#D80132",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 40,
    },
    textContainer: {
        marginBottom: 10
    },
    btnContainer: {
        marginTop: 10
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
        marginTop: 25,
    },
    text: {
        color: "#D80132",
        fontSize: 17.5,
        fontWeight: "bold",
        textAlign: "center"
    },

});
export default LoginScreen;