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
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View
} from "react-native";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Logo sizes
  const logoWidth = isWeb ? width * 0.2 : width * 0.45;
  const logoHeight = logoWidth * 0.33;

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

      {isWeb ? (
        <View style={styles.webNavBar}>
          <Link href="/" asChild>
            <TouchableOpacity>
              <Image
                source={require("../assets/logo_black.png")}
                style={{ width: logoWidth, height: logoHeight, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </Link>

          <NavLinks />

          <TouchableOpacity
            style={styles.searchButtonWeb}
            onPress={toggleSearch}
            accessibilityLabel="Toggle search"
          >
            <Ionicons name="search" size={28} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.mobileNavBar}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.logoTouchable}>
              <Image
                source={require("../assets/logo_black.png")}
                style={{ width: logoWidth, height: logoHeight, resizeMode: "contain" }}
              />
            </TouchableOpacity>
          </Link>

          <TouchableOpacity
            style={styles.searchButtonMobile}
            onPress={toggleSearch}
            accessibilityLabel="Toggle search"
          >
            <Ionicons name="search" size={28} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={toggleMenu}
            style={styles.hamburgerButton}
            accessibilityLabel="Menu toggle"
          >
            <Ionicons name="menu" size={32} color="black" />
          </TouchableOpacity>

          <Modal visible={menuVisible} animationType="slide" transparent={true}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={toggleMenu} style={styles.closeButton} accessibilityLabel="Close menu">
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

      {/* Search box */}
      {searchOpen && (
        <View style={isWeb ? styles.searchBoxWeb : styles.searchBoxMobile}>
          <TextInput
            placeholder="Search Empowering The Nation"
            style={styles.searchInput}
            autoFocus={true}
          />
        </View>
      )}

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
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  webNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 960,
    marginBottom: 5, // reduced margin for search box below
    paddingHorizontal: 20,
  },
  mobileNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  logoTouchable: {
    marginLeft: -80, // move logo left on mobile
  },
  navLinksHorizontal: {
    flexDirection: "row",
    gap: 20,
    flex: 1,
    justifyContent: "center",
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
  searchButtonWeb: {
    paddingHorizontal: 10,
  },
  searchButtonMobile: {
  position: "absolute",
  left: "50%",
  transform: [{ translateX: -10 }], // centers horizontally by half icon size
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
  searchBoxWeb: {
    width: "100%",
    maxWidth: 960,
    marginBottom: 20,
  },
  searchBoxMobile: {
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  buttonSection: {
    width: "100%",
    maxWidth: 400,
    gap: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});




