import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Screen4() {
	return (
		<View style={styles.container}>
			<Text>Article1</Text>
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
