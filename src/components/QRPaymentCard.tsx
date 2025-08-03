import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, DollarSign, Copy, Download } from 'lucide-react';
import QRCode from 'qrcode';

interface QRPaymentCardProps {
  onConfirm: () => void;
}

const QRPaymentCard: React.FC<QRPaymentCardProps> = ({ onConfirm }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [qrGenerated, setQrGenerated] = useState(false);
  const [copied, setCopied] = useState(false);

  // Datos del pago
  const paymentData = {
    banco: "ZENDA FINANCE",
    slogan: "La Plataforma de Remesas con Blockchain",
    cuenta: "Cta:10000045279151",
    monto: "Monto:100.00 USDT",
    vencimiento: "Ven:06-08-2025",
    destinatario: "Dest:Rosa Perez",
    glosa: "Glosa:Pago al Sr Juan Perez",
    usoUnico: "Uso único:SI"
  };

  // Generar el código QR
  useEffect(() => {
    if (canvasRef.current && !qrGenerated) {
      const qrData = JSON.stringify(paymentData);
      
      QRCode.toCanvas(canvasRef.current, qrData, {
        width: 200,
        margin: 2,
        color: {
          dark: '#0052CC', // Primary color
          light: '#FFFFFF'
        }
      }, (error) => {
        if (!error) {
          setQrGenerated(true);
        }
      });
    }
  }, [qrGenerated]);

  const handleCopyData = () => {
    const dataText = Object.entries(paymentData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    navigator.clipboard.writeText(dataText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'zenda-payment-qr.png';
      link.href = canvasRef.current.toDataURL();
      link.click();
    }
  };

  return (
    <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          {/* Logo de Zenda */}
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-3">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h2 className="text-xl font-bold text-primary">ZENDA FINANCE</h2>
              <p className="text-sm text-muted-foreground">La Plataforma de Remesas con Blockchain</p>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <canvas 
              ref={canvasRef} 
              className="border-4 border-white rounded-2xl shadow-lg"
              style={{ backgroundColor: 'white' }}
            />
            {/* Icono de dólar sobre el QR */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="w-5 h-5 text-secondary" />
              </div>
            </div>
          </div>
        </div>

        {/* Información del pago */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-6">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Cta:</span>
              <span className="text-secondary font-semibold">10000045279151</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Monto:</span>
              <span className="text-secondary font-bold text-lg">100.00 USDT</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Ven:</span>
              <span className="text-foreground">06-08-2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Dest:</span>
              <span className="text-foreground">Rosa Perez</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Glosa:</span>
              <span className="text-foreground">Pago al Sr Juan Perez</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-foreground">Uso único:</span>
              <span className="text-green-600 font-semibold">SI</span>
            </div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          <Button 
            className="w-full bg-secondary hover:bg-secondary/90 text-white"
            onClick={onConfirm}
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Confirmar Pago
          </Button>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleCopyData}
            >
              <Copy className="w-4 h-4 mr-2" />
              {copied ? 'Copiado!' : 'Copiar Datos'}
            </Button>
            
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleDownloadQR}
            >
              <Download className="w-4 h-4 mr-2" />
              Descargar QR
            </Button>
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-4 text-center">
          <p className="text-xs text-muted-foreground">
            Escanea el código QR con tu billetera digital para completar el pago de forma segura
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default QRPaymentCard; 