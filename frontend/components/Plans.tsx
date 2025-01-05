'use client'
import React, { useState } from "react";
import { Plantypes } from "../app/types/planTypes";

export default function PaymentPlans({ data }: Plantypes) {
  const [selectedDuration, setSelectedDuration] = useState("Monthly");

  const selectedPlan = data.duration.find(
    (plan) => plan.duration === selectedDuration
  );

  
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  
  const toggleAccordion = (planName: string) => {
    setActiveAccordion(activeAccordion === planName ? null : planName);
  };

  return (
    <div className="bg-gray-100 py-10">
      
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {data.duration.map((plan, index) => (
          <button
            key={index}
            className={`px-6 py-2 text-lg w-48 sm:w-auto font-semibold ${
              plan.duration === selectedDuration
                ? "bg-sky-950 text-white"
                : "bg-sky-700 text-white"
            }`}
            onClick={() => setSelectedDuration(plan.duration)}
          >
            {plan.duration}
          </button>
        ))}
      </div>

      
      <div className="hidden sm:block overflow-x-auto px-4 sm:px-10 mt-10 md:mt-36">
        <table className="table-auto w-full mx-auto border-collapse rounded-lg">
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
              <tr key={featureIndex} className="border-t">
                <td className="px-4 py-3 text-gray-800 font-bold">{feature}</td>
                {selectedPlan?.available.map((plan) => (
                  <td key={plan._key} className="px-4 py-3 text-center">
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
      <div className="sm:hidden mt-10">
        {selectedPlan?.available.map((plan) => (
          <div key={plan._key} className="border-b border-gray-300 mb-4">
            <button
              onClick={() => toggleAccordion(plan.name)}
              className="w-full text-left p-4 bg-gray-200 text-gray-800 font-semibold"
            >
              {plan.name}  <div className="text-sky-950">{selectedPlan[plan.name.toLowerCase()]} </div>{/* Plan name (e.g., Basic, Premium, Pro, Standard) */}
            </button>
            {activeAccordion === plan.name && (
              <div className="p-4 bg-white">
                <div className="text-3xl font-bold text-sky-950 mt-7 mb-5">
                  {selectedPlan[plan.name.toLowerCase()]}
                </div>
                {data.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="mb-4">
                    <div className="font-bold text-sm">
                      {feature}
                    </div>
                    <div className="flex mt-2">
                      {plan.offer[featureIndex] === "true" ? (
                        <span className=" font-semibold">✔</span>
                      ) : plan.offer[featureIndex] === "false" ? (
                        <span className=" font-semibold">✖</span>
                      ) : (
                        plan.offer[featureIndex]
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
