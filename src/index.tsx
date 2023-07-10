import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import { appReducer } from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(appReducer);

ReactDOM.render(
	<Provider store={store}>
		<App store={store} />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
