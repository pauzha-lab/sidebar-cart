import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeCartItem } from '../../redux/cart';
import { TrashIcon } from '@heroicons/react/24/outline'

const CartItem = ({ product }) => {

    const dispatch = useDispatch();

    return (
        <li key={product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href="/#">{product.title}</a>
                        </h3>
                        <p className="font-semibold text-gray-900">${product.price * product.quantity}</p>
                    </div>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="flex">
                        <div className="custom-number-input h-6 w-20">
                            <div className="flex flex-row h-6 w-full rounded-lg relative bg-transparent ">
                                <button
                                    onClick={() => dispatch(decreaseQuantity(product.id))}
                                    className="transition ease-in-out delay-150 bg-gray-100 text-blue-600 hover:text-blue-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                                    <span className="m-auto text-md font-semibold">−</span>
                                </button>
                                <input
                                    type="number"
                                    className="outline-none focus:outline-none text-center w-full bg-gray-100 font-semibold text-md hover:text-blue-700 focus:text-gray  md:text-basecursor-default flex items-center text-blue-700"
                                    name="custom-input-number" value={product.quantity} readOnly>
                                </input>
                                <button
                                    onClick={() => dispatch(increaseQuantity(product.id))}
                                    className="bg-gray-100 text-blue-600 hover:text-blue-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                                    <span className="m-auto text-md font-semibold">+</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-500">Quantity</p>
                </div>
                <div className="flex flex-1 items-end justify-between">
                    <p className="font-semibold text-gray-900"></p>
                    {/* <p className="text-gray-500">Qty {product.quantity}</p> */}
                    <div className="flex">
                        <button
                            type="button"
                            className="text-blue-800 hover:text-blue-500"
                            onClick={() => dispatch(removeCartItem(product.id))}
                        >
                            <TrashIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CartItem;