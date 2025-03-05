import { Todos } from "@/interface/Body";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Body = ({ todos, checkTodo, removeTodo }: Todos) => {
//   const state = [
//     {
//         text: '할일1',
//         completed: false,
//     },
//     {
//         text: '할일2',
//         completed: true,
//     },
//     {
//         text: '할일3',
//         completed: false,
//     },
//   ]
    useEffect(() => {
        console.log('Body Init');
        console.dir(todos);
    }, []);

  return (
    <>
      <View style={styles.container}>
          {
            todos?.map((data: { id: number; completed: any; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, idx) => (
                <View key={idx} style={styles.todo}>
                    <View style={styles.todoText}>
                        <TouchableOpacity
                            style={styles.todoCheckbox}
                            onPressOut={() => checkTodo(data.id)}
                        >
                            {
                                data.completed
                                ? <MaterialCommunityIcons size={20} name='checkbox-marked-circle-outline' />
                                : <MaterialCommunityIcons size={20} name='checkbox-blank-circle-outline' />
                            }
                        </TouchableOpacity>
                        <Text style={[data.completed? styles.todoCompleted : '']}>{data.text}</Text>
                    </View>
                    <TouchableOpacity
                      onPressOut={() => removeTodo(data.id)}
                    >
                        <MaterialCommunityIcons style={styles.todoDelBtn} size={30} name='delete-outline' />
                    </TouchableOpacity>
                </View>
            ))
          }
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      marginVertical: 5,
      marginHorizontal: 20,
      padding: 10,
      backgroundColor: "#FFF",
      borderRadius: 10,
  },
  todo: {
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: 'space-between',
      height: 50,
      borderBottomColor: "#bbb",
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  todoCheckbox: {
      marginRight: 5,
  },
  todoText: {
      flexDirection: 'row',
  },
  todoDelBtn: {
      color: '#777'
  },
  todoCompleted: {
      color: '#bbb',
      textDecorationLine: 'line-through',
    }
});
export default Body;