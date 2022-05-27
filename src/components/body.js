import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { spacing } from "../theme/spacing";

export default function Body() {
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "500" }}>Prevention</Text>
      <View style={styles.ImgContainer}>
        <View>
          <Image source={require("../../assets/images/img1.png")} />
          <View style={{ width: 90 }}>
            <Text
              style={{
                textAlign: "center",
                marginTop: spacing[2],
                fontWeight: "500",
              }}
            >
              Avoid close contact
            </Text>
          </View>
        </View>
        <View>
          <Image source={require("../../assets/images/img2.png")} />
          <View style={{ width: 100 }}>
            <Text
              style={{
                textAlign: "center",
                marginTop: spacing[2],
                fontWeight: "500",
              }}
            >
              Clean your hands often
            </Text>
          </View>
        </View>
        <View>
          <Image source={require("../../assets/images/img3.png")} />
          <View style={{ width: 100 }}>
            <Text
              style={{
                textAlign: "center",
                marginTop: spacing[2],
                fontWeight: "500",
              }}
            >
              Wear a facemask
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: spacing[10] }}>
        <Image source={require("../../assets/images/img4.png")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[9],
    padding: spacing[8],
  },
  ImgContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: spacing[8],
  },
});
