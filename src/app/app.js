import { ContentBar } from './contentbar/contentbar'
import { SideBar } from './sidebar/sidebar'

var MainContent = React.createClass({
  render: function() {
    return (
      <div className="col-10 col-offset-1">
        <ContentBar />
        <SideBar />
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent />,
  document.getElementById('root')
);
