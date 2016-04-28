import { TotalStat } from './statistic/total-statistic'
import { AdditionalStat } from './statistic/additional-statisctic'

var SideBar = React.createClass({
  render: function() {
    return (
      <div className="col-3 side-content">
        <div className="title"><h3>Sidebar</h3></div>
        <TotalStat />
        <AdditionalStat />
      </div>
    );
  }
});

export { SideBar }
