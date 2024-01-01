import React, { useRef, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native'
interface Props {
  setDisplayName: Function
}

const ChangeName: React.FC<Props> = ({ setDisplayName }) => {
  const [name, setName] = useState<String>('')
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
      <Text className="text-center font-medium">Change name:</Text>
      <View className="flex-row items-center">
        <TextInput
          className="border border-gray-400 rounded-sm p-1 px-8 mr-6"
          placeholder="My name is"
          onChangeText={(val) => {
            setName(val)
          }}
          ref={textInputRef}
        />
        <View className="my-4">
          <TouchableOpacity
            onPress={() => {
              pressSubmit()
            }}
          ><Text className='bg-orange-400 p-2 px-4 rounded-md'
          >submit</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ChangeName
