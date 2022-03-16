import { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components'
import styles from './App.style'

export default function App() {

  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [puntoTemp, setPuntoTemp] = useState({})
  const [visibility, setVisibility] = useState(false)
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto')
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ({ nativeEvent }) =>{
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)

    
    // setPuntos([ 
    //   ...puntos, 
    //   { coordinate: nativeEvent.coordinate } 
    // ])
  }

  const handleSubmit = () => {
    if(nombre.trim() === '') return setVisibility(false)
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos([
      ...puntos,
      newPunto
    ])
    setVisibility(false)
    setNombre('')
    setPuntoTemp({})
  }

  const handleLista = () =>{
    setVisibilityFilter("all_puntos")
    setVisibility(true)

  }


  return (
    <View style={styles.container}>
      <Map longPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter} />
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter} />
      <Modal visibility={visibility} >
        <View style={styles.modal} >
          {visibilityFilter === 'new_punto'
          ? <>
            <Input title="Nombre" placeholder="Nombre del punto" onChangeText={t => setNombre(t)} />
            <View style={styles.aceptar} >
              <Button title="Aceptar" onPress={handleSubmit} />
            </View>
          </>
          : <List puntos={puntos} closeModal={() => setVisibility(false)} />
          }
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
