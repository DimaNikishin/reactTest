import React from 'react';

import { AddPersonBlock } from './add-person-block/addPersonBlock.jsx'
import { CorrectPersonsTable } from './persons-table/personsTable.jsx'
import { CorrectFilterBlock } from './filter-block/filterBlock.jsx'

var ContentBar = React.createClass({

  render: function() {
    return (
      <div className="col-9 main-content">
        <AddPersonBlock/>
        <CorrectPersonsTable/>
        <CorrectFilterBlock/>
      </div>
    );
  }
});

export { ContentBar }
