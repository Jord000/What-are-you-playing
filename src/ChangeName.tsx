import React, { useRef, useState } from 'react'
import { Text, View, Button, TextInput, Alert } from 'react-native'
import styles from './Styles'
interface Props {
  setDisplayName: Function
}

const ChangeName: React.FC<Props> = ({ setDisplayName }) => {
  const [name, setName] = useState<String>('___')
  const textInputRef = useRef<TextInput>(null)

  const pressSubmit: Function = () => {
    if (name.length > 0) {
      setDisplayName(`Hello ${name}`)
      setName('')
    } else {
      Alert.alert('OOPs', 'Name must be longer than 0 chars', [
        {
          text: 'ok',
        },
      ])
    }

    if (textInputRef.current) {
      textInputRef.current.clear()
    }
  }

  return (
    <View>
      <Text style={styles.changeNameTitle}>Change name:</Text>
      <View style={styles.changeName}>
        <TextInput
          style={styles.input}
          placeholder="My name is"
          onChangeText={(val) => {
            setName(val)
          }}
          ref={textInputRef}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              pressSubmit()
            }}
            title="submit"
          />
        </View>
      </View>
    </View>
  )
}

export default ChangeName
