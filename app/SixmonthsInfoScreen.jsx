// app/SixmonthsInfoScreen.jsx
import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SixmonthsInfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Course Info</Text>
      <Link href="/SixmonthsScreen" asChild>
        <Button title="Back to Courses" />
      </Link>
      <Link href="/" asChild>
        <Button title="Back to Home" />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
});
