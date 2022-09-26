import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../redux/cart'

/**
 *  Product card fragment
 * 
 * @param {object} Product 
 * @returns <React.Fragment>
 */
const Card = ({ Product }) => {

    const dispatch = useDispatch();

    const AddToCart = () => {
        dispatch(addCartItem(Product));
        toast.success('Added a item to cart')
    };

    return (
        <div className="mx-10 my-10">
            <div className="shadow-md rounded-lg max-w-sm">
                <img
                    src={Product.image}
                    alt={Product.title}
                    className='object-fill w-auto h-auto'
                />
                <div className="px-5 py-2 pb-5">
                    <a href="/#">
                        <h3 className="py-2 text-gray-900 font-semibold text-lg tracking-tight">{Product.title}</h3>
                    </a>
                    <div className="flex items-center mt-2.5 mb-5">
                        <StarIcon className='h-4 w-4 text-yellow-300' />
                        <StarIcon className='h-4 w-4 text-yellow-300' />
                        <StarIcon className='h-4 w-4 text-yellow-300' />
                        <StarIcon className='h-4 w-4 text-yellow-300' />
                        <StarIcon className='h-4 w-4 text-yellow-300' />
                        <StarIcon className='h-4 w-4 text-yellow-300' />
                        <span className="mr-2 px-2.5 py-0.5 text-xs font-semibold  bg-blue-100 text-blue-800 rounded ml-3">5.0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 ">$ {Product.price}</span>
                        <button className="text-sm px-5 py-2.5 text-center text-white bg-blue-700 hover:bg-blue-800 rounded-lg" onClick={() => AddToCart()}>
                            <ShoppingCartIcon className="h-5 w-5 text-white inline mr-2" /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

/**
 * Carousel slick settings
 */
const CardSettings = {
    arrows: true,
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        }
    ]
};

export {
    Card,
    CardSettings
};