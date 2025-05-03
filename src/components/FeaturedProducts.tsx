
import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Кухня «Модерн»",
    description: "Современная кухня с глянцевыми фасадами и встроенной техникой",
    price: 85000,
    oldPrice: 95000,
    image: "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?q=80&w=800",
    isNew: true
  },
  {
    id: 2,
    name: "Кухня «Классика»",
    description: "Элегантная классическая кухня из массива дерева",
    price: 120000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    isNew: false
  },
  {
    id: 3,
    name: "Кухня «Скандинавия»",
    description: "Лаконичный дизайн в светлых тонах со встроенной техникой",
    price: 75000,
    oldPrice: 89000,
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=800",
    isNew: false
  },
  {
    id: 4,
    name: "Кухня «Лофт»",
    description: "Индустриальный стиль с открытыми полками и темными акцентами",
    price: 95000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1596078841242-31ea0050982c?q=80&w=800",
    isNew: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">Популярные модели</h2>
          <Link to="/catalog" className="text-amber-600 hover:text-amber-700 flex items-center gap-1">
            Смотреть весь каталог
            <Icon name="ChevronRight" className="h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-amber-600 text-white text-xs font-medium px-2 py-1 rounded">
                    Новинка
                  </span>
                )}
                <button className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full text-gray-700 hover:text-amber-600 hover:bg-white">
                  <Icon name="Heart" className="h-4 w-4" />
                </button>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-xl font-bold">{product.price.toLocaleString()} ₽</span>
                  {product.oldPrice && (
                    <span className="text-slate-400 line-through text-sm">
                      {product.oldPrice.toLocaleString()} ₽
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">В корзину</Button>
                  <Link to={`/product/${product.id}`} className="p-2 border border-slate-200 rounded-md hover:bg-slate-50">
                    <Icon name="Eye" className="h-5 w-5 text-slate-600" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
