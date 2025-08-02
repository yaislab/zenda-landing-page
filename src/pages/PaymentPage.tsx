import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CreditCard, QrCode, Shield, Lock, CheckCircle } from "lucide-react";
import ZendaLogo from "@/components/ZendaLogo";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'qr' | 'card'>('qr');
  const [formData, setFormData] = useState({
    postalCode: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      // Procesar pago
      console.log('Procesando pago:', formData);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else {
      navigate('/');
    }
  };

  const isStep1Valid = formData.postalCode && formData.address && formData.city && formData.state;
  const isStep2Valid = formData.cardholderName && formData.cardNumber && formData.expiryDate && formData.cvv;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleBack}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              
              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
                    style={{ width: `${(currentStep / 2) * 100}%` }}
                  />
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentStep} de 2
                </span>
              </div>
            </div>
            
            <div className="text-center">
              <ZendaLogo className="w-8 h-8" />
              <p className="text-xs text-primary mt-1">An authorized agent of Zenda</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Payment Confirmation */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              ¡Estás a punto de completar tu envío a Mauricio Sergio!
            </h1>
            <p className="text-muted-foreground">
              Selecciona tu método de pago preferido
            </p>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4 mb-8">
            {/* QR Payment Option */}
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                paymentMethod === 'qr' ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => setPaymentMethod('qr')}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <QrCode className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Pagar con QR</h3>
                      <p className="text-sm text-muted-foreground">Escanea y paga desde tu billetera</p>
                    </div>
                  </div>
                  {paymentMethod === 'qr' && (
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Card Payment Option */}
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                paymentMethod === 'card' ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Pagar con tarjeta</h3>
                      <p className="text-sm text-muted-foreground">Crédito o débito</p>
                    </div>
                  </div>
                  {paymentMethod === 'card' && (
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Content */}
          {paymentMethod === 'qr' && (
            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <QrCode className="w-20 h-20 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Escanea el código QR
                </h3>
                <p className="text-muted-foreground mb-6">
                  Usa tu billetera digital para escanear y completar el pago de forma segura
                </p>
                <div className="bg-white/50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-medium text-foreground">
                    Monto a pagar: <span className="text-secondary font-bold">$150.00 USDT</span>
                  </p>
                </div>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90 text-white"
                  onClick={() => window.open('https://wa.me/+59171234567?text=pago%20qr', '_blank')}
                >
                  <QrCode className="w-4 h-4 mr-2" />
                  Generar QR de Pago
                </Button>
              </CardContent>
            </Card>
          )}

          {paymentMethod === 'card' && (
            <div className="space-y-6">
              {currentStep === 1 && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      Ingresa la dirección vinculada a tu tarjeta
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Código Postal *
                        </label>
                        <Input
                          placeholder="ej. 94114"
                          value={formData.postalCode}
                          onChange={(e) => handleInputChange('postalCode', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Dirección *
                        </label>
                        <Input
                          placeholder="ej. 2261 Market Street"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Apartamento/Suite/Piso
                        </label>
                        <Input
                          placeholder="ej. 4469"
                          value={formData.apartment}
                          onChange={(e) => handleInputChange('apartment', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Ciudad *
                        </label>
                        <Input
                          placeholder="ej. San Francisco"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Estado *
                        </label>
                        <select
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                        >
                          <option value="">Selecciona un estado</option>
                          <option value="CA">California</option>
                          <option value="NY">New York</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                        </select>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {currentStep === 2 && (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      Ingresa los detalles de tu tarjeta
                    </h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Nombre completo del titular *
                        </label>
                        <Input
                          placeholder="ej. Maria José García Martinez"
                          value={formData.cardholderName}
                          onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                          className="w-full"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Si en tu tarjeta aparece el nombre del banco, ingresa el nombre del titular de la cuenta
                        </p>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Número de tu tarjeta *
                        </label>
                        <Input
                          placeholder="ej. 4242 4242 4242 4242"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Fecha de vencimiento *
                          </label>
                          <Input
                            placeholder="ej. 01 / 29"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            CVV *
                          </label>
                          <Input
                            placeholder="ej. 123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Continue Button */}
              <Button
                className={`w-full ${
                  (currentStep === 1 && isStep1Valid) || (currentStep === 2 && isStep2Valid)
                    ? 'bg-secondary hover:bg-secondary/90'
                    : 'bg-gray-300 cursor-not-allowed'
                } text-white`}
                onClick={handleContinue}
                disabled={
                  (currentStep === 1 && !isStep1Valid) || (currentStep === 2 && !isStep2Valid)
                }
              >
                {currentStep === 1 ? 'Continuar' : 'Procesar Pago'}
              </Button>
            </div>
          )}

          {/* Security Notice */}
          <div className="mt-8 flex items-center gap-3 p-4 bg-white/50 rounded-lg">
            <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Pago seguro y encriptado</p>
              <p className="text-xs text-muted-foreground">
                Este es un pago seguro encriptado con SSL de 256 bits
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 