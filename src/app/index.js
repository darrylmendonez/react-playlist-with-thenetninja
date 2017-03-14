var React = require('react');
var ReactDOM = require('react-dom');

// create component
var TodoComponent = React.createClass({
  getInitialState: function() {
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
      age: 30
    }
  },
  render: function() {
    var todos = this.state.todos;
    todos = todos.map(function(item, index) {
      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <p>{this.state.age}</p>
        <ul>{todos}</ul>
      </div>
    );
  }, // render

  // custom functions
  onDelete: function(item) {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  }
});

// create TodoItem component
var TodoItem = React.createClass({
  render: function() {
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

  // custom functions
  handleDelete: function() {
    this.props.onDelete(this.props.item);
  }
})

// put component into html page
ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
