
import React, { useState } from 'react';
import { X, CreditCard, Smartphone, CheckCircle2, ArrowRight, ShieldCheck, History, TrendingUp, DollarSign, Wallet } from 'lucide-react';
import { Language } from '../types';

interface PaymentGateDemoProps {
  onClose: () => void;
  lang: Language;
}

const PaymentGateDemo: React.FC<PaymentGateDemoProps> = ({ onClose, lang }) => {
  const [method, setMethod] = useState<'card' | 'momo'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactions, setTransactions] = useState([
    { id: 'TX-9821', amount: 45.00, method: 'Card', status: 'Success', date: 'Just now' },
    { id: 'TX-9820', amount: 120.50, method: 'MoMo', status: 'Success', date: '2 mins ago' },
  ]);

  const t = {
    fr: {
      title: "Passerelle de Paiement Multi-Canal",
      checkout: "Simulation de Paiement",
      amount: "Montant à régler",
      payNow: "Payer Maintenant",
      processing: "Traitement sécurisé...",
      success: "Paiement Réussi !",
      history: "Transactions Récentes",
      channels: {
        card: "Carte de Crédit (Stripe)",
        momo: "Mobile Money (Afrique)"
      },
      stats: {
        volume: "Volume Hebdo",
        success: "Taux de Succès"
      }
    },
    en: {
      title: "Multi-Channel Payment Gateway",
      checkout: "Payment Simulation",
      amount: "Amount to pay",
      payNow: "Pay Now",
      processing: "Securing transaction...",
      success: "Payment Successful!",
      history: "Recent Transactions",
      channels: {
        card: "Credit Card (Stripe)",
        momo: "Mobile Money (Africa)"
      },
      stats: {
        volume: "Weekly Volume",
        success: "Success Rate"
      }
    }
  }[lang];

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      const newTx = {
        id: `TX-${Math.floor(1000 + Math.random() * 9000)}`,
        amount: 89.99,
        method: method === 'card' ? 'Card' : 'MoMo',
        status: 'Success',
        date: 'Just now'
      };
      setTransactions([newTx, ...transactions]);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
      <div className="bg-slate-50 dark:bg-slate-950 w-full max-w-5xl h-[85vh] rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-slate-200 dark:border-slate-800">
        
        {/* Header */}
        <div className="px-8 py-6 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-800 dark:text-white leading-tight">{t.title}</h3>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest flex items-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
                API Aggregator Live
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Main Dashboard / Checkout */}
          <div className="flex-1 p-8 overflow-y-auto space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                <p className="text-xs font-bold text-slate-400 uppercase">{t.stats.volume}</p>
                <p className="text-2xl font-black text-slate-800 dark:text-white">$42,850.00</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-blue-500 mb-2" />
                <p className="text-xs font-bold text-slate-400 uppercase">{t.stats.success}</p>
                <p className="text-2xl font-black text-slate-800 dark:text-white">99.8%</p>
              </div>
            </div>

            <div className="bg-indigo-600 rounded-[2rem] p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-lg font-bold mb-6 flex items-center">
                  <Wallet className="w-5 h-5 mr-3" /> {t.checkout}
                </h4>
                <div className="space-y-6 max-w-sm">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-indigo-200 uppercase">{t.amount}</label>
                    <div className="text-4xl font-black">$89.99</div>
                  </div>

                  <div className="flex bg-indigo-700/50 p-1 rounded-2xl">
                    <button 
                      onClick={() => setMethod('card')}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold transition-all ${method === 'card' ? 'bg-white text-indigo-600 shadow-lg' : 'text-indigo-200'}`}
                    >
                      <CreditCard className="w-4 h-4" /> <span>Card</span>
                    </button>
                    <button 
                      onClick={() => setMethod('momo')}
                      className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl text-sm font-bold transition-all ${method === 'momo' ? 'bg-white text-indigo-600 shadow-lg' : 'text-indigo-200'}`}
                    >
                      <Smartphone className="w-4 h-4" /> <span>Mobile</span>
                    </button>
                  </div>

                  <button 
                    onClick={handlePayment}
                    disabled={isProcessing || isSuccess}
                    className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center space-x-2 transition-all shadow-xl ${
                      isSuccess ? 'bg-emerald-500 text-white' : 
                      isProcessing ? 'bg-indigo-400 cursor-not-allowed text-white' : 
                      'bg-white text-indigo-600 hover:scale-105 active:scale-95'
                    }`}
                  >
                    {isProcessing ? (
                      <> <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> <span>{t.processing}</span> </>
                    ) : isSuccess ? (
                      <> <CheckCircle2 className="w-5 h-5" /> <span>{t.success}</span> </>
                    ) : (
                      <> <span>{t.payNow}</span> <ArrowRight className="w-4 h-4" /> </>
                    )}
                  </button>
                </div>
              </div>
              <div className="absolute right-[-10%] bottom-[-20%] w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>

          {/* Sidebar - History */}
          <div className="w-full md:w-96 bg-white dark:bg-slate-900 border-l border-slate-100 dark:border-slate-800 p-8 flex flex-col">
            <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center">
              <History className="w-4 h-4 mr-2" /> {t.history}
            </h4>
            <div className="flex-1 space-y-4 overflow-y-auto">
              {transactions.map(tx => (
                <div key={tx.id} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800 flex items-center justify-between group animate-tag-pop">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl ${tx.method === 'Card' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'}`}>
                      {tx.method === 'Card' ? <CreditCard className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800 dark:text-white">{tx.id}</p>
                      <p className="text-[10px] text-slate-500">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-emerald-500">+${tx.amount.toFixed(2)}</p>
                    <span className="text-[8px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-emerald-400 transition-colors">Confirmed</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Channels</span>
                <span className="text-[10px] font-bold text-emerald-500">Secure</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-2" alt="Stripe" />
                </div>
                <div className="w-8 h-8 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                  <div className="text-[6px] font-black text-orange-500">ORANGE</div>
                </div>
                <div className="w-8 h-8 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                  <div className="text-[6px] font-black text-yellow-500">MTN</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateDemo;
