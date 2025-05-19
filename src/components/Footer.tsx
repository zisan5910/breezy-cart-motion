
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

interface FooterProps {
  language: 'en' | 'bn';
  content: any;
}

const Footer = ({ language, content }: FooterProps) => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  const quickLinks = [
    { name: language === 'en' ? 'Profile' : 'প্রোফাইল', icon: <UserCircle size={16} />, path: '/' },
    { name: language === 'en' ? 'Education' : 'শিক্ষা', icon: <School size={16} />, path: '/education' },
    { name: language === 'en' ? 'Courses' : 'কোর্স', icon: <BookOpen size={16} />, path: '/courses' },
    { name: language === 'en' ? 'Experience' : 'অভিজ্ঞতা', icon: <Briefcase size={16} />, path: '/experience' },
    { name: language === 'en' ? 'Certificates' : 'সার্টিফিকেট', icon: <FileBadge size={16} />, path: '/certificates' },
    { name: language === 'en' ? 'Skills' : 'দক্ষতা', icon: <Code size={16} />, path: '/skills' },
    { name: language === 'en' ? 'Family' : 'পরিবার', icon: <HeartHandshake size={16} />, path: '/family' },
    { name: language === 'en' ? 'Contact' : 'যোগাযোগ', icon: <Mail size={16} />, path: '/contact' },
  ];

  const socialMedias = [
    {
      name: 'Instagram',
      url: content.socialLinks.instagram,
      icon: '/social/instagram.svg',
    },
    {
      name: 'GitHub',
      url: content.socialLinks.github,
      icon: '/social/github.svg',
    },
    {
      name: 'Facebook',
      url: content.socialLinks.facebook,
      icon: '/social/facebook.svg',
    },
    {
      name: 'LinkedIn',
      url: content.socialLinks.linkedin,
      icon: '/social/linkedin.svg',
    },
    {
      name: 'Twitter',
      url: content.socialLinks.twitter,
      icon: '/social/twitter.svg',
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(content.email);
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  return (
    <footer className="bg-slate-900 text-slate-200 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'About Me' : 'আমার সম্পর্কে'}
            </h3>
            <p className="text-slate-300 mb-4">{content[language].shortBio}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'Quick Links' : 'দ্রুত লিঙ্ক'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="transition-transform hover:translate-x-1">
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-slate-300 hover:text-green-400"
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'Find Me On' : 'আমাকে খুঁজুন'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialMedias.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'w-10 h-10 flex items-center justify-center rounded-full',
                    'bg-slate-800 hover:bg-slate-700 transition-colors'
                  )}
                  aria-label={social.name}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className="w-5 h-5 opacity-80"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {language === 'en' ? 'Contact' : 'যোগাযোগ'}
            </h3>
            <div className="space-y-3">
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-green-400" />
                <button
                  onClick={copyEmail}
                  className="text-slate-300 hover:text-green-400 cursor-pointer"
                >
                  {isEmailCopied
                    ? language === 'en'
                      ? 'Copied!'
                      : 'কপি করা হয়েছে!'
                    : content.email}
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()}{' '}
            {language === 'en'
              ? 'Md Ridoan Mahmud Zisan. All rights reserved.'
              : 'মোঃ রিদোয়ান মাহমুদ জিসান। সর্বস্বত্ব সংরক্ষিত।'}
          </p>
          <p className="text-slate-400 text-sm mt-2 md:mt-0">
            {language === 'en'
              ? 'Made with ❤️ by Ridoan'
              : '❤️ দিয়ে তৈরি করেছেন রিদোয়ান'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
