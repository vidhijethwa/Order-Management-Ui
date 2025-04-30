'use client';
import { useState } from 'react';
import DashboardLayout from '@/app/sidebar/layout';
import { placeOrder } from '@/app/service/orders.service';

export default function PlaceOrders() {
      const [orderType, setOrderType] = useState('');
      const [quantity, setQuantity] = useState('');
      const [responseMsg, setResponseMsg] = useState('');

      const handleSubmit = async () => {
            try {
                  const data = await placeOrder(orderType, quantity);
                  setResponseMsg(data.message);
                  setOrderType('');
                  setQuantity('');
            } catch (err: any) {
                  setResponseMsg(err.message);
            }
      };

      return (
            <DashboardLayout>
                  <main className="flex flex-col items-center justify-start min-h-screen bg-black text-white p-8">
                        <h1 className="text-4xl font-bold mb-6">Place Orders</h1>


                        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

                              <div className="mb-4">
                                    <label className="block mb-2 text-black">Order Type</label>
                                    <input
                                          type="text"
                                          value={orderType}
                                          onChange={(e) => setOrderType(e.target.value)}
                                          placeholder="e.g. shirt"
                                          className="w-full px-4 py-2 rounded border border-gray-300 text-black placeholder-black"
                                    />
                              </div>

                              <div className="mb-4">
                                    <label className="block mb-2 text-black">Quantity</label>
                                    <input
                                          type="number"
                                          value={quantity}
                                          onChange={(e) => setQuantity(e.target.value)}
                                          placeholder="e.g. 5"
                                          className="w-full px-4 py-2 rounded border border-gray-300 text-black placeholder-black"
                                    />
                              </div>

                              <button
                                    onClick={handleSubmit}
                                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
                              >
                                    Place Order
                              </button>

                              {responseMsg && (
                                    <p className="mt-4 text-sm text-black">{responseMsg}</p>
                              )}
                        </div>
                  </main>
            </DashboardLayout>
      );
}
