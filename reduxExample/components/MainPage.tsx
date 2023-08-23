import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToDo, removeTodo} from '../features/todo/TodoSlice';
const MainPage = () => {
  const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();

  const addToDoHandler = () => {
    dispatch(addToDo(todoInput));
    setTodoInput('');
  };

  const removeItemHandler = (id: any) => {
    dispatch(removeTodo(id));
  };

  const data = useSelector(state => state.todo);

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headingText}>Redux</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={[styles.input]}
          value={todoInput}
          onChangeText={text => setTodoInput(text)}
        />
        <TouchableOpacity onPress={() => addToDoHandler()}>
          <View style={styles.buttonBack}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.dataPart}>
        {data.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.item}
            onLongPress={() => removeItemHandler(item.id)}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontFamily: 'Arial',
    fontSize: 50,
  },
  body: {
    flex: 2,
  },
  input: {
    height: 40,
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#ccc',
    padding: 5,
    color: 'black',
  },
  buttonBack: {
    backgroundColor: '#fe4e00',
    height: 40,
    margin: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataPart: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fe4e00',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

export default MainPage;
