import { Text, View, FlatList } from 'react-native'
import styles from './Styles'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

interface Props {
  gameChosen: Array<String>
  setGameChosen: Function
}

const GamesList: React.FC<Props> = ({ gameChosen, setGameChosen }) => {
  const removeListItem: Function = (item: String) => {
    setGameChosen(gameChosen.splice((gameChosen.indexOf(item), 1)))
  }

  return (
    <View style={styles.gamesList}>
      <Text style={styles.boldTitle}>What are you currently playing?</Text>
      <FlatList
        style={styles.list}
        numColumns={1}
        data={gameChosen}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item}</Text>
            <AntDesign
              onPress={() => {
                removeListItem(item)
              }}
              style={styles.minusIcon}
              name="minuscircleo"
              size={24}
              color="black"
            />
          </View>
        )}
      />
    </View>
  )
}

export default GamesList
