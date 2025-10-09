import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";

//Static imports for images (works for both mobile and web)
import homeBannerWeb from '../assets/banner.png';
import homeBannerMobile from '../assets/banner_mobile.png';
import logoBlack from '../assets/logo_black.png';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  const [menuVisible, setMenuVisible] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  const logoWidth = isWeb ? width * 0.2 : width * 0.45;
  const logoHeight = logoWidth * 0.33;

  const navItems = [
    { label: "Home", href: "/" },
    { label: "6 Months", href: "/SixmonthsScreen" },
    { label: "6 Weeks", href: "/SixweeksScreen" },
    { label: "Contact", href: "/ContactScreen" },
  ];

  const bannerSource = isWeb ? homeBannerWeb : homeBannerMobile;

  // numeric left for mobile search button
  const searchButtonLeft = Math.round(width / 2 - 16);

  const NavLinks = ({ onClick }) => (
    <View style={isWeb ? styles.navLinksPillContainer : styles.navLinksVertical}>
      {navItems.map(({ label, href }, i) => (
        <Link href={href} key={label} asChild>
          <TouchableOpacity
            onPress={() => {
              onClick && onClick();
              setActiveIndex(i);
            }}
            style={styles.navLinkItem}
          >
            <View
              style={[
                styles.navCircle,
                activeIndex === i
                  ? styles.navCircleActive
                  : styles.navCircleInactive,
              ]}
            />
            <Text
              style={[
                styles.navLinkText,
                activeIndex === i && styles.navLinkTextActive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        </Link>
      ))}
    </View>
  );

  return (
    <ImageBackground
      source={bannerSource}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {isWeb ? (
          <View style={styles.webNavBar}>
            <TouchableOpacity
              style={styles.logoWrapper}
              onPress={() => router.push("/")}
              accessible={true}
              accessibilityLabel="Go to Home"
            >
              <Image
                source={logoBlack}
                style={{
                  width: logoWidth,
                  height: logoHeight,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>

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
            <TouchableOpacity
              style={styles.logoTouchable}
              onPress={() => router.push("/")}
              accessible={true}
              accessibilityLabel="Go to Home"
            >
              <Image
                source={logoBlack}
                style={{
                  width: logoWidth,
                  height: logoHeight,
                  resizeMode: "contain",
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.searchButtonMobile, { left: searchButtonLeft }]}
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
                  <TouchableOpacity
                    onPress={toggleMenu}
                    style={styles.closeButton}
                    accessibilityLabel="Close menu"
                  >
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

        {searchOpen && (
          <View style={isWeb ? styles.searchBoxWeb : styles.searchBoxMobile}>
            <TextInput
              placeholder="Search for courses"
              style={styles.searchInput}
              autoFocus={true}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "transparent",
  },

  webNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1200,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "transparent",
  },

  logoWrapper: {
    marginRight: -80,
  },

  navLinksPillContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 8,
    alignItems: "center",
  },

  navLinksVertical: {
    flexDirection: "column",
  },
  
  navLinkItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    marginRight: 20,
    marginBottom: 15,
  },

  navCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: "#000",
    marginRight: 8,
  },

  navCircleInactive: {
    backgroundColor: "transparent",
  },

  navCircleActive: {
    backgroundColor: "#000",
  },

  navLinkText: {
    fontSize: 18,
    color: "#181414ff",
  },

  navLinkTextActive: {
    fontWeight: "bold",
    color: "#000",
  },

  searchButtonWeb: {
    paddingHorizontal: 10,
  },

  mobileNavBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: "transparent",
  },

  logoTouchable: {
    marginLeft: -80,
  },

  searchButtonMobile: {
    position: "absolute",
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
    minHeight: 300,
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
});









