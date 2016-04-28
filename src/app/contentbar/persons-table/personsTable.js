
var PersonsTable = React.createClass({
  render: function() {
    return (
      <div className="user-table">
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>prop1</th>
                <th>prop2</th>
                <th>prop3</th>
                <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>name1</td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><span>X</span></td>
            </tr>
            <tr>
                <td>name2</td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><span>X</span></td>
            </tr>
            <tr>
                <td>name3</td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><input type="checkbox" /></td>
                <td className="with-input"><span>X</span></td>
            </tr>
          </tbody>
        </table>
    </div>
    );
  }
});

export { PersonsTable }
