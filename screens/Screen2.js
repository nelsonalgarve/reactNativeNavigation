import { Pressable, StyleSheet, Text } from 'react-native';

export default function Screen2({ navigation, route }) {
	const { navigate } = navigation;

	console.log(route);
	const { name } = route.params;
	// console.log(name);

	return (
		<Pressable style={styles.container} onPress={() => navigate('Screen1')}>
			<Text>Hello {name}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
