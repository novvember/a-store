import { Route, Routes } from 'react-router-dom';
import Main from '../main/Main';
import Page from '../page/Page';
import Page404 from '../page404/Page404';
import Store from '../store/Store';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page>
            <Main />
          </Page>
        }
      />
      <Route
        path="store"
        element={
          <Page>
            <Store />
          </Page>
        }
      />
      <Route path="create" element={<Page>Свой дизайн</Page>} />
      <Route path="contact" element={<Page>Контакты</Page>} />
      <Route path="cart" element={<Page>Корзина</Page>} />
      <Route
        path="*"
        element={
          <Page>
            <Page404 />
          </Page>
        }
      />
    </Routes>
  );
}

export default App;
