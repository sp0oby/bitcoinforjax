import React from 'react';

type RiskMitigationItem = {
  risk: string;
  mitigation: string;
};

const RisksMitigation: React.FC = () => {
  const riskItems: RiskMitigationItem[] = [
    {
      risk: "PoS incompatibility",
      mitigation: "BTCPay app, plugins, or $200 tablet."
    },
    {
      risk: "Slow adoption",
      mitigation: "Discounts, SEO for \"Bitcoin payments Jax,\" local networking."
    },
    {
      risk: "Errors",
      mitigation: "Cursor AI/Grok, test thoroughly."
    },
    {
      risk: "Bitcoin price volatility",
      mitigation: "Adjust BTC fees if price exceeds $150,000, hold BTC or convert to stablecoins."
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Risks & Mitigation</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {riskItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-bitcoin-orange"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Risk: {item.risk}
              </h3>
              <div className="flex items-start">
                <div className="bg-bitcoin-orange/10 p-3 rounded-lg">
                  <p className="text-gray-700">
                    <span className="font-bold text-bitcoin-orange">Mitigation:</span> {item.mitigation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RisksMitigation; 