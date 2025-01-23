import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomTabsNavigator from './navigators/BottomTabsNavigator';
import StackNavigator from './navigators/StackNavigator';
import ToptabsNavigator from './navigators/TopTabsNavigator';

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				{/* <StackNavigator /> */}
				<ToptabsNavigator />
				{/* <BottomTabsNavigator /> */}
			</NavigationContainer>
		</SafeAreaProvider>
	);
}
