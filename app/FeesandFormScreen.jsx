// app/FeesandFormScreen.jsx
import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function FeesandFormScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fees & Form</Text>
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
