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
    borderRadius: 3,
  },
  boldTitle: {
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'grey',
    minWidth: 200,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    height: '75%',
    marginRight: 20,
  },
  games: {
    fontWeight: '500',
    padding: 15,
    backgroundColor: '#faebc8',
    marginBottom: 20,
    marginHorizontal: 5,
  },
  gamesList: {
    flex: 1,
    minHeight: 100,
    padding: 10,
    paddingBottom: 20,
    backgroundColor: '#faebc8',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
  listItem: {
    backgroundColor: '#ffc654',
    padding:3,
    paddingHorizontal:10,
    margin:3,
    borderRadius:3,
    flexDirection:'row'
  },
  minusIcon:{
    marginLeft:'auto'
  },
  listText:{
    paddingRight:5,
  },
  changeName: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  changeNameTitle: {
    fontWeight: '500',
    textAlign: 'center',
  },
})

export default styles
