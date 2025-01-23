import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabsNavigator from './navigators/BottomTabsNavigator';
import DrawerNavigator from './navigators/DrawerNavigator';
import StackNavigator from './navigators/StackNavigator';
import ToptabsNavigator from './navigators/TopTabsNavigator';

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				<DrawerNavigator />
				{/* <ToptabsNavigator /> */}
				{/* <BottomTabsNavigator /> */}
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
