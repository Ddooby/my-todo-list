import { StyleSheet, Text, View } from "react-native";
import Header from "./(layout)/Header";
import Body from "./(layout)/Body";
import { useEffect, useState } from "react";
import { Todo } from "@/interface/App";

const App = () => {
  /** State */
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {

  }, []);

  const addTodo = (todo: string) => {
    // 새로운 할일(todo) 객체 생성
    const newTodo = {
      id: Date.now(), // 등록시간
      text: todo,      // 할일 내용
      completed: false, // 완료 여부
    }   

    // state 업데이트
    setTodos((prev) => [...prev, newTodo]);

    console.dir(todos);
  }


  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={addTodo} />
        <Body />
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});
export default App;