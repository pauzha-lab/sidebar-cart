import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, ShoppingBagIcon, ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { hideCart } from '../../redux/cart';
import CartItem from './CartItem';


const SidebarCart = () => {

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch()

    return (
        <Transition.Root show={cart.showCart} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => dispatch(hideCart())}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-hidden bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto py-6 px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => dispatch(hideCart())}
                                                    >
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>
                                            {
                                                cart.items.length > 0 ?
                                                    <div className="mt-8">
                                                        <div className="flow-root">
                                                            <ul className="-my-6 divide-y divide-gray-200">
                                                                {cart.items.map((product) => (
                                                                    <CartItem product={product} key={product.sku} />
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="mt-20 text-center">
                                                        <div className='mx-10 my-10 flex justify-center'>
                                                            <ShoppingBagIcon className='h-40 w-40 text-gray-400' />
                                                        </div>
                                                        <p className='text-gray-500'>Your bag is empty</p>
                                                    </div>
                                            }

                                        </div>
                                        {
                                            cart.items.length > 0 ? <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                                                <div className="flex justify-between text-base font-medium text-gray-900">
                                                    <p>Total</p>
                                                    <p>${cart.totalAmount}</p>
                                                </div>
                                                <p className="my-2 text-sm text-gray-500">
                                                    Offers, Shipping and taxes calculated at checkout.</p>
                                                <div className="mt-6">
                                                    <div className="flex justify-center space-x-4">
                                                        <a
                                                            href="/#"
                                                            onClick={() => dispatch(hideCart())}
                                                            className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-800"
                                                        >
                                                            <ArrowLongLeftIcon className='h-6 w-6 text-white mr-4' /> Shop more
                                                        </a>
                                                        <a
                                                            href="/#"
                                                            onClick={() => dispatch(hideCart())}
                                                            className="flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-800"
                                                        >
                                                            Checkout
                                                            <ShoppingBagIcon className='h-6 w-6 text-white ml-6' />
                                                        </a>
                                                    </div>

                                                </div>
                                            </div> : ""}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default SidebarCart;