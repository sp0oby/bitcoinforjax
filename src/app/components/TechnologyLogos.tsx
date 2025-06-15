import React from 'react';
import Image from 'next/image';

type LogoProps = {
  name: string;
  alt: string;
  className?: string;
};

const TechnologyLogos: React.FC = () => {
  const logos: LogoProps[] = [
    {
      name: 'bitcoin-core-logo',
      alt: 'Bitcoin Core Logo',
    },
    {
      name: 'lightning-network-logo',
      alt: 'Lightning Network Logo',
    },
    {
      name: 'btcpay-server-logo',
      alt: 'BTCPay Server Logo',
    },
    {
      name: 'umbrel-logo',
      alt: 'Umbrel Logo',
    },
    {
      name: 'lunanode-logo',
      alt: 'LunaNode Logo',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Powered By Industry-Leading Technology</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <div key={logo.name} className="flex flex-col items-center">
              <div className="w-[120px] h-[120px] relative flex items-center justify-center">
                <Image
                  src={`/images/logos/${logo.name}.png`}
                  alt={logo.alt}
                  width={120}
                  height={120}
                  className={`object-contain ${logo.className || ''}`}
                />
              </div>
              <span className="mt-2 text-sm text-gray-600 font-medium">{logo.alt.replace(' Logo', '')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologyLogos; 