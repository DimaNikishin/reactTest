import React from 'react';

import { CorrectTotalStat } from './statistic/total-statistic.jsx'
import { CorrectAdditionalStat } from './statistic/additional-statisctic.jsx'

var SideBar = React.createClass({

  render: function() {
    return (
      <div className="col-3 side-content">
        <div className="title"><h3>Sidebar</h3></div>
        <CorrectTotalStat/>
        <CorrectAdditionalStat/>
      </div>
    );
  }
});

export { SideBar }
