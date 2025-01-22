import AntDesign from '@expo/vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerTitleAlign: 'center',
				headerStyle: { backgroundColor: '#f5f5f5' },
				headerTitleStyle: { fontWeight: 'bold', color: 'blue' },
			}}
		>
			<Stack.Screen
				name="Screen1"
				component={Screen1}
				options={({ navigation }) => ({
					title: 'Home',
					headerRight: () => (
						<Pressable
							onPress={() => navigation.navigate('Screen2', { name: 'Nelson' })}
						>
							<AntDesign name="user" size={24} color="black" />
						</Pressable>
					),
				})}
			/>
			<Stack.Screen
				name="Screen2"
				component={Screen2}
				options={({ navigation }) => {
					{
						return {
							title: 'Profile',
							headerLeft: () => (
								<Pressable onPress={() => navigation.goBack}>
									<AntDesignIcon name="plus" size={24} />
								</Pressable>
							),
						};
					}
				}}
			/>
		</Stack.Navigator>
	);
}
