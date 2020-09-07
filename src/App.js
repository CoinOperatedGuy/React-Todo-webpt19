import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const items = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items
    };
  }

  addItem = (e, item) => {
    e.preventDefault();

    const newItem = {
      name: item,
      id: Date.now(),
      completed: false
    };

    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  toggleItem = itemId => {
    console.log(itemId);

    this.setState({
      items: this.state.items.map(item => {
        console.log(item);
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      items: this.state.items.filter(item => !item.completed)
    });
  };

  render() {
    console.log('rendering...');
    return (
      <div className='App'>
        <div className='Header'>
          <h1>ToDo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          items={this.state.items}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
          className='List'
        />
      </div>
    );
  }
}

export default App;
