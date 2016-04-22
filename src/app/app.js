import { ContentBar } from './contentbar/contentbar'
import { SideBar } from './sidebar/sidebar'

var MainContent = React.createClass({
  render: function() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="main-content col-md-11 col-md-offset-1">
            <ContentBar />
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <MainContent />,
  document.getElementById('root')
);
