import { FlatList, Text, Button, View } from 'react-native'
import styles from './styles'


export default function ({ puntos, closeModal }) {
    return (
        <>
            <View style={styles.list} >
                <FlatList
                    data={puntos.map(item => item.name)}
                    renderItem={({ item }) => <>
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    </>}
                    keyExtractor={item => item}
                    style={styles.list}
                />
            </View>
            <View style={styles.listButton} >
                <Button title='Cerrar' onPress={closeModal} />
            </View>
        </>
    )
}