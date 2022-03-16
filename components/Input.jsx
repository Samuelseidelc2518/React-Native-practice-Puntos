import { View, Text, TextInput } from 'react-native'
import styles from './styles'

export default function ({ title, ...rest }) {
    return (
        <View style={styles.wrapper} >
            <Text style={styles.wrapperTitle}>{title}</Text>
            <TextInput {...rest} style={styles.wrapperInput} />
        </View>
    )
}