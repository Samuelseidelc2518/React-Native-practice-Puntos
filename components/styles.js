import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
	map: {
		height: Dimensions.get("window").height - 150,
		width: Dimensions.get("window").width,
	},
    center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: "rgba(0,0,0,.3)"
	},
	modalView: {
		backgroundColor: '#fff',
		borderRadius: 4,
		padding: 0,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		minWidth: Dimensions.get("window").width - 100
	},
	panel: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: Dimensions.get("window").width
	},
	panelButtons: {
		margin: 5
	},
	wrapper: {
		height: 120,
		padding: 15,
		width: Dimensions.get("window").width - 100,
		marginTop: 10,
	},
	wrapperTitle: {
		fontSize: 26,
		paddingBottom: 10,
	},
	wrapperInput: {
		height: 40,
		marginTop: 10,
		borderBottomColor: "#000",
		borderBottomWidth: 1.5,
	},
	list: {
		width: Dimensions.get('window').width - 100,
		height: Dimensions.get('window').height -215,
	},
	item: {
		borderBottomWidth: 1,
		borderColor: "#ccc",
		height: 50,
		justifyContent: 'center',
		padding: 15,
		width: '100%'

	},
	listButton: {
		padding: 15,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	}
});