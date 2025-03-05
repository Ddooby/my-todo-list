import { TodoFormProps } from "@/interface/App";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import { NativeSyntheticEvent, StyleSheet, TextInput, TextInputSubmitEditingEventData, TouchableOpacity, View } from "react-native";

const Header: React.FC<TodoFormProps> = ({ addTodo }) => {
  
  /** State */
  const [newTodo, setNewTodo] = useState('');

  const addNewTodo = () => {
    console.log('addNewTodo Init');
    if (newTodo) {
      addTodo(newTodo);
      setNewTodo('');
    }
  }

  const handleEnterAdd = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
    addNewTodo();
  }

  return (
    <>
      <View style={styles.container}>
          <View style={styles.input}> 
              <TextInput 
                  style={styles.inputText}
                  placeholder='Enter new todo'
                  autoCorrect={ false }
                  value={newTodo}
                  onChangeText={(newTodo) => setNewTodo(newTodo)}
                  onSubmitEditing={handleEnterAdd}
              />
              <TouchableOpacity onPressOut={addNewTodo}>
                  <MaterialCommunityIcons style={styles.addBtn} size={30} name='plus-circle' />
              </TouchableOpacity>
          </View>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
      marginLeft: 20,
      marginRight: 20,
  },
  input: {
      borderRadius: 10,
      backgroundColor: "#FFF",
      paddingLeft: 10,
      paddingRight: 10,
      height: 50,
      alignItems: "center",
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: "#bbb",
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputText: {
      flex: 1,
  },
  addBtn: {
      color: '#4169E1'
  }
});
export default Header;