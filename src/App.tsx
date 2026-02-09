import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { B2BPage } from '@/pages/B2BPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import './App.css';

function AppContent() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          {/* Arabic Routes */}
          <Route path="/ar" element={<HomePage />} />
          <Route path="/ar/about" element={<AboutPage />} />
          <Route path="/ar/services" element={<ServicesPage />} />
          <Route path="/ar/b2b" element={<B2BPage />} />
          <Route path="/ar/contact" element={<ContactPage />} />
          <Route path="/ar/privacy" element={<PrivacyPage />} />
          <Route path="/ar/terms" element={<TermsPage />} />

          {/* English Routes */}
          <Route path="/en" element={<HomePage />} />
          <Route path="/en/about" element={<AboutPage />} />
          <Route path="/en/services" element={<ServicesPage />} />
          <Route path="/en/b2b" element={<B2BPage />} />
          <Route path="/en/contact" element={<ContactPage />} />
          <Route path="/en/privacy" element={<PrivacyPage />} />
          <Route path="/en/terms" element={<TermsPage />} />

          {/* Default redirect */}
          <Route path="/" element={<Navigate to="/ar" replace />} />
          <Route path="*" element={<Navigate to="/ar" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/takwin-line-site">
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
