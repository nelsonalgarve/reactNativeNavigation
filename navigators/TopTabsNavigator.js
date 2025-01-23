import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';

const Tab = createMaterialTopTabNavigator();
export default function ToptabsNavigator() {
	const insets = useSafeAreaInsets();
	return (
		<Tab.Navigator
			screenOptions={{
				// tabBarStyle: { paddingTop: insets.top },
				tabBarPressColor: 'violet',
				tabBarIndicatorStyle: {
					backgroundColor: 'violet',
					height: 5,
				},
				swipeEnabled: false,
				lazy: true,
				lazyPreloadDistance: 1,
				tabBarAndroidRipple: { borderless: false },
				tabBarActiveTintColor: 'blue',
				tabBarInactiveTintColor: 'gray',
				tabBarGap: 0,
				// tabBarScrollEnabled: true,
			}}
		>
			<Tab.Screen name="Article1" component={Screen4} />
			<Tab.Screen name="Article2" component={Screen5} />
			<Tab.Screen name="Article3" component={Screen6} />
		</Tab.Navigator>
	);
}
