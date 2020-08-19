import React from 'react'
import { useRecoilState } from 'recoil'
import { atom } from '../../../app/store';

const { atomTodoListFilterState } = atom

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(atomTodoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}