import React from 'react';
import QRCode from 'react-qr-code';
import { Card } from '@/components/ui/card';

interface QRCodeDisplayProps {
  address: string;
}

const QRCodeDisplay = ({ address }: QRCodeDisplayProps) => {
  return (
    <Card className="p-6 bg-white shadow-lg animate-fade-in">
      <div className="flex flex-col items-center space-y-4">
        <div className="p-4 bg-white rounded-lg">
          <QRCode value={address} size={200} />
        </div>
        <p className="text-gray-medium text-sm">
          Escaneie o código com seu aplicativo de carteira digital
        </p>
      </div>
    </Card>
  );
};

export default QRCodeDisplay;