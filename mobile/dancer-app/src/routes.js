import {
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';

import Menu from './pages/Menu';
import Dancer from './pages/Dancer';
import DancerList from './pages/DancerList';

const Routes = createAppContainer(
    createSwitchNavigator({
        Menu,
        Dancer,
        DancerList
    })
);

export default Routes;
