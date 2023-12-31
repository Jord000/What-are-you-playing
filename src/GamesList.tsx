import {
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native'
import styles from './Styles'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import {Icon} from '@ant-design/react-native'

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
    <View className="mb-10 bg-orange-200 w-60">
      <View>
        <Text className="bg-orange-200 items-center font-semibold p-4 mb-2">
          What are you currently playing?
        </Text>
      </View>

      <FlatList
        className="grow-0 max-h-26"
        numColumns={1}
        data={gameChosen}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => {}}>
            <View className="flex w-auto bg-orange-200 p-2 border-solid border-2 border-slate-400 mb-2 ">
              <Text className="pr-2">{item}</Text>
              <Icon name='minus-circle'/>
              <AntDesign
                style={styles.minusIcon}
                onPress={() => {
                  removeListItem(item)
                }}
                size={24}
                color="black"
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  )
}

export default GamesList
