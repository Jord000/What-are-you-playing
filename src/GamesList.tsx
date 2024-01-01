import { Text, View, FlatList, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather'

interface Props {
  gameChosen: Array<String>
  setGameChosen: Function
}

const GamesList: React.FC<Props> = ({ gameChosen, setGameChosen }) => {
  const removeListItem: Function = (item: String) => {
    const indexOfItem: number = gameChosen.indexOf(item)
    const gamesArrray: Array<String> = [...gameChosen]
    gamesArrray.splice(indexOfItem, 1)
    setGameChosen(gamesArrray)
  }

  return (
    <View className="mb-10 bg-orange-200 w-64">
      <View>
        <Text className="bg-orange-200 items-center font-semibold p-4 mb-2 text-center">
          What are you currently playing?
        </Text>
      </View>

      <FlatList
        className="grow-0 max-h-24"
        numColumns={1}
        data={gameChosen}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => {}}>
            <View className="flex w-auto bg-orange-200 p-2 border-solid border-2 border-orange-900 mb-2 mx-4">
              <Text className="pr-2">{item}</Text>
              <Icon
                name="minus-circle"
                size={20}
                style={{ marginLeft: 'auto' }}
                onPress={()=>{removeListItem()}}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  )
}

export default GamesList
