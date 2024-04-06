import { Grid, TodoListItem } from '..';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <>
      <Grid>
        {todos.map((todo, index) => (
          <TodoListItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            counter={index + 1}
            onDelete={onDelete}
          />
        ))}
      </Grid>
    </>
  );
};
