import { TotalStat } from './statistic/total-statistic.jsx'
import { AdditionalStat } from './statistic/additional-statisctic.jsx'

var SideBar = React.createClass({

  propTypes: {
    statistic: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    total: React.PropTypes.number.isRequired,
    onUserFilter: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div className="col-3 side-content">
        <div className="title"><h3>Sidebar</h3></div>
        <TotalStat total={this.props.total} onUserFilter={this.props.onUserFilter}/>
        <AdditionalStat statistic={this.props.statistic} onUserFilter={this.props.onUserFilter}/>
      </div>
    );
  }
});

export { SideBar }
