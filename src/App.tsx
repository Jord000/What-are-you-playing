import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import React, { useRef, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import styles from './Styles'
import ChangeName from './ChangeName'

interface Props {}
type Game = { id: number; name: string }

const App: React.FC<Props> = () => {
  const [displayName, setDisplayName] = useState<String>('????')
  const [gameChosen, setGameChosen] = useState<String>('Mario')
  const [games, setGames] = useState<Array<Game>>([
    { id: 1, name: 'Super Mario Bros.' },
    { id: 2, name: 'The Legend of Zelda: Breath of the Wild' },
    { id: 3, name: 'Mario Kart 8 Deluxe' },
    { id: 4, name: 'Super Smash Bros. Ultimate' },
    { id: 5, name: 'Animal Crossing: New Horizons' },
    { id: 6, name: 'Splatoon 2' },
    { id: 7, name: 'Pokémon Sword and Shield' },
    { id: 8, name: 'Metroid Dread' },
    { id: 9, name: 'Fire Emblem: Three Houses' },
    { id: 10, name: `Luigi's Mansion 3` },
  ])

  const pressGame: Function = (item: Game) => {
    setGameChosen(item.name)
  }




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldTitle}>GAMES</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello {displayName}</Text>
        <Text>What would you like to play today?</Text>
        <Text>You would like to play - {gameChosen}</Text>
        <Text></Text>
      </View>
    <ChangeName setDisplayName={setDisplayName}/>
      <View>
        <Text style={styles.games}>Games available:</Text>
      </View>
      <FlatList
        numColumns={1}
        data={games}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              pressGame(item)
            }}
          >
            <Text style={styles.games}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <StatusBar style="auto" />
    </View>
  )
}


registerRootComponent(App)
