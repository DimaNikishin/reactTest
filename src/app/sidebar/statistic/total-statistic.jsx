

var TotalStat = React.createClass({

  propTypes: {
    total: React.PropTypes.number.isRequired,
    onUserFilter: React.PropTypes.func.isRequired
  },

  /**
   * call back function to update state in app.jsx components
   */
  displayAll: function(){
    this.props.onUserFilter()
  },

  render: function() {
    return (
      <div className="total-statistic"><h3 onClick={this.displayAll}>Total Persons: {this.props.total}</h3></div>
    );
  }
});

export { TotalStat }
