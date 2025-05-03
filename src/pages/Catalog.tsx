
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/icon";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

// Имитация данных для каталога
const kitchenProducts = [
  {
    id: 1,
    name: "Кухня «Модерн»",
    description: "Современная кухня с глянцевыми фасадами и встроенной техникой",
    price: 85000,
    oldPrice: 95000,
    image: "https://images.unsplash.com/photo-1556909172-8c2f041fca1e?q=80&w=800",
    category: "modern",
    material: "МДФ",
    colors: ["белый", "черный"],
    isNew: true
  },
  {
    id: 2,
    name: "Кухня «Классика»",
    description: "Элегантная классическая кухня из массива дерева",
    price: 120000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800",
    category: "classic",
    material: "массив дерева",
    colors: ["коричневый", "бежевый"],
    isNew: false
  },
  {
    id: 3,
    name: "Кухня «Скандинавия»",
    description: "Лаконичный дизайн в светлых тонах со встроенной техникой",
    price: 75000,
    oldPrice: 89000,
    image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=800",
    category: "modern",
    material: "ЛДСП",
    colors: ["белый", "серый"],
    isNew: false
  },
  {
    id: 4,
    name: "Кухня «Лофт»",
    description: "Индустриальный стиль с открытыми полками и темными акцентами",
    price: 95000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1596078841242-31ea0050982c?q=80&w=800",
    category: "modern",
    material: "МДФ",
    colors: ["черный", "серый"],
    isNew: true
  },
  {
    id: 5,
    name: "Кухня «Неоклассика»",
    description: "Сочетание классических линий и современных материалов",
    price: 110000,
    oldPrice: null,
    image: "https://images.unsplash.com/photo-1543503103-f94a0036ed9d?q=80&w=800",
    category: "classic",
    material: "МДФ",
    colors: ["белый", "бежевый"],
    isNew: false
  },
  {
    id: 6,
    name: "Кухня «Хай-тек»",
    description: "Технологичная кухня с глянцевыми поверхностями и хромированными деталями",
    price: 125000,
    oldPrice: 140000,
    image: "https://images.unsplash.com/photo-1624711478179-54331a0c8354?q=80&w=800",
    category: "modern",
    material: "акрил",
    colors: ["белый", "черный"],
    isNew: true
  }
];

// Фильтры
const categories = [
  { id: "modern", name: "Современные" },
  { id: "classic", name: "Классические" },
  { id: "studio", name: "Кухни-студии" }
];

const materials = [
  { id: "mdf", name: "МДФ" },
  { id: "ldsp", name: "ЛДСП" },
  { id: "wood", name: "Массив дерева" },
  { id: "acrylic", name: "Акрил" }
];

const colors = [
  { id: "white", name: "Белый" },
  { id: "black", name: "Черный" },
  { id: "gray", name: "Серый" },
  { id: "beige", name: "Бежевый" },
  { id: "brown", name: "Коричневый" }
];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState<number[]>([50000, 150000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Обработчики для фильтров
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleMaterialChange = (materialId: string) => {
    setSelectedMaterials(prev => 
      prev.includes(materialId) 
        ? prev.filter(id => id !== materialId)
        : [...prev, materialId]
    );
  };

  const handleColorChange = (colorId: string) => {
    setSelectedColors(prev => 
      prev.includes(colorId) 
        ? prev.filter(id => id !== colorId)
        : [...prev, colorId]
    );
  };

  // Функция для сброса всех фильтров
  const resetFilters = () => {
    setPriceRange([50000, 150000]);
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setSelectedColors([]);
  };

  // В реальном приложении тут был бы фильтр на основе выбранных критериев
  // Для примера просто вернем все товары
  const filteredProducts = kitchenProducts;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-slate-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Каталог кухонь</h1>
          <div className="flex items-center text-sm text-slate-600">
            <a href="/" className="hover:text-amber-600">Главная</a>
            <Icon name="ChevronRight" className="h-4 w-4 mx-2" />
            <span>Каталог</span>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="lg:grid lg:grid-cols-4 gap-8">
            {/* Мобильная кнопка фильтров */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex justify-between items-center"
              >
                <span>Фильтры</span>
                <Icon name={showFilters ? "ChevronUp" : "ChevronDown"} className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Фильтры */}
            <div className={`lg:block ${showFilters ? 'block' : 'hidden'} mb-6 lg:mb-0`}>
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Фильтры</h3>
                  <button 
                    className="text-sm text-amber-600 hover:text-amber-700"
                    onClick={resetFilters}
                  >
                    Сбросить
                  </button>
                </div>
                
                {/* Ценовой диапазон */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Цена</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={priceRange}
                      min={50000}
                      max={150000}
                      step={5000}
                      onValueChange={setPriceRange}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span>{priceRange[0].toLocaleString()} ₽</span>
                    <span>{priceRange[1].toLocaleString()} ₽</span>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Категории */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Тип кухни</h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div className="flex items-center space-x-2" key={category.id}>
                        <Checkbox 
                          id={`category-${category.id}`} 
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => handleCategoryChange(category.id)}
                        />
                        <Label htmlFor={`category-${category.id}`}>{category.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Материалы */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Материал</h4>
                  <div className="space-y-2">
                    {materials.map(material => (
                      <div className="flex items-center space-x-2" key={material.id}>
                        <Checkbox 
                          id={`material-${material.id}`}
                          checked={selectedMaterials.includes(material.id)}
                          onCheckedChange={() => handleMaterialChange(material.id)}
                        />
                        <Label htmlFor={`material-${material.id}`}>{material.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                {/* Цвета */}
                <div>
                  <h4 className="font-medium mb-3">Цвет</h4>
                  <div className="space-y-2">
                    {colors.map(color => (
                      <div className="flex items-center space-x-2" key={color.id}>
                        <Checkbox 
                          id={`color-${color.id}`}
                          checked={selectedColors.includes(color.id)}
                          onCheckedChange={() => handleColorChange(color.id)}
                        />
                        <Label htmlFor={`color-${color.id}`}>{color.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Товары */}
            <div className="lg:col-span-3">
              {/* Сортировка и количество товаров */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <p className="text-slate-600 mb-3 sm:mb-0">Найдено: {filteredProducts.length} кухонь</p>
                <div className="flex items-center">
                  <span className="text-slate-600 mr-2">Сортировка:</span>
                  <select className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500">
                    <option value="popularity">По популярности</option>
                    <option value="priceAsc">По возрастанию цены</option>
                    <option value="priceDesc">По убыванию цены</option>
                    <option value="new">Сначала новинки</option>
                  </select>
                </div>
              </div>
              
              {/* Сетка товаров */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group border border-slate-100">
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
                        <Button 
                          variant="outline" 
                          className="p-2 aspect-square"
                          onClick={() => window.location.href = `/product/${product.id}`}
                        >
                          <Icon name="Eye" className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
