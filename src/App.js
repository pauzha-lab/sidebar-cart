import { Card, CardSettings } from './components/Card';
import ItemCarousel from './components/ItemsCarousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import './App.css';
import { useDispatch } from 'react-redux';
import { showCart } from './redux/cart';
import SidebarCart from './components/SidebarCart';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { products } from './constant';
import { Toaster } from 'react-hot-toast';


function App() {

  const dispatch = useDispatch();

  return (
    <div className="container mx-auto px-5">
      <div className="py-5">
        <div className='flex justify-center'>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2"
            onClick={() => dispatch(showCart())}>
            <ShoppingCartIcon className="h-5 w-5 text-white inline mr-2" />
            Show cart
          </button>

        </div>

      </div>
      <div className="grid grid-cols-1 gap-4">
        <div className="py-2">
          <ItemCarousel settings={CardSettings}>
            {
              products.map((product) => {
                return (
                  <Card Product={product} key={product.id} />
                )
              })
            }
          </ItemCarousel>
        </div>
      </div>
      <SidebarCart />
      <Toaster position="bottom-center" />
    </div>
  );
}

export default App;
