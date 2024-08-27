import { FaCoins } from "react-icons/fa";
import React, { Fragment } from "react";

interface StepperIndicatorProps {
  activeStep: number;
}

const StepperIndicator = ({ activeStep }: StepperIndicatorProps) => {
  return (
    <div className="px-4 w-full">
      <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {[1, 2, 3, 4, 5].map((step) => (
          <li key={step} className="mb-10 ms-6 w-full ">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
              <FaCoins />
            </span>
            <div className="flex justify-between">
              <div>
                <h3 className="font-medium leading-tight">Compra</h3>
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
