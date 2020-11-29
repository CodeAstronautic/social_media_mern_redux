import { createStore, applyMiddleware , compose} from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middlewares = [thunk];

export const store = createStore(rootReducer,compose( applyMiddleware(thunk ,...middlewares),
window.devToolsExtension ? window.devToolsExtension() : f => f));

export const persistor = persistStore(store);

export default { store, persistStore };
