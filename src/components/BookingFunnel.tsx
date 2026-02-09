import { useState } from 'react';
import { Check, MapPin, Clock, User, Building2, ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { individualServices, companyServices } from '@/data/services';
import { buildWhatsAppUrl, openWhatsApp } from '@/utils/whatsapp';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

type VisitorType = 'individual' | 'company' | null;
type Step = 1 | 2 | 3;

interface FormErrors {
  type?: string;
  services?: string;
  address?: string;
}

export function BookingFunnel() {
  const { language, t, dir } = useLanguage();
  const [step, setStep] = useState<Step>(1);
  const [visitorType, setVisitorType] = useState<VisitorType>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [address, setAddress] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = visitorType === 'individual' ? individualServices : companyServices;

  const validateStep1 = () => {
    if (!visitorType) {
      setErrors({ type: t('funnel.error_type') });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep2 = () => {
    if (selectedServices.length === 0) {
      setErrors({ services: t('funnel.error_services') });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateStep3 = () => {
    if (!address.trim() || address.trim().length < 8) {
      setErrors({ address: t('funnel.error_address') });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
      setErrors({});
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId)
        ? prev.filter((id) => id !== serviceId)
        : [...prev, serviceId]
    );
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: undefined }));
    }
  };

  const handleSubmit = () => {
    if (!validateStep3()) return;

    setIsSubmitting(true);
    
    const bookingData = {
      visitorType: visitorType!,
      selectedServices,
      address: address.trim(),
      preferredTime: preferredTime.trim(),
    };

    const whatsappUrl = buildWhatsAppUrl(bookingData, language);
    openWhatsApp(whatsappUrl);
    
    setIsSubmitting(false);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-soft border-0 overflow-hidden">
      <CardContent className="p-6 md:p-8">
        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s, index) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step >= s
                      ? 'bg-teal-500 text-white'
                      : 'bg-slate-100 text-slate-400'
                  }`}
                >
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                {index < 2 && (
                  <div
                    className={`w-12 h-1 mx-1 transition-all ${
                      step > s ? 'bg-teal-500' : 'bg-slate-100'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Visitor Type */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {t('funnel.step1_title')}
              </h3>
              <p className="text-slate-500 text-sm">
                {language === 'ar' ? 'اختر نوع العميل المناسب لك' : 'Select your customer type'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  setVisitorType('individual');
                  setSelectedServices([]);
                  if (errors.type) setErrors((prev) => ({ ...prev, type: undefined }));
                }}
                className={`p-6 rounded-xl border-2 transition-all text-center ${
                  visitorType === 'individual'
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    visitorType === 'individual' ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <User className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-navy-900 mb-1">{t('common.individual')}</h4>
                <p className="text-sm text-slate-500">
                  {language === 'ar' ? 'للمنازل والفلل' : 'For homes & villas'}
                </p>
              </button>

              <button
                onClick={() => {
                  setVisitorType('company');
                  setSelectedServices([]);
                  if (errors.type) setErrors((prev) => ({ ...prev, type: undefined }));
                }}
                className={`p-6 rounded-xl border-2 transition-all text-center ${
                  visitorType === 'company'
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                    visitorType === 'company' ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <Building2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-navy-900 mb-1">{t('common.company')}</h4>
                <p className="text-sm text-slate-500">
                  {language === 'ar' ? 'للمكاتب والمؤسسات' : 'For offices & institutions'}
                </p>
              </button>
            </div>

            {errors.type && (
              <p className="text-red-500 text-sm text-center">{errors.type}</p>
            )}

            <Button
              onClick={handleNext}
              className="w-full bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-xl font-bold text-lg"
            >
              {language === 'ar' ? 'التالي' : 'Next'}
              <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </Button>
          </div>
        )}

        {/* Step 2: Services Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {t('funnel.step2_title')}
              </h3>
              <p className="text-slate-500 text-sm">
                {t('funnel.select_services')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto p-1">
              {servicesList.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceToggle(service.id)}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${
                    selectedServices.includes(service.id)
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-slate-200 hover:border-teal-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        selectedServices.includes(service.id)
                          ? 'border-teal-500 bg-teal-500'
                          : 'border-slate-300'
                      }`}
                    >
                      {selectedServices.includes(service.id) && (
                        <Check className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <span className="text-sm font-medium text-navy-900">
                      {language === 'ar' ? service.nameAr : service.nameEn}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {errors.services && (
              <p className="text-red-500 text-sm text-center">{errors.services}</p>
            )}

            <div className="flex gap-3">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 py-6 rounded-xl font-bold text-lg border-2"
              >
                <ArrowLeft className={`w-5 h-5 ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
                {language === 'ar' ? 'السابق' : 'Back'}
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-xl font-bold text-lg"
              >
                {language === 'ar' ? 'التالي' : 'Next'}
                <ArrowRight className={`w-5 h-5 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Address & Time */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-navy-900 mb-2">
                {t('funnel.step3_title')}
              </h3>
              <p className="text-slate-500 text-sm">
                {language === 'ar' ? 'أدخل عنوانك والوقت المفضل' : 'Enter your address and preferred time'}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  {t('funnel.enter_address')} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <Textarea
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (errors.address) setErrors((prev) => ({ ...prev, address: undefined }));
                    }}
                    placeholder={t('funnel.address_placeholder')}
                    className={`pl-10 min-h-[80px] ${errors.address ? 'border-red-500' : ''}`}
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.address}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-navy-900 mb-2">
                  {t('common.preferred_time')} <span className="text-slate-400">({t('common.optional')})</span>
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <Input
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    placeholder={t('funnel.time_placeholder')}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-bold text-navy-900 mb-2 text-sm">
                  {language === 'ar' ? 'ملخص الطلب:' : 'Order Summary:'}
                </h4>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">{language === 'ar' ? 'النوع:' : 'Type:'}</span>{' '}
                  {visitorType === 'individual' ? t('common.individual') : t('common.company')}
                </p>
                <p className="text-sm text-slate-600">
                  <span className="font-medium">{language === 'ar' ? 'الخدمات:' : 'Services:'}</span>{' '}
                  {selectedServices.length} {language === 'ar' ? 'خدمات' : 'services'}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 py-6 rounded-xl font-bold text-lg border-2"
              >
                <ArrowLeft className={`w-5 h-5 ${dir === 'rtl' ? 'ml-2 rotate-180' : 'mr-2'}`} />
                {language === 'ar' ? 'السابق' : 'Back'}
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white py-6 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {isSubmitting
                  ? language === 'ar' ? 'جاري الإرسال...' : 'Sending...'
                  : t('common.book_whatsapp')}
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
