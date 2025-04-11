export default function Footer() {
    return (
      <footer className="bg-white text-center py-10 border-t border-gray-200">
        {/* Logo */}
        <h1 className="text-2xl font-semibold mb-1">
          <span className="text-blue-700">Auction</span>
          <span className="text-yellow-400">Gallery</span>
        </h1>
  
        {/* Slogan */}
        <p className="text-sm text-gray-600 tracking-widest font-medium mb-6">
          Bid. &nbsp;&nbsp; Win. &nbsp;&nbsp; Own.
        </p>
  
        {/* Navigation */}
        <div className="flex justify-center space-x-6 mb-4 text-sm font-medium text-gray-700">
          <a href="#">Home</a>
          <a href="#">Auctions</a>
          <a href="#">Categories</a>
          <a href="#">How to works</a>
        </div>
  
        {/* Copyright */}
        <p className="text-xs text-gray-500">© 2025 AuctionHub. All rights reserved.</p>
      </footer>
    );
  }
  