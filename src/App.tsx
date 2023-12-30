import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView,} from 'react-native'
interface Props {}
type Game = {id: number, name: string}

const App: React.FC<Props> = ()=>{
  const [name, setName] = useState<String>('Jordan')
  const [gameChosen, setGameChosen] = useState<String>('Mario')
  const [games, setGames] = useState<Array<Game>>(
    [{ id: 1, name: 'Super Mario Bros.' },
    { id: 2, name: 'The Legend of Zelda: Breath of the Wild' },
    { id: 3, name: 'Mario Kart 8 Deluxe' },
    { id: 4, name: 'Super Smash Bros. Ultimate' },
    { id: 5, name: 'Animal Crossing: New Horizons' },
    { id: 6, name: 'Splatoon 2' },
    { id: 7, name: 'Pokémon Sword and Shield' },
    { id: 8, name: 'Metroid Dread' },
    { id: 9, name: 'Fire Emblem: Three Houses' },
    { id: 10, name: `Luigi's Mansion 3` }])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldTitle}>GAMES</Text>
      </View>
      <View style={styles.body}>
        <Text>Hello {name}</Text>
        <Text>What would you like to play today?</Text>
        <Text>You would like to play - {gameChosen}</Text>
        <Text></Text>
      </View>

      <Text>Change name:</Text>
      <TextInput
        style={styles.input}
        placeholder="My name is"
        onChangeText={(val) => {
          setName(val)
        }}
      />
      <Text>I'd like to play:</Text>
      <TextInput
        style={styles.input}
        placeholder="Super Mario"
        onChangeText={(val) => {
          setGameChosen(val)
        }}
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button title="submit" />
      </View>
      <ScrollView>
        <View ><Text style={styles.games}>Games available:</Text></View>
    {games.map((game)=>{
      return <View key={game.id}><Text style={styles.games}>{game.name}</Text></View>
    })}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#f5d57f',
    padding: 50,
  },
  boldTitle: {
    fontWeight: '400',
  },
  body: {
    backgroundColor: '#faebc8',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    minWidth: 100,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  },
  games: {
    fontWeight: '500',
    padding: 20,
    backgroundColor: '#faebc8',
    marginBottom: 20,
  }
})

registerRootComponent(App)
