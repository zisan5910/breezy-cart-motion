
import { useState, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail, Share2 } from 'lucide-react';

// Import components
import Navigation from './components/Navigation';
import FloatingMenu from './components/FloatingMenu';
import Footer from './components/Footer';
import InstallPWA from './components/InstallPWA';
import { content, certificates } from './data/content';

// Import section components
import ProfileSection from './components/sections/ProfileSection';
import EducationSection from './components/sections/EducationSection';
import CoursesSection from './components/sections/CoursesSection';
import ExperienceSection from './components/sections/ExperienceSection';
import CertificateSection from './components/sections/CertificateSection';
import SkillsSection from './components/sections/SkillsSection';
import InformationSection from './components/sections/InformationSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [age, setAge] = useState<number>(0);

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date('2007-12-31');
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      setAge(age);
    };

    calculateAge();
    const interval = setInterval(calculateAge, 86400000); // Update age daily
    return () => clearInterval(interval);
  }, []);

  const navigationItems = [
    { id: 'profile', icon: <UserCircle size={20} /> },
    { id: 'education', icon: <School size={20} /> },
    { id: 'courses', icon: <BookOpen size={20} /> },
    { id: 'experience', icon: <Briefcase size={20} /> },
    { id: 'certificates', icon: <FileBadge size={20} /> },
    { id: 'skills', icon: <Code size={20} /> },
    { id: 'family', icon: <HeartHandshake size={20} /> },
    { id: 'contact', icon: <Mail size={20} /> },
    { id: 'social-links', icon: <Share2 size={20} />, target: 'footer' }
  ];

  const scrollToSection = (section: string) => {
    scroller.scrollTo(section, {
      duration: 800,
      smooth: true,
      offset: -64,
    });
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation 
        navigationItems={navigationItems}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        language={language}
        setLanguage={setLanguage}
      />

      <InstallPWA language={language} />

      <ProfileSection
        language={language}
        content={content as any}
        scrollToSection={scrollToSection}
      />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8">
          <EducationSection language={language} />
          <CoursesSection language={language} />
          <ExperienceSection language={language} />
          <CertificateSection
            language={language}
            content={content}
            certificates={certificates}
          />
          <SkillsSection language={language} />
          <InformationSection language={language} age={age} />
          <ContactSection language={language} />
        </div>
      </main>

      <Element name="footer">
        <Footer
          language={language}
          scrollToSection={scrollToSection}
          content={content}
        />
      </Element>

      <FloatingMenu />
    </div>
  );
}

export default App;
