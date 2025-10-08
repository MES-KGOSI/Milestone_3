import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const NavLinks = ({ onClick }) => (
    <View style={isWeb ? styles.navLinksHorizontal : styles.navLinksVertical}>
      <Link href="/" asChild>
        <TouchableOpacity onPress={onClick} style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/SixmonthsScreen" asChild>
        <TouchableOpacity onPress={onClick} style={styles.navButton}>
          <Text style={styles.navButtonText}>6 Months</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/SixweeksScreen" asChild>
        <TouchableOpacity onPress={onClick} style={styles.navButton}>
          <Text style={styles.navButtonText}>6 Weeks</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/ContactScreen" asChild>
        <TouchableOpacity onPress={onClick} style={styles.navButton}>
          <Text style={styles.navButtonText}>Contact</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Empowering The Nation</Text>

      {/* Navigation Bar */}
      {isWeb ? (
        // Web nav: Logo left, links center, search icon right
        <View style={styles.webNavBar}>
          <Image source={require("../assets/logo_black.png")} style={styles.logo} />
          <NavLinks />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={28} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        // Mobile nav: Logo left, centered search, hamburger right
        <View style={styles.mobileNavBar}>
          <Image source={require("../assets/logo_black.png")} style={styles.logo} />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu} style={styles.hamburgerButton}>
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>

          <Modal visible={menuVisible} animationType="slide" transparent={true}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={toggleMenu} style={styles.closeButton}>
                  <Ionicons name="close" size={32} color="black" />
                </TouchableOpacity>
                <ScrollView>
                  <NavLinks onClick={toggleMenu} />
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      )}

      {/* Buttons section */}
      <View style={styles.buttonSection}>
        <Link href="/SixmonthsScreen" asChild>
          <Button title="View Six-Month Courses" />
        </Link>
        <Link href="/SixweeksScreen" asChild>
          <Button title="View Six-Week Courses" />
        </Link>
        <Link href="/FeesandFormScreen" asChild>
          <Button title="Fees & Form" />
        </Link>
        <Link href="/ContactScreen" asChild>
          <Button title="Contact Us" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20, alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 30 },

  // Web navigation styles
  webNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 960,
    marginBottom: 30,
  },

  // Mobile navigation styles
  mobileNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 30,
  },

  logo: {
    width: 120,
    height: 40,
    resizeMode: "contain",
  },

  navLinksHorizontal: {
    flexDirection: "row",
    gap: 20,
  },

  navLinksVertical: {
    flexDirection: "column",
    gap: 15,
  },

  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#cce5ff",
    borderRadius: 8,
  },

  navButtonText: {
    fontSize: 18,
    color: "#004085",
  },

  searchButton: {
    paddingHorizontal: 15,
  },

  hamburgerButton: {
    marginLeft: 15,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-start",
  },

  modalContent: {
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 30,
    paddingBottom: 60,
    minHeight: "50%",
  },

  closeButton: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },

  buttonSection: {
    width: "100%",
    maxWidth: 400,
    gap: 15,
  },
});


