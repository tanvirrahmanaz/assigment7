import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AuctionSection() {
  const [bids, setBids] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/bids.json')
      .then(res => res.json())
      .then(data => setBids(data));
  }, []);

  const handleFavorite = (item) => {
    setFavorites([...favorites, item]);
    toast.success(`${item.title} added to favorites!`);
  };

  const handleRemove = (id) => {
    const updated = favorites.filter(fav => fav.id !== id);
    setFavorites(updated);
    toast.info('Item removed from favorites');
  };

  const isFavorited = (id) => favorites.some(item => item.id === id);

  const totalAmount = favorites.reduce((acc, item) => acc + item.currentBidPrice, 0);
  return (
    <div className="bg-[#f1f6fb] py-10 px-6 md:px-16 grid md:grid-cols-3 gap-6">
      {/* Left: Bids Table */}
      <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold text-black mb-1">Active Auctions</h2>
        <p className="text-gray-700 font-medium mb-4">Discover and bid on extraordinary items</p>
  
        <table className="w-full text-left table-fixed border-collapse">
        <thead>
  <tr className="bg-white border border-black rounded-xl text-center">
    <th className="py-3 font-bold text-black">Items</th>
    <th className="py-3 font-bold text-black">Current Bid</th>
    <th className="py-3 font-bold text-black">Time Left</th>
    <th className="py-3 font-bold text-black">Bid Now</th>
  </tr>
</thead>

          <tbody>
            {bids.map(item => (
              <tr
                key={item.id}
                className="border border-black rounded-xl overflow-hidden shadow mb-3"
              >
                <td className="p-4">
                  <div className="flex items-center gap-3 text-center">
                    <img src={item.image} alt={item.title} className="w-12 h-12 rounded" />
                    <span className="font-semibold text-sm text-black">{item.title}</span>
                  </div>
                </td>
                <td className="p-4 text-sm text-black font-medium text-center">${item.currentBidPrice.toLocaleString()}</td>
                <td className="p-4 text-sm text-black font-medium text-center">{item.timeLeft}</td>
                <td className="p-4 text-center">
                  <button
                    disabled={isFavorited(item.id)}
                    onClick={() => handleFavorite(item)}
                    className={`text-xl p-2 rounded-full transition-all ${
                      isFavorited(item.id)
                        ? 'text-red-500 cursor-not-allowed'
                        : 'text-black hover:text-red-500'
                    }`}
                  >
                    <i className={`fa${isFavorited(item.id) ? 's' : 'r'} fa-heart`}></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

                  </table>
                </div>
            
{/* Right: Favorites */}
<div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">♡ Favorite Items</h3>
  <hr className="mb-4 flex" />
  
  {favorites.length === 0 ? (
    <p className="text-sm text-black font-bold text-center items-center justify-center">
      No favorites yet<br />
      Click the heart icon on any item to add it to your favorites
    </p>
  ) : (
    <div className="space-y-3">
      {favorites.map(item => (
        <div
          key={item.id}
          className="border border-black rounded-lg p-3 flex items-center justify-between"
        >
          <img src={item.image} alt={item.title} className="w-10 h-10 rounded object-cover" />
          <div className="flex-1 px-3 text-sm">
            <p className="font-medium text-gray-800 truncate">{item.title}</p>
            <p className="text-xs text-gray-600">
              ${item.currentBidPrice.toLocaleString()} • Bids: {item.bidsCount}
            </p>
          </div>
          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-500 hover:text-red-700 text-sm font-bold"
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  )}

  <div className="mt-6 border-t pt-4 text-black text-right font-semibold text-lg flex justify-between">
    Total bids Amount: <span className="text-black">${totalAmount.toLocaleString()}</span>
  </div>
</div>


      {/* Toasts */}
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
  
}
