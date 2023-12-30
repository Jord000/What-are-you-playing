import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#f5d57f',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginBottom: 5,
    borderRadius:3,

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
  games: {
    fontWeight: '500',
    padding: 20,
    backgroundColor: '#faebc8',
    marginBottom: 20,
    marginHorizontal: 5,
  },
})

export default styles