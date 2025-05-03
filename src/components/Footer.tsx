
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Utensils" className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-bold text-white">КухниМастер</span>
            </div>
            <p className="text-slate-300 text-sm">
              Качественная мебель для вашей кухни с индивидуальным подходом и гарантией качества.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-slate-300 hover:text-amber-500">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-500">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-amber-500">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-slate-300 hover:text-amber-500">Все кухни</Link></li>
              <li><Link to="/catalog/modern" className="text-slate-300 hover:text-amber-500">Современные</Link></li>
              <li><Link to="/catalog/classic" className="text-slate-300 hover:text-amber-500">Классические</Link></li>
              <li><Link to="/catalog/materials" className="text-slate-300 hover:text-amber-500">Материалы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-300 hover:text-amber-500">О компании</Link></li>
              <li><Link to="/delivery" className="text-slate-300 hover:text-amber-500">Доставка и сборка</Link></li>
              <li><Link to="/payment" className="text-slate-300 hover:text-amber-500">Оплата</Link></li>
              <li><Link to="/guarantee" className="text-slate-300 hover:text-amber-500">Гарантия</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-5 w-5 text-amber-500 mt-0.5" />
                <span className="text-slate-300">г. Москва, ул. Кухонная, д. 1</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-5 w-5 text-amber-500" />
                <a href="tel:+78001234567" className="text-slate-300 hover:text-amber-500">8 (800) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-5 w-5 text-amber-500" />
                <a href="mailto:info@kuhnimaster.ru" className="text-slate-300 hover:text-amber-500">info@kuhnimaster.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5 text-amber-500" />
                <span className="text-slate-300">Пн-Сб: 10:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>© 2025 КухниМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
