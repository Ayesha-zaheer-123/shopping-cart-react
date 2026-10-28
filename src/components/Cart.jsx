import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../store/CartSlice'
function Cart() {
  const items = useSelector((state) => state.cart.items)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  const dispatch = useDispatch()
  if (items.length === 0) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          Your cart is empty
        </h2>
        <p className="mt-2 text-slate-500">
          Looks like you haven't added any products yet.
        </p>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Your Shopping Cart
        </h1>
        <p className="mb-8 text-slate-500">
          {items.length} {items.length === 1 ? 'item' : 'items'} in your cart
        </p>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 w-full object-contain sm:w-32"
                />
                <div className="flex flex-1 flex-col">
                  <h2 className="font-semibold text-slate-800">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-xl font-bold text-slate-900">
                    ${item.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromCart(item))}
                    className="mt-4 w-fit rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-600 hover:text-white"
                  >
                    Remove from cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Order Summary
            </h2>
            <div className="mt-6 flex justify-between text-slate-600">
              <span>Items</span>
              <span>{items.length}</span>
            </div>

            <div className="mt-4 flex justify-between text-slate-600">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className="my-5 border-t border-slate-200" />

            <div className="flex justify-between text-lg font-bold text-slate-900">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <button
              className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              onClick={() => alert('Checkout feature coming soon!')}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart