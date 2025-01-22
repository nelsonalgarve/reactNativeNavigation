import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Screen1(props) {
	console.log(props);

	return (
		<Pressable
			style={styles.container}
			onPress={() => {
				props.navigation.navigate('Screen2', { name: 'Screen 2' });
			}}
		>
			<Text>Screen1</Text>
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
