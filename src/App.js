import { Switch, Route } from 'react-router'

import Homepage from './pages/Homepage'
import Checkout from './pages/Checkout'

import { CartProvider } from './contexts/CartContext'

function App() {
  return (
    <>
      <Switch>
        <CartProvider>
          <Route path="/" exact component={Homepage}/>
          <Route path="/checkout" component={Checkout}/>
        </CartProvider>
      </Switch>
    </>
  );
}

export default App;
