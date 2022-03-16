import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	aceptar: {
		marginBottom: 10,
		padding: 15
	},
	modal: {
		flex: 1,
		flexDirection: 'column',
		width: Dimensions.get("window").width - 250,
	}
});