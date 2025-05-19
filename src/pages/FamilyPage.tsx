
import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';
import Information from '../components/Information';

interface FamilyPageProps {
  language: 'en' | 'bn';
  age: number;
}

const FamilyPage = ({ language, age }: FamilyPageProps) => {
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
            <HeartHandshake className="text-emerald-500" />
            {language === 'en' ? 'Family & Personal Information' : 'পারিবারিক ও ব্যক্তিগত তথ্য'}
          </h2>
          <Information language={language} age={age} />
        </motion.section>
      </div>
    </div>
  );
};

export default FamilyPage;
