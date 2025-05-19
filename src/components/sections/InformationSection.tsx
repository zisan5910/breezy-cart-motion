
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';
import { HeartHandshake } from 'lucide-react';

interface InformationProps {
  language: 'en' | 'bn';
  age: number;
}

const InformationSection = ({ language, age }: InformationProps) => {
  const personalInfo = {
    title: {
      en: 'About Me',
      bn: 'আমার সম্পর্কে',
    },
    intro: {
      en: `I'm ${age} years old and passionate about technology and community service. As a volunteer developer, I leverage my skills to create tools that help organizations make a positive impact.`,
      bn: `আমি ${age} বছর বয়সী এবং প্রযুক্তি ও সমাজসেবায় আগ্রহী। একজন স্বেচ্ছাসেবী ডেভেলপার হিসেবে, আমি সংগঠনগুলিকে ইতিবাচক প্রভাব ফেলতে সাহায্য করার জন্য আমার দক্ষতা ব্যবহার করি।`,
    },
    family: [
      {
        relation: {
          en: 'Father',
          bn: 'বাবা',
        },
        name: {
          en: 'Md. Obaidul Hoque',
          bn: 'মোঃ ওবায়দুল হক',
        },
        occupation: {
          en: 'Businessman',
          bn: 'ব্যবসায়ী',
        },
      },
      {
        relation: {
          en: 'Mother',
          bn: 'মা',
        },
        name: {
          en: 'Most. Shahida Parvin',
          bn: 'মোসাঃ শাহিদা পারভীন',
        },
        occupation: {
          en: 'Homemaker',
          bn: 'গৃহিণী',
        },
      },
    ],
    interests: [
      {
        en: 'Web Development',
        bn: 'ওয়েব ডেভেলপমেন্ট',
      },
      {
        en: 'Programming',
        bn: 'প্রোগ্রামিং',
      },
      {
        en: 'Problem Solving',
        bn: 'সমস্যা সমাধান',
      },
      {
        en: 'Reading Books',
        bn: 'বই পড়া',
      },
      {
        en: 'Social Services',
        bn: 'সামাজিক সেবা',
      },
    ],
    quote: {
      en: '"Aim for progress, not perfection."',
      bn: '"পূর্ণতার জন্য নয়, অগ্রগতির জন্য লক্ষ্য রাখুন।"',
    },
  };

  return (
    <Element name="family">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        className="bg-white p-6 rounded-lg shadow-md"
        aria-labelledby="info-heading"
      >
        <h2
          id="info-heading"
          className="text-2xl font-bold mb-8 flex items-center gap-2 text-green-700"
        >
          <HeartHandshake className="text-emerald-500" />
          {personalInfo.title[language]}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="space-y-6"
          >
            <div>
              <p className="text-gray-700 leading-relaxed">
                {personalInfo.intro[language]}
              </p>
              <blockquote className="mt-4 border-l-4 border-green-500 pl-4 italic text-gray-600">
                {personalInfo.quote[language]}
              </blockquote>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {language === 'en' ? 'Family' : 'পরিবার'}
              </h3>
              <div className="space-y-4">
                {personalInfo.family.map((member, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-900">
                      {member.relation[language]}:{' '}
                      <span className="font-normal text-gray-800">
                        {member.name[language]}
                      </span>
                    </div>
                    <div className="text-gray-600 mt-1">
                      {member.occupation[language]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {language === 'en' ? 'Interests' : 'আগ্রহ'}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.interests.map((interest, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-50 p-4 rounded-lg text-center hover:bg-purple-100 transition-colors duration-200"
                >
                  {interest[language]}
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {language === 'en' ? 'Personal Information' : 'ব্যক্তিগত তথ্য'}
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                <div className="grid grid-cols-2">
                  <span className="font-medium text-gray-700">
                    {language === 'en' ? 'Age' : 'বয়স'}:
                  </span>
                  <span>{age} {language === 'en' ? 'years' : 'বছর'}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium text-gray-700">
                    {language === 'en' ? 'Location' : 'অবস্থান'}:
                  </span>
                  <span>
                    {language === 'en' ? 'Bogura, Bangladesh' : 'বগুড়া, বাংলাদেশ'}
                  </span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium text-gray-700">
                    {language === 'en' ? 'Religion' : 'ধর্ম'}:
                  </span>
                  <span>{language === 'en' ? 'Islam' : 'ইসলাম'}</span>
                </div>
                <div className="grid grid-cols-2">
                  <span className="font-medium text-gray-700">
                    {language === 'en' ? 'Nationality' : 'জাতীয়তা'}:
                  </span>
                  <span>{language === 'en' ? 'Bangladeshi' : 'বাংলাদেশি'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </Element>
  );
};

export default InformationSection;
