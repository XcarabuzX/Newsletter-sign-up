import SignUpMobileSVG from '../../assets/images/illustration-sign-up-mobile.svg?react';
import SignUpDesktopSVG from '../../assets/images/illustration-sign-up-desktop.svg?react';
import { useState, useEffect } from 'react';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="w-full sm:w-auto sm:overflow-hidden">
      <div className="sm:my-4 sm:mr-4 sm:h-auto">
        {isMobile ? <SignUpMobileSVG className="w-full h-auto" /> : <SignUpDesktopSVG className="h-auto" />}
      </div>
    </header>
  );
}

export default Header;
