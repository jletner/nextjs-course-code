import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact={true}>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup" exact={true}>
          <NewMeetupPage />
        </Route>
        <Route path="/favorites" exact={true}>
          <FavoritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
