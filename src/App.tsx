import { StatusBar } from 'expo-status-bar'
import { registerRootComponent } from 'expo'
import React, { useState } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import ChangeName from './ChangeName'
import GamesList from './GamesList'


interface Props {}
type Game = { id: number; name: string }

const App: React.FC<Props> = () => {
  const [displayName, setDisplayName] = useState<String>('')
  const [gameChosen, setGameChosen] = useState<Array<String>>([])
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
  
    setGameChosen([...gameChosen, item.name])
  }



  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View className=" bg-amber-50 items-center justify-center flex-1">
        <View className="bg-orange-300 px-16 mb-5 rounded py-4 mt-12">
          <Text className="font-bold">GAMES TO PLAY</Text>
        </View>
        <Text>{displayName}</Text>
        <GamesList gameChosen={gameChosen} setGameChosen={setGameChosen} />
        <ChangeName setDisplayName={setDisplayName} />
        <View>
          <Text className="font-semibold p-4 mb-2">Example Games:</Text>
        </View>
        <FlatList
        className='mb-8'
          numColumns={1}
          data={games}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                pressGame(item)
              }}
            >
              <Text className="font-semibold p-4 mb-3 bg-red-100">
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  )
}

registerRootComponent(App)
