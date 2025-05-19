
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import CertificateSlider from '../components/CertificateSlider';
import { content, certificates } from '../data/content';

interface CertificatesPageProps {
  language: 'en' | 'bn';
}

const CertificatesPage = ({ language }: CertificatesPageProps) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-green-700">
            <FileText className="text-emerald-500" />
            {content[language].certifications}
          </h2>
          <CertificateSlider
            certificates={certificates}
            language={language}
          />
        </motion.section>
      </div>
    </div>
  );
};

export default CertificatesPage;
