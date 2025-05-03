
import { Button } from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center flex items-center" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=1280')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Кухни вашей мечты
          </h1>
          <p className="text-xl text-slate-200 mb-8">
            Создаем функциональные и стильные кухонные пространства
            с индивидуальным подходом к каждому клиенту
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Заказать проект</Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
              Смотреть каталог
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
