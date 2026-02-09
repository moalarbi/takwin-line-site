import { individualServices, companyServices } from '@/data/services';

const WHATSAPP_NUMBER = '966559466460';

interface BookingData {
  visitorType: 'individual' | 'company';
  selectedServices: string[];
  address: string;
  preferredTime?: string;
}

export function buildWhatsAppUrl(data: BookingData, language: 'ar' | 'en' = 'ar'): string {
  const servicesList = data.visitorType === 'individual' ? individualServices : companyServices;
  const selectedServiceNames = data.selectedServices.map(id => {
    const service = servicesList.find(s => s.id === id);
    return language === 'ar' ? service?.nameAr : service?.nameEn;
  }).filter(Boolean);

  const typeLabel = data.visitorType === 'individual' 
    ? (language === 'ar' ? 'فرد' : 'an individual')
    : (language === 'ar' ? 'شركة' : 'a company');

  const timeValue = data.preferredTime?.trim() 
    ? data.preferredTime 
    : (language === 'ar' ? 'غير محدد' : 'Not specified');

  let message: string;

  if (language === 'ar') {
    message = `السلام عليكم،\nأنا ${typeLabel} في الرياض.\nالخدمات المطلوبة: ${selectedServiceNames.join('، ')}.\nالعنوان: ${data.address}.\nالوقت المفضل: ${timeValue}.\n— تم الإرسال من موقع تكوين لاين`;
  } else {
    message = `Hi,\nI am ${typeLabel} in Riyadh.\nRequested services: ${selectedServiceNames.join(', ')}.\nAddress: ${data.address}.\nPreferred time: ${timeValue}.\n— Sent from TAKWIN LINE website`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildServiceWhatsAppUrl(serviceId: string, language: 'ar' | 'en' = 'ar'): string {
  const allServices = [...individualServices, ...companyServices];
  const service = allServices.find(s => s.id === serviceId);
  
  if (!service) {
    return `https://wa.me/${WHATSAPP_NUMBER}`;
  }

  const serviceName = language === 'ar' ? service.nameAr : service.nameEn;
  
  let message: string;
  if (language === 'ar') {
    message = `السلام عليكم،\nأرغب في الاستفسار عن خدمة: ${serviceName}.\n— تم الإرسال من موقع تكوين لاين`;
  } else {
    message = `Hi,\nI would like to inquire about the service: ${serviceName}.\n— Sent from TAKWIN LINE website`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildB2BWhatsAppUrl(
  facilityType: string,
  area: string,
  location: string,
  language: 'ar' | 'en' = 'ar'
): string {
  let message: string;
  
  if (language === 'ar') {
    message = `السلام عليكم،\nأبي عرض عقد تنظيف سنوي لمنشأة في الرياض.\nنوع المنشأة: ${facilityType}\nالمساحة التقريبية: ${area}\nالموقع: ${location}`;
  } else {
    message = `Hi,\nI would like a quote for an annual cleaning contract for a facility in Riyadh.\nFacility type: ${facilityType}\nApproximate area: ${area}\nLocation: ${location}`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppUrl(language: 'ar' | 'en' = 'ar'): string {
  let message: string;
  
  if (language === 'ar') {
    message = 'السلام عليكم، أرغب في الاستفسار عن خدماتكم. — تم الإرسال من موقع تكوين لاين';
  } else {
    message = 'Hi, I would like to inquire about your services. — Sent from TAKWIN LINE website';
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
