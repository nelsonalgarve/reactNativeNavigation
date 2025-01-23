import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Screen3({ route }) {
	const { name } = route.params;
	return (
		<View style={styles.container}>
			<Text>Settings {name}</Text>
		</View>
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
