'use client';

import DashboardLayout from "@/app/sidebar/layout";

export default function PlaceOrders() {
      return (
            <DashboardLayout>
                  <main className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-6 py-12">
                        <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                              <div className="w-[600px] h-[600px] bg-blue-500 opacity-20 blur-3xl rounded-full absolute top-1/3 left-1/2 -translate-x-1/2" />
                        </div>

                        <div className="relative z-10 bg-white/10 border border-white/20 rounded-2xl p-10 shadow-xl backdrop-blur-lg text-center max-w-md w-full hover:scale-[1.02] transition-transform duration-300">
                              <h2 className="text-3xl font-semibold mb-4">Welcome, User</h2>
                              <p className="text-3xl font-bold text-green-400">Go and place your order</p>
                        </div>
                  </main>
            </DashboardLayout>
      );
}
