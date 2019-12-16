import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Menu from './pages/Menu';
import Dancer from './pages/Dancer';
import List from './pages/List';

const Routes = createAppContainer(
  createSwitchNavigator({
    Menu,
    Dancer,
    List
  })
);

export default Routes;