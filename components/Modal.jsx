import { View, Text, Modal } from 'react-native'
import styles from './styles'

export default function ({ children, visibility }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visibility}
        >
            <View style={styles.center}>
                <View style={styles.modalView}>
                    <Text>{children}</Text>
                </View>
            </View>
        </Modal>
    )
}