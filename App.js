import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import Home from "./src/screen/home";
import { colors } from "./src/theme/colors";

const Stack = createNativeStackNavigator();
export default function App() {
  // Load font family
  const [loaded] = useFonts({
    "Roboto-Medium": require("./assets/font/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/font/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading...</Text>;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
}
