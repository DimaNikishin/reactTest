import { TotalStat } from './statistic/total-statistic'
import { AdditionalStat } from './statistic/additional-statisctic'

var SideBar = React.createClass({
  render: function() {
    return (
      <div className="side-bar col-md-2">
        <div className="statistic">
          <div className="title"><h3>Sidebar</h3></div>
          <TotalStat />
          <AdditionalStat />
        </div>
      </div>
    );
  }
});

export { SideBar }
