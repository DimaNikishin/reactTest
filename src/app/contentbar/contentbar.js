import { AddPersonBlock } from './add-person-block/addPersonBlock'
import { PersonsTable } from './persons-table/personsTable'
import { FilterBlock } from './filter-block/filterBlock'

var ContentBar = React.createClass({
  render: function() {
    return (
      <div className="col-9 main-content">
        <AddPersonBlock />
        <PersonsTable />
        <FilterBlock />
      </div>
    );
  }
});

export { ContentBar }
