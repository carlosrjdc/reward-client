import { FaCoins } from "react-icons/fa";
import React from "react";

interface StepperIndicatorProps {
  activeStep: number;
}

const StepperIndicator = ({ activeStep }: StepperIndicatorProps) => {
  return (
    <div className="px-4 w-full">
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {[1, 2, 3, 4, 5].map((step) => (
          <li key={step} className="mb-10 ms-6 w-full pr-4 ">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <FaCoins />
            </span>
            <div className="flex justify-between">
              <div>
                <div className="flex gap-2">
                  <h3 className="font-bold leading-tight">Compra</h3>
                  <span className="text-[10px] font-bold py-0.5 px-1 rounded-xl bg-yellow-500/50">R$20,00</span>
                </div>
                <p className="text-sm">+500 pontos</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm">10/07/2024</span>
                <strong>15:10</strong>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default StepperIndicator;
