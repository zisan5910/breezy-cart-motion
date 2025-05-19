
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import Skill from '../components/Skill';

interface SkillsPageProps {
  language: 'en' | 'bn';
}

const SkillsPage = ({ language }: SkillsPageProps) => {
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
            <Code className="text-emerald-500" />
            {language === 'en' ? 'Skills & Technologies' : 'দক্ষতা এবং প্রযুক্তি'}
          </h2>
          <Skill language={language} />
        </motion.section>
      </div>
    </div>
  );
};

export default SkillsPage;
