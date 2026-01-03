import Hero from './components/Hero';
import Partners from './components/Partners';
import Impact from './components/Impact';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import ThemeToggle from './components/ThemeToggle';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-gray-900 dark:text-slate-100 transition-colors duration-300">
      <nav className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 py-4 px-6 md:px-0 sticky top-0 z-50 transition-all">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img src="/logo.png" alt="Dagpacket Bethel" className="h-6 md:h-8 w-auto object-contain brightness-0 dark:brightness-0 dark:invert" />
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="hidden md:block bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg shadow-slate-900/10 dark:shadow-white/5"
            >
              Contacto
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Partners />
        <Impact />
        <Services />
        <ContactForm />
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 pt-16 pb-8 px-4 transition-colors duration-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <img src="/logo.png" alt="Dagpacket Bethel" className="h-8 w-auto mb-6 opacity-80 dark:opacity-90 dark:invert" />
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Simplificando tu logística nacional e internacional con tecnología y servicio personalizado.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Contacto</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                  <span>Calle Principal 123, Col. Centro, Guadalajara, Jal.</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                  <a href="tel:+525512345678" className="hover:text-blue-900 dark:hover:text-white transition-colors">55 1234 5678</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                  <a href="mailto:cotizaciones@dagpacket.com" className="hover:text-blue-900 dark:hover:text-white transition-colors">cotizaciones@dagpacket.com</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-blue-900 dark:hover:text-white transition-colors">Aviso de Privacidad</a></li>
                <li><a href="#" className="hover:text-blue-900 dark:hover:text-white transition-colors">Términos y Condiciones</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-900 dark:hover:text-white transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-900 dark:hover:text-white transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-900 dark:hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400 dark:text-slate-500">
            <p>© {new Date().getFullYear()} Dagpacket Bethel. Todos los derechos reservados.</p>
            <div className="flex gap-2 items-center">
              <span>Desarrollado con</span>
              <span role="img" aria-label="love">❤️</span>
              <span>para la logística</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
