import React from 'react';

const OrderSummary = ({ movieName, selectedShow, totalCost, convenienceFee, donationAmount, donationChecked, setDonationChecked, orderTotal, handlePayment, canClickPayNow, user }) => {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-white">
      <h3 className="mb-4 text-xl font-bold text-white">{movieName}</h3>
      <div className="text-sm text-gray-400 mb-2">
        {selectedShow.theatre} | {selectedShow.show.fullDate?.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} | {selectedShow.show.time}
      </div>
      
      <hr className="border-gray-600 mb-4" />
      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <span className="text-gray-400">Ticket(s) price</span>
          <span className="text-white">₹{totalCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Convenience fees</span>
          <span className="text-white">₹{convenienceFee}</span>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="donation-checkbox" className="flex items-center cursor-pointer">
            <input
              id="donation-checkbox"
              type="checkbox"
              checked={donationChecked}
              onChange={(e) => setDonationChecked(e.target.checked)}
              className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-gray-400">Donate to Underprivileged Musicians</span>
          </label>
          <span className="text-blue-400">₹{donationAmount.toFixed(2)}</span>
        </div>
        <hr className="border-gray-600" />
        <div className="flex justify-between font-bold text-lg">
          <span className="text-gray-400">Order total</span>
          <span className="text-blue-400">₹{orderTotal}</span>
        </div>
      </div>
      <hr className="border-gray-600 mb-4" />
      <div className="mb-4 text-sm text-gray-400">
        <strong className="text-white">Your details</strong>
        <div>{user?.first_name} {user?.last_name}</div>
        <div>Email - {user?.email }</div>
        <div>Phone - {user?.phn_no }</div>
      </div> 
      <hr className="border-gray-600 mb-4" />
      <div className="mb-4 text-xs text-gray-400">
        By proceeding, I express my consent to complete this transaction.
      </div>
      <button
        onClick={handlePayment}
        disabled={!canClickPayNow}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
          canClickPayNow
            ? 'bg-blue-600 hover:bg-blue-700 cursor-pointer hover:scale-105 shadow-lg'
            : 'bg-gray-500 cursor-not-allowed'
        } text-white`}
      >
        Secure Pay Now
      </button>
    </div>
  );
};

export default OrderSummary;
