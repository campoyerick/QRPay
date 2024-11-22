import React from 'react';
import { toast } from 'sonner';

interface AddressFieldProps {
  address: string;
}

const AddressField = ({ address }: AddressFieldProps) => {
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(address);
    toast.success("Endereço copiado!");
  };

  return (
    <div 
      onClick={copyToClipboard}
      className="flex items-center w-full max-w-md p-3 bg-gray-light rounded-lg animate-fade-in cursor-pointer hover:bg-gray-200 transition-colors"
    >
      <p className="text-gray-dark font-mono text-sm w-full text-center">
        {address}
      </p>
    </div>
  );
};

export default AddressField;