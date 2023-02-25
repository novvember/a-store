import CartList from '../cart-list/CartList';
import OrderForm from '../order-form/OrderForm';
import Page from '../page/Page';
import SectionHeader from '../section-header/SectionHeader';
import './CartPage.css';

function CartPage() {
  return (
    <Page>
      <SectionHeader type="primary" title="Оформление заказа" subtitle="" />
      <div className="cart-page">
        <OrderForm />
        <CartList />
      </div>
    </Page>
  );
}

export default CartPage;
