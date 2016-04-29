

var AddPersonForm = React.createClass({

  propTypes: {
    statistic: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function() {
    var checkBoxNodes = this.props.statistic.map(function(input) {
      return (
        <div className="inline"><input type="checkbox"></input> {input.title}</div>
      );
    });
    return (
      <div>
        <div className="inline"><input type="text" placeholder="Name" className="name-input"></input></div>
        {checkBoxNodes}
        <button className="add-button">Add</button>
      </div>
    );
  }
});

export { AddPersonForm }
