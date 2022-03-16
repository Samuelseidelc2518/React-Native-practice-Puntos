import MapView, { Marker } from 'react-native-maps'
import styles from './styles'


export default function ({ longPress, puntos, pointsFilter }) {
    return (
        <MapView 
            style={styles.map} 
            onLongPress={longPress}
        >
            {pointsFilter 
            ? puntos.map((punto, ind) =>
            (<Marker 
                coordinate={punto.coordinate}
                title={punto.name}
                key={ind}
            />))
            : null}
        </MapView>
    )
}