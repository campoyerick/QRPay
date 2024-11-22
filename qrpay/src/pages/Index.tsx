import React from 'react';
import QRCodeDisplay from '@/components/QRCodeDisplay';
import AddressField from '@/components/AddressField';
import TransactionDetails from '@/components/TransactionDetails';
import { Button } from '@/components/ui/button';
import { Share, Image } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const demoAddress = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e";
  
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Endereço de Pagamento',
        text: demoAddress,
      });
    } catch (err) {
      toast.error("Não foi possível compartilhar");
    }
  };

  const handleSaveImage = () => {
    toast.info("Função de salvar imagem em desenvolvimento");
  };

  return (
    <div className="min-h-screen bg-gray-light py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-dark">
            Pagar com QR Code
          </h1>
          <p className="text-gray-medium">
            Escaneie o código abaixo para realizar o pagamento com segurança
          </p>
        </div>

        <div className="space-y-6">
          <QRCodeDisplay address={demoAddress} />
          
          <div className="flex justify-center">
            <AddressField address={demoAddress} />
          </div>

          <TransactionDetails />

          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              onClick={handleSaveImage}
              className="space-x-2"
            >
              <Image className="h-4 w-4" />
              <span>Salvar como Imagem</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={handleShare}
              className="space-x-2"
            >
              <Share className="h-4 w-4" />
              <span>Compartilhar</span>
            </Button>
          </div>
        </div>

        <footer className="text-center text-sm text-gray-medium animate-fade-in">
          Pagamento seguro e rápido. Para dúvidas, entre em contato com nosso suporte.
        </footer>
      </div>
    </div>
  );
};

export default Index;