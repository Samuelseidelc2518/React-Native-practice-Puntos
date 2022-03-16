import { Button, View } from 'react-native'
import styles from './styles'


export default function ({ onPressLeft, textLeft, togglePointsFilter }) {
    return (
        <View style={styles.panel}>
            <Button title={textLeft} style={styles.panelButtons} onPress={onPressLeft} />
            <Button title='Mostrar/Ocultar' style={styles.panelButtons} onPress={togglePointsFilter} />
        </View>
    )
}