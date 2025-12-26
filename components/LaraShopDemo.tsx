
import React, { useState } from 'react';
import { X, ShoppingCart, LayoutDashboard, Store, Package, CreditCard, Trash2, Plus, Minus } from 'lucide-react';
import { Language } from '../types';

interface LaraShopDemoProps {
  onClose: () => void;
  lang: Language;
}

const LaraShopDemo: React.FC<LaraShopDemoProps> = ({ onClose, lang }) => {
  const [view, setView] = useState<'store' | 'admin'>('store');
  const [cart, setCart] = useState<{ id: number; name: string; price: number; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    { id: 1, name: "Premium Laptop", price: 1299, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=200" },
    { id: 2, name: "Wireless Headphones", price: 199, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=200" },
    { id: 3, name: "Smart Watch", price: 299, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200" },
    { id: 4, name: "Mechanical Keyboard", price: 149, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=200" },
  ];

  const addToCart = (p: typeof products[0]) => {
    setCart(prev => {
      const exists = prev.find(item => item.id === p.id);
      if (exists) return prev.map(item => item.id === p.id ? { ...item, qty: item.qty + 1 } : item);
      return [...prev, { ...p, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const t = {
    fr: {
      store: "Boutique",
      admin: "Administration",
      add: "Ajouter au panier",
      cart: "Votre Panier",
      checkout: "Payer avec Stripe",
      empty: "Le panier est vide",
      sales: "Ventes Totales",
      stock: "État du Stock",
      orders: "Commandes Récentes"
    },
    en: {
      store: "Storefront",
      admin: "Admin Dashboard",
      add: "Add to Cart",
      cart: "Your Cart",
      checkout: "Checkout with Stripe",
      empty: "Cart is empty",
      sales: "Total Sales",
      stock: "Inventory Status",
      orders: "Recent Orders"
    }
  }[lang];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-5xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-950">
          <div className="flex items-center space-x-6">
            <span className="text-xl font-black text-blue-600">LaraShop</span>
            <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-xl">
              <button 
                onClick={() => setView('store')}
                className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${view === 'store' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}
              >
                <Store className="w-4 h-4" /> <span>{t.store}</span>
              </button>
              <button 
                onClick={() => setView('admin')}
                className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-sm font-bold transition-all ${view === 'admin' ? 'bg-white dark:bg-gray-700 shadow-sm' : 'text-gray-500'}`}
              >
                <LayoutDashboard className="w-4 h-4" /> <span>{t.admin}</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {view === 'store' && (
              <button onClick={() => setIsCartOpen(true)} className="relative p-2 text-gray-600 dark:text-gray-300">
                <ShoppingCart className="w-6 h-6" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {cart.reduce((a, b) => a + b.qty, 0)}
                  </span>
                )}
              </button>
            )}
            <button onClick={onClose} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gray-50 dark:bg-gray-900/50">
          {view === 'store' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(p => (
                <div key={p.id} className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col">
                  <img src={p.image} className="w-full h-32 object-cover rounded-xl mb-4" alt={p.name} />
                  <h4 className="font-bold mb-1">{p.name}</h4>
                  <p className="text-blue-600 font-black mb-4">${p.price}</p>
                  <button 
                    onClick={() => addToCart(p)}
                    className="mt-auto w-full py-2 bg-gray-900 dark:bg-blue-600 text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center"
                  >
                    <Plus className="w-3 h-3 mr-2" /> {t.add}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">{t.sales}</p>
                  <p className="text-3xl font-black text-blue-500">$12,450.00</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">{t.stock}</p>
                  <p className="text-3xl font-black text-emerald-500">85% Safe</p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-2">Pending Orders</p>
                  <p className="text-3xl font-black text-orange-500">12</p>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 font-bold">{t.orders}</div>
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 dark:bg-gray-900 text-gray-400 font-bold uppercase text-[10px]">
                    <tr>
                      <th className="px-6 py-3">ID</th>
                      <th className="px-6 py-3">Customer</th>
                      <th className="px-6 py-3">Total</th>
                      <th className="px-6 py-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[101, 102, 103].map(id => (
                      <tr key={id} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="px-6 py-4">#ORD-{id}</td>
                        <td className="px-6 py-4">John Doe</td>
                        <td className="px-6 py-4 font-bold">$349.00</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-[10px] font-bold">PAID</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Cart Sidebar */}
        {isCartOpen && view === 'store' && (
          <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-950 border-l border-gray-200 dark:border-gray-800 shadow-2xl flex flex-col animate-tag-pop">
            <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <h3 className="font-bold flex items-center"><ShoppingCart className="w-4 h-4 mr-2" /> {t.cart}</h3>
              <button onClick={() => setIsCartOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-400 text-sm italic mt-10">{t.empty}</p>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-xl">
                    <img src={products.find(p => p.id === item.id)?.image} className="w-12 h-12 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate">{item.name}</p>
                      <p className="text-xs text-blue-500">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                       <span className="text-xs font-bold">x{item.qty}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
                <div className="flex justify-between font-black text-xl">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <CreditCard className="w-5 h-5 mr-2" /> {t.checkout}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LaraShopDemo;
