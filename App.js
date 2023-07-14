import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./screens/Tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ShopScreen from "./screens/ShopScreen";
import SearchScreen from "./screens/SearchScreen";
import BusinessScreen from "./screens/businessScreens/BusinessScreen";
import DrawerGroup from "./screens/Drawer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <DrawerGroup /> */}
    </NavigationContainer>
  );
}
