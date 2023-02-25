import { Route, Routes } from 'react-router-dom';
import CartPage from '../cart-page/CartPage';
import ContactsPage from '../contacts-page/ContactsPage';
import CreatePage from '../create-page/CreatePage';
import ItemPage from '../item-page/ItemPage';
import MainPage from '../main-page/MainPage';
import Page404 from '../page404/Page404';
import StorePage from '../store-page/StorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/store" element={<StorePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/item/:id" element={<ItemPage />} />
      <Route path="/contact" element={<ContactsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
