import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput,} from 'react-native'
interface Props {}

const App: React.FC<Props> = ()=>{
  const [name, setName] = useState<String>('Jordan')
  const [gameChosen, setGameChosen] = useState<String>('Mario')

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
      <View style={styles.buttonContainer}>
        <Button title="submit" />
      </View>
      <Text>Change name:</Text>
      <TextInput
        style={styles.input}
        placeholder="My name is"
        onChangeText={(val) => {
          setName(val)
        }}
      />
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
})

export default App
