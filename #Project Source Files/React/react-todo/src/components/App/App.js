import React, { Component } from 'react';

// Import React Components:
import AppHeader from '../AppHeader/AppHeader';
import SearchPanel from '../SearchPanel/SearchPanel';
import TodoList from '../TodoList/TodoList';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter';
import ItemFormAdd from '../ItemFormAdd/ItemFormAdd';

// Import Assets Files:
import './App.css';

// App Component:
export default class App extends Component {

  maxId = 10;

  state = {
    todoData: [
      this.createTodoItem('Create Todo'),
      this.createTodoItem('Learn React'),
      this.createTodoItem('Make Awesome App')
    ],
    term: '',
    filter: 'all'
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  getIndex(id, state) {
    const itemIndex = state.findIndex((item) => item.id === id)
    return itemIndex
  }

  // Functions
  deleteItem = (id) => {
    
    this.setState(({ todoData }) => {
      // const delIndex = todoData.findIndex((item) => item.id === id)
      this.getIndex(id, this.state.todoData)

      const newArray = [
        ...todoData.slice(0, this.getIndex(id, this.state.todoData)),
        ...todoData.slice(this.getIndex(id, this.state.todoData) + 1, todoData.length)];

      return {
        todoData: newArray
      }
    })
  };

  addItem = (text) => {
    
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      }
    })

  }

  toggleProperty(arr, id, propName) {

    this.getIndex(id, this.state.todoData);

    const oldItem = arr[this.getIndex(id, this.state.todoData)];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    }

    return [
      ...arr.slice(0, this.getIndex(id, this.state.todoData)),
      newItem,
      ...arr.slice(this.getIndex(id, this.state.todoData) + 1)
    ];
  }

  onToggleImportant = (id) => {

    this.setState(({ todoData }) => {
     
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {

    this.setState(({ todoData }) => {
     
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  search(items, term) {

    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {

      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  onChangeHandler = (term) => {
    this.setState({ term });
  }

  filter(items, filter) {

    switch (filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    };
  }

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  render() {

    const { todoData, term, filter } = this.state;

    const doneCount = todoData.filter((item) => item.done === true).length;
    const todoCount = todoData.length - doneCount;

    const visibleItems = this.filter(this.search(todoData, term), filter)

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onChangeHandler={this.onChangeHandler} / >
          <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>

        <TodoList
          todos={visibleItems}
          onDeleted={(id) => this.deleteItem(id)}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemFormAdd addItem={this.addItem}/>
      </div>
  );

  }

}