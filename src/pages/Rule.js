import React from "react";

import { shortenAddress } from "../utils/DataProvider";

function Rule() {
  return (
    <div className="flex justify-center text-white/50 mt-5">
      <div className="w-[800px] border border-[#242424] py-[40px] px-[40px] flex flex-col gap-3 tracking-wide">
        <div className="p-2">
          <h3 className="text-[20px]">1. Starting Funds</h3> - Each trader gets
          $1,000,000 to start trading.
        </div>
        <div className="p-2">
          <h3 className="text-[20px]">2. Trading Options</h3> - Traders can buy
          or sell ETH, using real market prices.
        </div>
        <div className="p-2">
          <h3 className="text-[20px]">3. Leverage</h3> - Traders can borrow up
          to 5 times their initial funds with no interest.
        </div>
        <div className="p-2">
          <h3 className="text-[20px]">4. Managing Positions</h3>
          <h4>- Traders can close their positions any time.</h4>
          <h4>- Positions close automatically after 7 days.</h4>
          <h4>- Positions close if they reach the margin limit.</h4>
        </div>
        <div className="p-2">
          <h3 className="text-[20px]">5. Profits and Losses</h3>
          <h4>- Paper Loss: Losses will be considered as paper losses.</h4>
          <h4>- Paper Profit: Profits will be considered as paper profits.</h4>
        </div>
        <div className="p-2">
          <h3 className="text-[20px]">6. Rewards</h3> - The best traders will
          get access to the Mainnet and other prizes.
        </div>
        <div className="p-2">
          <h3 className="text-[20px]">7. Ethical Trading</h3> - All trading
          follows Halal principles and ethical standards.
        </div>
      </div>
    </div>
  );
}

export default Rule;
