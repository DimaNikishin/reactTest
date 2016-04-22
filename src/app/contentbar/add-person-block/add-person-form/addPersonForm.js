

var AddPersonForm = React.createClass({
  render: function() {
    return (
      <div>
        <div className="inline"><input type="text" placeholder="Name" className="name-input"></input></div>
        <div className="inline"><input type="checkbox"></input> Prop1</div>
        <div className="inline"><input type="checkbox"></input> Prop2</div>
        <div className="inline"><input type="checkbox"></input> Prop3</div>
        <button className="add-button">Add</button>
      </div>
    );
  }
});

export { AddPersonForm }
