import { Text, Form, TodoList } from 'components';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const onSubmit = text => {
    const todo = {
      text,
      id: nanoid(),
    };
    setTodos(prevTodos => [...prevTodos, todo]);
  };

  const onDelete = id => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
      <TodoList todos={todos} onDelete={onDelete} />
    </>
  );
};
