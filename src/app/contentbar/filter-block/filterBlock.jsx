
var FilterBlock = React.createClass({

  propTypes: {
    statistic: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    onUserFilter: React.PropTypes.func.isRequired
  },

  /**
   * call back function to update state in app.jsx components
   * @return {key} propery key name to filter by
   */
  displayByKey: function(key){
    this.props.onUserFilter(key)
  },

  render: function() {
    var filterNodes = this.props.statistic.map(function(filter) {
      return (
        <span onClick={this.displayByKey.bind(null,filter.key)} className={filter.activeFilter ? 'active' : ''}>{filter.title}</span>
      );
    },this);
    return (
      <div className="filter-block">
        {filterNodes}
      </div>
    );
  }
});

export { FilterBlock }
