import { StyleSheet, Text, View } from "react-native";
import Header from "./(layout)/Header";
import Body from "./(layout)/Body";
import { useEffect, useState } from "react";
import { Todo } from "@/interface/App";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  /** State */
  const [todos, setTodos] = useState<Todo[]>([]);

  /** Hooks */
  useEffect(() => {
    // Storage 에서 데이터 조회
    componentDidMount();
  }, []);
  useEffect(() => {
    if (!todos) {
      return;
    }

    // 저장소에는 String만 저장이 가능하다.
    AsyncStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /** Todo 추가 이벤트 */
  const addTodo = (todo: string) => {
    // 새로운 할일(todo) 객체 생성
    const newTodo = {
      id: Date.now(), // 등록시간
      text: todo,      // 할일 내용
      completed: false, // 완료 여부
    }   

    // state 업데이트
    setTodos((prev) => [...prev, newTodo]);
  }

  /** 완료 체크 이벤트 */
  const checkTodo = (id: number) => {
    setTodos((prev) => 
      prev.map((todo) => 
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }

  /** 삭제 이벤트 */
  const removeTodo = (id: number) => {
    setTodos((prev) => {//prev.filter((todo) => todo.id !== id)
      const findIdx = prev.findIndex((todo) => todo.id === id);
      prev.splice(findIdx, 1);
      return [...prev];
    });
  }

  /** 저장소(Storage) 에서 조회 */
  const componentDidMount = () => {
    AsyncStorage.getItem("todos").then((data) => {
      const todos = JSON.parse(data || '[]');
      setTodos(todos);
    });
  }

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Todo App</Text>
        <Header addTodo={addTodo} />
        <Body todos={todos} checkTodo={checkTodo} removeTodo={removeTodo} />
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