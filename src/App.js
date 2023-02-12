import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import Shop from './routes/shop/shop.components.jsx';
import Checkout from './routes/checkout/checkout.components.jsx';
import Authentication from './routes/authentication/authentication.component.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
