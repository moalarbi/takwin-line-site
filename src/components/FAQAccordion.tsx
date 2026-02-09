import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<'ar' | 'en', FAQItem[]> = {
  ar: [
    {
      question: 'كيف يتم تحديد موعد الخدمة؟',
      answer: 'يتم تنسيق الموعد المناسب حسب توفر الفرق وموقع العميل، ويتم التأكيد عبر واتساب.',
    },
    {
      question: 'هل تقدمون عقود للشركات؟',
      answer: 'نعم، نقدم عقود تنظيف سنوية للشركات والمؤسسات بأسعار تنافسية. تشمل الزيارات اليومية أو الأسبوعية حسب احتياج عملك.',
    },
    {
      question: 'كيف يتم الحجز؟',
      answer: 'الحجز عبر واتساب فقط. اختر خدماتك، أرسل العنوان، وسيتم تنفيذ الخدمة حسب الموعد المتفق عليه. لا يوجد حد أدنى للحجز.',
    },
    {
      question: 'هل توجد زيارات يومية للأفراد؟',
      answer: 'نعم، نقدم زيارات يومية وأسبوعية للمنازل حسب احتياجك. يمكنك تحديد الجدول الزمني المناسب لك.',
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'يتم الاتفاق على طريقة الدفع عبر واتساب حسب الخدمة. ندعم الدفع النقدي و التحويل البنكي.',
    },
    {
      question: 'هل مواد التنظيف آمنة؟',
      answer: 'نعم، نستخدم مواد تنظيف معتمدة وآمنة للأسرة والأطفال والحيوانات الأليفة.',
    },
  ],
  en: [
    {
      question: 'How is the service appointment determined?',
      answer: 'The appropriate appointment is coordinated based on team availability and customer location, and confirmed via WhatsApp.',
    },
    {
      question: 'Do you offer contracts for companies?',
      answer: 'Yes, we offer annual cleaning contracts for companies and institutions at competitive prices. Includes daily or weekly visits according to your business needs.',
    },
    {
      question: 'How do I book?',
      answer: 'Booking is via WhatsApp only. Choose your services, send the address, and service will be performed according to the agreed schedule. There is no minimum booking.',
    },
    {
      question: 'Are there daily visits for individuals?',
      answer: 'Yes, we offer daily and weekly visits for homes according to your needs. You can set the schedule that suits you.',
    },
    {
      question: 'What payment methods are available?',
      answer: 'Payment method is agreed upon via WhatsApp according to the service. We support cash and bank transfer.',
    },
    {
      question: 'Are cleaning materials safe?',
      answer: 'Yes, we use approved and safe cleaning materials for families, children, and pets.',
    },
  ],
};

export function FAQAccordion() {
  const { language, t } = useLanguage();
  const faqs = faqData[language];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-navy-900 text-center mb-8">
        {t('faq.title')}
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-white rounded-xl border border-slate-200 px-6 overflow-hidden data-[state=open]:border-teal-200 data-[state=open]:shadow-soft"
          >
            <AccordionTrigger className="text-right py-5 hover:no-underline text-navy-900 font-semibold text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
