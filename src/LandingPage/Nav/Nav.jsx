import { useState } from "react";
import logo from "../../../public/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { X, Home, Users, BookOpen, MapPin, Phone, Mail, Briefcase } from "lucide-react";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Courses", icon: BookOpen, href: "#courses" },
    { name: "Campuses", icon: MapPin, href: "#campuses" },
    { name: "Partner Institutions", icon: Users, href: "#institutions" },
    { name: "Student Testimonials", icon: Users, href: "#testimonials" },
    { name: "Stories", icon: Briefcase, href: "#stories" }
  ];
  return (
    <>
    <nav className="max-w-[1920px] mx-auto md:pt-[56px] pt-5 ">
      <div className="flex justify-between items-center md:pr-20 md:pl-[84px] px-5">
        <div>
          <img className="md:w-[184px] w-[100px] md:h-[69px] object-cover" src={logo} alt="" />
        </div>
        <div>
          <button   onClick={() => setIsOpen(true)}
              className="hover:scale-110 transition-transform duration-300"
              aria-label="Open menu">
      <GiHamburgerMenu className="text-white md:text-2xl text-xl" />
          </button>
    
        </div>
      </div>
    </nav>
    {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 z-[101] shadow-2xl transition-transform duration-700 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            {/* <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-blue-950 font-bold text-xl">M</span>
            </div> */}
            <h2 className="text-white text-2xl font-bold">Menu</h2>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-cyan-400 hover:rotate-90 transition-all duration-300 p-2"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-6 md:p-8 space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 p-4 rounded-xl text-white hover:bg-white/10 hover:translate-x-2 transition-all duration-300 group ${
                  isOpen ? 'animate-slideIn' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 group-hover:text-blue-950" />
                </div>
                <span className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                  {item.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-black/20 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors duration-300">
              <Mail className="w-5 h-5" />
              <span className="text-sm">info@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/80 hover:text-cyan-400 transition-colors duration-300">
              <Phone className="w-5 h-5" />
              <span className="text-sm">+44 123 456 7890</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3 mt-6">
            {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
              <button
                key={social}
                className="w-10 h-10 bg-white/10 rounded-full hover:bg-cyan-400 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
                aria-label={social}
              >
                <span className="text-white text-xs font-bold group-hover:text-blue-950">
                  {social[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
      </>
  );
};

export default Nav;
