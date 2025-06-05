import Image from 'next/image';
import React from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface StockCardProps {
  icon: string;
  index: string;
  price: string;
  change: string;
  changeValue: string;
}

const StockCard: React.FC<StockCardProps> = ({ icon, index, price, change, changeValue }) => {
  const isPositive = change.startsWith('+');

  return (
    <div className="bg-[#17221B] rounded-2xl shadow-md px-6 py-4 w-[300px] h-[110px] flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Image src={icon} alt="icon" width={20} height={20} />
          </div>
          <div>
            <p className="text-[12px] font-medium text-gray-400">{index}</p>
            <div className="flex items-center gap-2">
              <p className="text-[16px] font-semibold text-white">{price}</p>
              <span
                className={`text-[12px] font-medium px-2 py-1 rounded-md flex items-center gap-1 ${
                  isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}
              >
                {isPositive ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                {change}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[14px] mt-2 ml-14 text-white/70">Change {changeValue}</p>
    </div>
  );
};

export default StockCard;
