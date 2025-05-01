// services/orderService.ts

export const placeOrder = async (orderType: string, quantity: string) => {
      try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/placeOrder`, {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ orderType, quantity }),
            });

            const data = await res.json();

            if (!res.ok) {
                  throw new Error(data.message || 'Failed to place order');
            }

            return data;
      } catch (err: any) {
            throw new Error(err.message || 'Network error');
      }
};

export const fetchOrders = async () => {
      try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/fetchOrder`);

            const data = await res.json();

            if (!res.ok) throw new Error(data.message || 'Failed to fetch orders');

            return data;
      } catch (err: any) {
            throw new Error(err.message || 'Network error');
      }
};
