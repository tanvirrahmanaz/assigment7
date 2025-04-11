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
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Active Auctions</h2>
        <p className="text-gray-600 mb-4">Discover and bid on extraordinary items</p>

        <table className="w-full text-left table-fixed border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm">
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {bids.map(item => (
              <tr
                 ktr
                 key={item.id}
                 className="bg-white border border-black border-[1.5px] rounded-md shadow"
              >
                <td className="flex items-center gap-3 p-3">
                  <img src={item.image} alt={item.title} className="w-12 h-12 rounded" />
                  <span className="font-medium text-sm text-gray-800">{item.title}</span>
                </td>
                <td className="text-sm text-gray-700">${item.currentBidPrice.toLocaleString()}</td>
                <td className="text-sm text-gray-700">{item.timeLeft}</td>
                <td>
                <button
                    disabled={isFavorited(item.id)}
                    onClick={() => handleFavorite(item)}
                    className={`text-xl p-2 rounded-full transition-all ${
                      isFavorited(item.id)
                        ? 'text-red-500 cursor-not-allowed'
                        : 'text-gray-600 hover:text-red-500'
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
        <h3 className="text-xl font-bold text-gray-800 mb-2">💖 Favorite Items</h3>
        <hr className="mb-4 flex" />
        {favorites.length === 0 ? (
          <p className="text-sm text-black font-bold text-center items-center justify-center">No favorites yet<br />Click the heart icon on any item to add it to your favorites</p>
        ) : (
          <div className="space-y-3">
            {favorites.map(item => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 border-b pb-2"
              >
                <img src={item.image} alt={item.title} className="w-10 h-10 rounded" />
                <div className="flex-1 text-sm">
                  <p className="font-medium text-gray-800 truncate">{item.title}</p>
                  <p className="text-xs text-gray-600">${item.currentBidPrice.toLocaleString()} • Bids: {item.bidsCount}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
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
