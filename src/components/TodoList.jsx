import useTodos from "./hooks/useTodos";
const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <ul>
      {todos?.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
