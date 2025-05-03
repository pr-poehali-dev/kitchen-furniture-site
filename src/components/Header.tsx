
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Utensils" className="h-6 w-6 text-amber-600" />
              <span className="text-xl font-bold text-amber-700">КухниМастер</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-amber-700 hover:text-amber-600 font-medium">
              Главная
            </Link>
            <Link to="/catalog" className="text-slate-600 hover:text-amber-600 font-medium">
              Каталог
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-amber-600 font-medium">
              О нас
            </Link>
            <Link to="/contacts" className="text-slate-600 hover:text-amber-600 font-medium">
              Контакты
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/favorites" className="text-slate-600 hover:text-amber-600">
              <Icon name="Heart" className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative text-slate-600 hover:text-amber-600">
              <Icon name="ShoppingCart" className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-medium text-white">
                0
              </span>
            </Link>
            <Button variant="default" size="sm" className="hidden md:flex">
              Заказать звонок
            </Button>
            <button className="md:hidden text-slate-600">
              <Icon name="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
