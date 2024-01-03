import {
  Modal,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'
import React, { useRef, useState } from 'react'

interface Props {
  isNameModal: boolean
  setDisplayName: Function
  setIsNameModal: Function
}

const NameModal: React.FC<Props> = ({
  isNameModal,
  setIsNameModal,
  setDisplayName,
}) => {
  const textInputRef = useRef<TextInput>(null)
  const [name, setName] = useState<String>('')

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
    <Modal
      transparent={true}
      animationType="fade"
      visible={isNameModal}
    >
      <View className="flex-column items-center justify-center flex-1">
        <View className="bg-white flex-row justify-center h-20 items-center border rounded-sm border-solid border-gray-200 shadow-lg">
          <TextInput
            className="border border-gray-400 rounded-sm p-1 px-8 mr-6 h-10 m-10"
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
                setIsNameModal(!isNameModal)
              }}
            >
              <Text className="bg-orange-400 p-2 px-4 rounded-md mr-6">
                submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default NameModal
