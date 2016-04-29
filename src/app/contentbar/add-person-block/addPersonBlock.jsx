import { AddPersonForm } from './add-person-form/addPersonForm.jsx'

var AddPersonBlock = React.createClass({

  propTypes: {
    statistic: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
  },

  render: function() {
    return (
      <div className="add-person-block">
        <h3>Add new person</h3>
        <AddPersonForm statistic={this.props.statistic} />
      </div>
    );
  }
});

export { AddPersonBlock }
