import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import { colors } from "../theme/colors";
import Body from "../components/body";

export default function Home() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>
      </SafeAreaView>
      <View>
        <Body />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
