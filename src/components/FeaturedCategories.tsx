
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Современные кухни",
    image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800",
    link: "/catalog/modern"
  },
  {
    id: 2,
    title: "Классические кухни",
    image: "https://images.unsplash.com/photo-1631048500884-13b8657c351d?q=80&w=800",
    link: "/catalog/classic"
  },
  {
    id: 3,
    title: "Кухни-студии",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=800",
    link: "/catalog/studio"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Популярные категории</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="group">
              <div className="relative overflow-hidden rounded-lg h-72 hover-scale">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
