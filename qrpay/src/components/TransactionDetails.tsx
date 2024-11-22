import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Wallet, QrCode } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TransactionDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("crypto");

  return (
    <Card className="p-6 space-y-4 animate-fade-in">
      <ToggleGroup 
        type="single" 
        value={paymentMethod}
        onValueChange={(value) => {
          if (value) setPaymentMethod(value);
        }}
        className="justify-center border rounded-lg p-1"
      >
        <ToggleGroupItem 
          value="crypto" 
          aria-label="Criptomoedas"
          className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:text-white px-4 py-2 rounded-md transition-all"
        >
          <Wallet className="h-4 w-4" />
          <span>Criptomoedas</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="pix" 
          aria-label="PIX"
          className="flex items-center gap-2 data-[state=on]:bg-primary data-[state=on]:text-white px-4 py-2 rounded-md transition-all"
        >
          <QrCode className="h-4 w-4" />
          <span>PIX</span>
        </ToggleGroupItem>
      </ToggleGroup>
      
      {paymentMethod === "crypto" ? (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="font-medium">Ethereum (ERC20)</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-medium">Depósito Mínimo</span>
              <span className="text-gray-dark font-medium">0.00000009 ETH</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-medium">Confirmações Necessárias</span>
              <span className="text-gray-dark font-medium">12</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <QrCode className="h-5 w-5 text-primary" />
            <span className="font-medium">PIX</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-medium">Valor Mínimo</span>
              <span className="text-gray-dark font-medium">R$ 1,00</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-gray-medium">Tempo de Processamento</span>
              <span className="text-gray-dark font-medium">Instantâneo</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

export default TransactionDetails;