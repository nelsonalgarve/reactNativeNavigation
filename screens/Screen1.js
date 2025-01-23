import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Screen1(props) {
	console.log(props);

	return (
		<Pressable
			style={styles.container}
			onPress={() => {
				props.navigation.jumpTo('Settings', { name: 'Nelson' });
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
