import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n/i18n';
import { Provider } from 'react-redux';
import persistedStore from './store/redux-store/configureStore'
export async function initApp() {
  const { store } = await persistedStore();

  ReactDOM.render(
    <div>
      <Provider store={store}>
        <I18nextProvider i18n={i18n as any}>
          <App />
        </I18nextProvider>
      </Provider>
    </div>,
    document.getElementById("root") as HTMLDivElement
  );
}

initApp();

