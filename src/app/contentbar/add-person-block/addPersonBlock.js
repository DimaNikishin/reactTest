import { AddPersonForm } from './add-person-form/addPersonForm'

var AddPersonBlock = React.createClass({
  render: function() {
    return (
      <div className="add-person">
        <h3>Add new person</h3>
        <AddPersonForm />
      </div>
    );
  }
});

export { AddPersonBlock }
