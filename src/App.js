import { Route, Router } from "react-router-dom";
import history from "./components/history";
import Header from "./components/Header";
import StreamCreate from "./components/streams/StreamCreate";
import StreamDelete from "./components/streams/StreamDelete";
import StreamEdit from "./components/streams/StreamEdit";
import StreamList from "./components/streams/StreamList";
import StreamShow from "./components/streams/StreamShow";

function App() {
  return (
    <div className="ui container">
       <Router history={history}>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/stream/create" component={StreamCreate} />
        <Route path="/stream/show" component={StreamShow} />
        <Route path="/stream/edit/:id" component={StreamEdit} />
        <Route path="/stream/delete/:id" component={StreamDelete} />
      </Router>
    </div>
  );
}

export default App;
