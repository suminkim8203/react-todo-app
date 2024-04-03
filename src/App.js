import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoListItem from "./components/TodoListItem";
import TodoTemplate from "./components/TodoTemplate";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
