import React from 'react';

var AdditionalStat = React.createClass({

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
    var propsNodes = this.props.statistic.map(function(prop) {
      return (
        <div className="properties"><p onClick={this.displayByKey.bind(null,prop.key)}>{prop.title}: {prop.quantity}</p></div>
      );
    }, this);
    return (
      <div className="additional-statistic">
        {propsNodes}
      </div>
    );
  }
});

export { AdditionalStat }
