import { createAtom } from '../utils/createAtom';
import { createSelector } from '../utils/createSelector';

const {
  textState,
  atomTodoListState,
  atomTodoListFilterState,
} = createAtom({
  textState: '',
  atomTodoListState: [],
  atomTodoListFilterState: 'Show All',
})

const {
  charCountState,
  filteredTodoListState,
  todoListStatsState,
} = createSelector({
  filteredTodoListState: ({get}) => {
    const filter = get(atomTodoListFilterState);
    const list = get(atomTodoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
  todoListStatsState: ({get}) => {
    const todoList = get(atomTodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
  charCountState: ({get}) => {
    const text = get(textState);

    return text.length;
  },
})

const atom = {
  textState,
  atomTodoListFilterState,
  atomTodoListState,
}

const selector = {
  charCountState,
  filteredTodoListState,
  todoListStatsState,
}

export {
  atom,
  selector,
}