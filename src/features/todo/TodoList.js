import React from 'react'
import { useRecoilValue } from 'recoil'
import { TodoItemCreator } from './components/TodoItemCreator';
import { selector } from '../../app/store';
import { TodoListStats } from './components/TodoListStats';
import { TodoItem } from './components/TodoItem';
import { TodoListFilters } from './components/TodoListFilters';

const { filteredTodoListState } = selector

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}