import { Button, StyleSheet, Text, View } from "react-native";

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.text}>Sharpeville | Soweto | Alexandra</Text>
      <Text style={styles.text}>info@empoweringthenation.com</Text>
      <Text style={styles.text}>+27 73 456 7891</Text>
      <Button title="Back to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },
  text: { textAlign: "center", fontSize: 16, marginBottom: 8 },
});
