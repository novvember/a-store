import CartList from '../cart-list/CartList';
import OrderForm from '../order-form/OrderForm';
import SectionHeader from '../section-header/SectionHeader';
import './CartPage.css';

function CartPage() {
  return (
    <>
      <SectionHeader type="primary" title="Оформление заказа" subtitle="" />
      <div className="cart-page">
        <OrderForm />
        <CartList />
      </div>
    </>
  );
}

export default CartPage;
