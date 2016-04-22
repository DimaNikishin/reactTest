import { AddPersonBlock } from './add-person-block/addPersonBlock'

var ContentBar = React.createClass({
  render: function() {
    return (
      <div className="main-bar col-md-8">
        <AddPersonBlock />
      </div>
    );
  }
});

export { ContentBar }
