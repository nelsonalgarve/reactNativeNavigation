import { Pressable, StyleSheet, Text } from 'react-native';

export default function Screen2(props) {
	const { navigate } = props.navigation;
	return (
		<Pressable style={styles.container} onPress={() => navigate('Screen1')}>
			<Text>Screen2</Text>
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
