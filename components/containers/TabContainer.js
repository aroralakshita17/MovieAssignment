import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieContainer from './MovieContainer';
import MoviesListContainer from './MoviesListContainer';
import OnlyMovieContainer from './OnlyMovieContainer';
import TVContainer from './TVContainer';
import TVListContainer from './TVListContainer';
const Tab = createMaterialTopTabNavigator();

function TabContainer() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={OnlyMovieContainer} />
      <Tab.Screen name="SearchResult" component={MoviesListContainer} />
      <Tab.Screen name="TVShows" component={TVListContainer} />
    </Tab.Navigator>
  );
}
export default TabContainer