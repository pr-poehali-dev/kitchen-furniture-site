
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Truck",
    title: "Бесплатная доставка",
    description: "При заказе от 100 000 ₽ доставка и сборка бесплатно"
  },
  {
    icon: "Medal",
    title: "Гарантия качества",
    description: "Все материалы сертифицированы, гарантия 2 года"
  },
  {
    icon: "Settings",
    title: "Проектирование",
    description: "Бесплатный выезд дизайнера и проект кухни"
  }
];

const Features = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 mb-4">
                <Icon name={feature.icon} className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
