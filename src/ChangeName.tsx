import React, { useRef, useState } from 'react'
import {
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native'
import NameModal from './NameModal'


interface Props {
  setDisplayName: Function
}

const ChangeName: React.FC<Props> = ({ setDisplayName }) => {
  const [isNameModal, setIsNameModal] = useState<boolean>(false)

  return (
    <View>
      <Pressable
        onPress={() => {
          setIsNameModal(!isNameModal)
        }}
      >
        <Text className="text-center font-medium border-solid border rounded-md p-4 bg-orange-100 shadow-lg">
          Change or set a name
        </Text>
      </Pressable>
  <NameModal setDisplayName={setDisplayName} isNameModal={isNameModal} setIsNameModal={setIsNameModal}/>
    </View>
  )
}

export default ChangeName
