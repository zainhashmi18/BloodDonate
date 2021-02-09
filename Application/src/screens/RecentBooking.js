import React from "react";
import { Container, Header, Left, Icon, Right, Button, Text, } from "native-base";
import { DrawerActions } from "@react-navigation/native";
import 'react-native-gesture-handler';
export default function RecentBooking({ navigation }) {
    return (
        <Container>
            <Header style={{ backgroundColor: "white" }}>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                        <Icon style={{ color: "black", fontSize: 30 }} name="menu" />
                    </Button>
                </Left>

                <Right />
            </Header>
            <Text>Recent</Text>
        </Container >
    );
}
