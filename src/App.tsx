
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserCircle, School, BookOpen, Briefcase, FileBadge, Code, HeartHandshake, Mail } from 'lucide-react';

// Import components
import Navigation from './components/Navigation';
import FloatingMenu from './components/FloatingMenu';
import Footer from './components/Footer';
import InstallPWA from './components/InstallPWA';
import { content } from './data/content';

// Import pages
import ProfilePage from './pages/ProfilePage';
import EducationPage from './pages/EducationPage';
import CoursesPage from './pages/CoursesPage';
import ExperiencePage from './pages/ExperiencePage';
import CertificatesPage from './pages/CertificatesPage';
import SkillsPage from './pages/SkillsPage';
import FamilyPage from './pages/FamilyPage';
import ContactPage from './pages/ContactPage';

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
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
    { id: 'profile', icon: <UserCircle size={20} />, path: '/' },
    { id: 'education', icon: <School size={20} />, path: '/education' },
    { id: 'courses', icon: <BookOpen size={20} />, path: '/courses' },
    { id: 'experience', icon: <Briefcase size={20} />, path: '/experience' },
    { id: 'certificates', icon: <FileBadge size={20} />, path: '/certificates' },
    { id: 'skills', icon: <Code size={20} />, path: '/skills' },
    { id: 'family', icon: <HeartHandshake size={20} />, path: '/family' },
    { id: 'contact', icon: <Mail size={20} />, path: '/contact' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation 
          navigationItems={navigationItems}
          language={language}
          setLanguage={setLanguage}
        />

        <InstallPWA language={language} />
        
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<ProfilePage language={language} />} />
          <Route path="/education" element={<EducationPage language={language} />} />
          <Route path="/courses" element={<CoursesPage language={language} />} />
          <Route path="/experience" element={<ExperiencePage language={language} />} />
          <Route path="/certificates" element={<CertificatesPage language={language} />} />
          <Route path="/skills" element={<SkillsPage language={language} />} />
          <Route path="/family" element={<FamilyPage language={language} age={age} />} />
          <Route path="/contact" element={<ContactPage language={language} />} />
        </Routes>

        <Footer
          language={language}
          content={content}
        />

        <FloatingMenu />
      </div>
    </Router>
  );
}

export default App;
