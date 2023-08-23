import {Provider} from 'react-redux';
import {store} from './app/store';
import MainPage from './components/MainPage';

const App = () => {
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
};

export default App;
