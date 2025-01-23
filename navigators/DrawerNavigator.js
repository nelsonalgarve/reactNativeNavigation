import AntDesign from '@expo/vector-icons/AntDesign';
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { Pressable } from 'react-native';
import Screen6 from '../screens/Screen6';
import Screen7 from '../screens/Screen7';
import BottomTabsNavigator from './BottomTabsNavigator';

export default function DrawerNavigator() {
	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator
			drawerContent={(props) => <CustomDrawerContent {...props} />}
		>
			<Drawer.Group
				screenOptions={({ navigation }) => ({
					drawerBackgroundColor: 'black',
					headerTitleAlign: 'center',
					drawerActiveTintColor: 'black',
					drawerInactiveTintColor: 'grey',
					headerLeft: ({ color }) => (
						<Pressable
							style={{ marginLeft: 16 }}
							onPress={() => navigation.openDrawer()}
						>
							<AntDesign name="menufold" size={24} color="black" />
						</Pressable>
					),

					swipeEdgeWidth: 100,
					swipeMinDistance: 20,
					overlayColor: 'rgba(0, 0, 255, 0.5)',
				})}
			>
				<Drawer.Screen
					component={BottomTabsNavigator}
					name="Navigation"
					options={({ navigation }) => ({
						drawerLabel: 'Home',
						drawerIcon: ({ color }) => (
							<AntDesign name="home" size={24} color="black" />
						),
						headerRight: () => (
							<Pressable
								style={{ marginRight: 16 }}
								onPress={() =>
									navigation.navigate('Navigation', {
										screen: 'Home',
										params: {
											screen: 'Screen2',
											params: {
												name: 'Nelson',
											},
										},
									})
								}
							>
								<AntDesign name="user" size={24} color="black" />
							</Pressable>
						),
					})}
				/>
				<Drawer.Screen
					name="Notifications"
					component={Screen7}
					options={{
						drawerIcon: ({ color }) => (
							<AntDesign name="notification" size={32} color="black" />
						),
					}}
				/>
			</Drawer.Group>
			<Drawer.Screen name="Article3" component={Screen6} />
			{/* <Button title="Logout" onPress={() => navigation.navigate('Auth')} /> */}
		</Drawer.Navigator>
	);
}

function CustomDrawerContent(props) {
	return (
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<DrawerItem
				label="Logout"
				onPress={() => console.log('Logout')}
				icon={() => <AntDesign name="logout" size={24} color="black" />}
			/>
		</DrawerContentScrollView>
	);
}
