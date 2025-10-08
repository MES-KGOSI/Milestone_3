// app/SixmonthsScreen.jsx
import { Link } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function SixmonthsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Month Courses</Text>
      <Link href="/SixmonthsInfoScreen" asChild>
        <Button title="View Course Info" />
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
