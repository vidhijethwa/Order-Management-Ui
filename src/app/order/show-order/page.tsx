'use client';
import { useEffect, useState } from 'react';
import DashboardLayout from '@/app/sidebar/layout';
import { fetchOrders } from '@/app/service/orders.service';

interface Order {
      _id: string;
      orderType: string;
      quantity: string;
}

export default function ShowOrders() {
      const [orders, setOrders] = useState<Order[]>([]);
      const [error, setError] = useState('');

      useEffect(() => {
            const getOrders = async () => {
                  try {
                        const orderData = await fetchOrders();
                        setOrders(orderData.data || []);
                  } catch (err: any) {
                        setError(err.message);
                  }
            };

            getOrders();
      }, []);

      return (
            <DashboardLayout>
                  <main className="flex flex-col items-center justify-start min-h-screen bg-black text-white p-8">
                        <h1 className="text-4xl font-bold mb-6">Show Orders</h1>

                        {error && <p className="text-red-400">{error}</p>}

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
                              {orders.map((order) => (
                                    <div
                                          key={order._id}
                                          className="bg-white text-black p-4 rounded shadow border border-gray-300"
                                    >
                                          <p><span className="font-semibold">Order Type:</span> {order.orderType}</p>
                                          <p><span className="font-semibold">Quantity:</span> {order.quantity}</p>
                                    </div>
                              ))}
                        </div>

                        {orders.length === 0 && !error && (
                              <p className="mt-4 text-gray-400">No orders found.</p>
                        )}
                  </main>
            </DashboardLayout>
      );
}
