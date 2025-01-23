import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Screen1 from '../screens/Screen1';
import Screen3 from '../screens/Screen3';

const Tab = createBottomTabNavigator();

export default function BottomTabsNavigator() {
	const insets = useSafeAreaInsets();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShadowVisible: false,
				headerTitleAlign: 'center',
				headerStyle: { backgroundColor: '#f5f5f5' },
				headerTitleStyle: { fontWeight: 'bold', color: 'blue' },
				tabBarActiveTintColor: 'blue',
				tabBarInactiveTintColor: 'gray',
				// tabBarLabelStyle: { fontSize: 16 },
				tabBarStyle: { height: 80 + insets.bottom },
				tabBarActiveBackgroundColor: '#f5f5f5',
				tabBarInactiveBackgroundColor: '#fff',
				tabBarIndicatorStyle: { backgroundColor: 'blue' },
				tabBarShowLabel: false,
				tabBarIconStyle: { top: '50%', transform: [{ translateY: -14 }] },
				tabBarButton: (props) => (
					<TouchableOpacity {...props} activeOpacity={1} />
				),
			}}
		>
			<Tab.Screen
				name="Home"
				component={Screen1}
				options={{
					tabBarIcon: ({ color }) => (
						<AntDesign name="home" size={28} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				initialParams={{ name: '' }}
				component={Screen3}
				options={{
					tabBarIcon: ({ color }) => (
						<Feather name="settings" size={28} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
