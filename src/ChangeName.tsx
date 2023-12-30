import React, { useRef, useState } from 'react'
import { Text, View, Button, TextInput } from 'react-native'
import styles from './Styles'
interface Props {
  setDisplayName: Function
}

const ChangeName: React.FC<Props> = ({ setDisplayName }) => {
  const [name, setName] = useState<String>('___')
  const textInputRef = useRef<TextInput>(null)
  const pressSubmit: Function = () => {
    setDisplayName(name)
    setName('')
    if (textInputRef.current) {
      textInputRef.current.clear()
    }
  }

  return (
    <View>
      <Text>Change name:</Text>
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
  )
}

export default ChangeName
