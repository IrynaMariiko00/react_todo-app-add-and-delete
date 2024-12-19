import React, { Dispatch, SetStateAction } from 'react';
import { Todo } from '../../types/Todo';
import { FilterBy } from '../../types/FilterBy';

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
  currentFilter: FilterBy;
  setCurrentFilter: Dispatch<SetStateAction<FilterBy>>;
};

export const Footer: React.FC<Props> = ({
  currentFilter,
  setCurrentFilter,
  todos,
  setTodos,
}) => {
  const activeTodos = todos.filter(todo => !todo.completed);

  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {activeTodos.length} items left
      </span>

      <nav className="filter" data-cy="Filter">
        <a
          href="#/"
          data-cy="FilterLinkAll"
          className={`filter__link ${currentFilter === FilterBy.All && 'selected'}`}
          onClick={() => {
            setCurrentFilter(FilterBy.All);
          }}
        >
          All
        </a>

        <a
          href="#/active"
          data-cy="FilterLinkActive"
          className={`filter__link ${currentFilter === FilterBy.Active && 'selected'}`}
          onClick={() => {
            setCurrentFilter(FilterBy.Active);
          }}
        >
          Active
        </a>

        <a
          href="#/completed"
          data-cy="FilterLinkCompleted"
          className={`filter__link ${currentFilter === FilterBy.Completed && 'selected'}`}
          onClick={() => {
            setCurrentFilter(FilterBy.Completed);
          }}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={todos.every(todo => !todo.completed)}
        onClick={handleClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
