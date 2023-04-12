import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <View style={styles.firstSection}>
        <Text>update</Text>
      </View>
      <View style={styles.secondSection}>
        <Text>rest</Text>
      </View>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  firstSection: {
    backgroundColor: "green",
    padding: 16,
  },
  secondSection: {
    backgroundColor: "blue",
    flexGrow: 1,
    padding: 16,
  },
});
