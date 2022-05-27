import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import { spacing } from "../theme/spacing";

export const Button = ({ title }) => {
  return (
    <Pressable
      onPress={() => {
        alert("Pressed");
      }}
    >
      <Text style={{ color: "white", marginLeft: -35 }}>{title}</Text>
    </Pressable>
  );
};

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.sec1}>
          <Ionicons name="menu" size={24} color="white" />
          <Feather name="bell" size={24} color="white" />
        </View>
        <View style={styles.sec2}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Covid-19
          </Text>
          <View style={styles.country}>
            <Image
              style={{ borderRadius: 50 }}
              source={require("../../assets/images/usa.png")}
            />
            <Text>USA</Text>
            <AntDesign name="caretdown" size={12} color="grey" />
          </View>
        </View>
        <View style={styles.sec3}>
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Are you feeling sick ?
          </Text>
          <Text style={{ color: "white", marginTop: spacing[4] }}>
            If you feel sick with any of covid-19 symptoms please call or SMS us
            immediately for help.
          </Text>
        </View>
        <View style={styles.sec4}>
          <View style={styles.btn1}>
            <Ionicons name="call" size={24} color="white" />
            <Button title="Call Now" />
          </View>
          <View style={styles.btn2}>
            <Feather name="message-circle" size={24} color="white" />
            <Button title="Send SMS" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[8],
  },
  sec1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sec2: {
    marginTop: spacing[12],
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sec3: {
    marginTop: spacing[13],
  },
  sec4: {
    marginTop: spacing[10],
    flexDirection: "row",
    justifyContent: "space-around",
  },

  country: {
    width: 116,
    height: 40,
    borderRadius: 20,
    padding: spacing[2],
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn1: {
    width: 155,
    height: 48,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.orange,
  },

  btn2: {
    width: 155,
    height: 48,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.lightBlue,
  },
});
