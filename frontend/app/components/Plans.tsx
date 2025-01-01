'use client'
import React, { useState } from "react";
import { Plantypes } from "../types/planTypes";

export default function PaymentPlans({ data }:Plantypes) {
  const [selectedDuration, setSelectedDuration] = useState("Monthly");

  const selectedPlan = data.duration.find(
    (plan) => plan.duration === selectedDuration
  );

  return (
    <div className="bg-gray-100 py-10">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {data.duration.map((plan, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-lg w-48 font-semibold ${
              plan.duration === selectedDuration ? "bg-red-500 text-white" : "bg-sky-950 text-white"
            }`}
            onClick={() => setSelectedDuration(plan.duration)}
          >
            {plan.duration}
          </button>
        ))}
      </div>

      
      <div className="overflow-x-hidden px-40 scale-110 mt-36">
        <table className="table-auto w-full overflow-x-hidden mx-auto border-collapse rounded-lg">
          
          <thead>
            <tr>
              <th className="text-center px-4 py-2"></th>
              {selectedPlan?.available.map((plan) => (
                <th key={plan._key} className="text-center px-4 py-2">
                  <div className="border-2 border-red-600 font-normal px-4 py-2 text-sm text-black">
                    {plan.name}
                  </div>
                  <div className="text-3xl font-bold text-red-500 mt-7 mb-5">
                    {selectedPlan[plan.name.toLowerCase()]}
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          
          <tbody>
            {data.features.map((feature, featureIndex) => (
              <tr key={featureIndex}>
                <td className="px-4 py-3 text-gray-800 font-bold">{feature}</td>
                {selectedPlan?.available.map((plan) => (
                  <td key={plan._key} className="px-4 py-3 text-center text-black">
                    {plan.offer[featureIndex] === "true" ? (
                      <span className="text-green-500 font-semibold">✔</span>
                    ) : plan.offer[featureIndex] === "false" ? (
                      <span className="text-red-500 font-semibold">✖</span>
                    ) : (
                      plan.offer[featureIndex]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
