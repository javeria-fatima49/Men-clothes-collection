"use client"; 
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string; 
};

const products: Product[] = [
  { id: 1, name: 'Jacket', price: '$20', description: 'Warm jacket for winter', image: '/images/blue_basic_jacket_mn-jkt-ws23-063_3_.webp', category: 'jackets' },
  { id: 2, name: 'Jeans', price: '$30', description: 'Stylish jeans for any occasion.', image: '/images/F0444109622_2.webp', category: 'jeans' },
  { id: 3, name: 'T-shirt', price: '$20', description: 'Comfortable T-shirt', image: '/images/t-shirt.webp', category: 'tshirts' },
  { id: 4, name: 'Grey Jacket', price: '$30', description: 'Grey basic denim jacket', image: '/images/grey_basic_denim_jacket_mn-jkt-ws23-302_1_.webp', category: 'jackets' },
  { id: 5, name: 'Basic T-shirt', price: '$10', description: 'Stylish casual shirt', image: '/images/F1125106117_3.webp', category: 'tshirts' },
  { id: 6, name: 'Stylish T-shirt', price: '$20', description: 'Black-gray Stylish T-shirt', image: '/images/F1122106618_3.webp', category: 'tshirts' },
  { id: 7, name: 'Premium T-shirt', price: '$19', description: 'Graphic t-shirt with eye-catching design.', image: '/images/F1035106619_1.webp', category: 'tshirts' },
  { id: 8, name: 'Jeans', price: '$20', description: 'Comfortable jeans', image: '/images/F0453109901_1.webp', category: 'jeans' },
  { id: 9, name: 'Jeans', price: '$35', description: 'Stylish jeans', image: '/images/F0452109625_3.webp', category: 'jeans' },
  { id: 10, name: 'Jacket', price: '$40', description: 'Soft peach jacket for a fresh look', image: '/images/peach_suede_puffer_gilet_jkt-wov22-025_6_.webp', category: 'jackets' },
  { id: 11, name: 'Jacket', price: '$50', description: 'Stylish jacket', image: '/images/F0158101901_2_copy.webp', category: 'jackets' },
 { id: 12, name: 'Shirt', price: '$25', description: 'Stylish casual shirt with short sleeves.', image: '/images/F0449109630LOWER_1.webp', category: 'shirt' },
{ id: 13, name: 'T-shirt', price: '$15', description: 'Comfortable t-shirt for everyday wear.', image: '/images/F0128125808_3 - Copy.webp', category: 'tshirts' },
{ id: 14, name: 'Shirt', price: '$30', description: 'Elegant formal shirt for business occasions.', image: '/images/F0446109622LOWER_1 - Copy.webp', category: 'shirt' },
{ id: 15, name: 'Shirt', price: '$28', description: 'Classic shirt with a modern fit.', image: '/images/F0451109622LOWER_1.webp', category: 'shirt' },
{ id: 16, name: 'Hoodie', price: '$35', description: 'Cozy hoodie perfect for chilly evenings.', image: '/images/F0469107915_2 - Copy.webp', category: 'hoodie' },
{ id: 17, name: 'Hoodie', price: '$32', description: 'Stylish hoodie with a kangaroo pocket.', image: '/images/F0482107112_1.webp', category: 'hoodie' },
{ id: 18, name: 'Shirt', price: '$26', description: 'Trendy shirt with a vibrant pattern.', image: '/images/F0486107802_5 - Copy.webp', category: 'shirt' },
{ id: 19, name: 'Hoodie', price: '$34', description: 'Warm and soft hoodie for daily use.', image: '/images/F0487107128_2 - Copy.webp', category: 'hoodie' },
{ id: 20, name: 'Hoodie', price: '$38', description: 'Premium quality hoodie for maximum comfort.', image: '/images/F0489107007_5 - Copy.webp', category: 'hoodie' },
{ id: 21, name: 'Hoodie', price: '$36', description: 'Fashionable hoodie for all seasons.', image: '/images/F0491107912_3 - Copy.webp', category: 'hoodie' },
{ id: 22, name: 'T-shirt', price: '$14', description: 'Lightweight t-shirt ideal for summer.', image: '/images/F0995106002.webp', category: 'tshirts' },
{ id: 23, name: 'Shirt', price: '$27', description: 'Casual shirt made from breathable fabric.', image: '/images/F1059106112_3.webp', category: 'shirt' },
{ id: 24, name: 'Shirt', price: '$29', description: 'Classic checkered shirt for a timeless look.', image: '/images/F1070106618.webp', category: 'shirt' },
{ id: 25, name: 'T-shirt', price: '$16', description: 'Soft cotton t-shirt with a relaxed fit.', image: '/images/F1107106002_3_copy.webp', category: 'tshirts' },
{ id: 26, name: 'Tshirt', price: '$17', description: 'Comfortable t-shirt suitable for any occasion.', image: '/images/F1122106001_1.webp', category: 'tshirts' },
{ id: 27, name: 'T-shirt', price: '$19', description: 'High-quality t-shirt that lasts wash after wash.', image: '/images/F1130106002_3.webp', category: 'tshirts' },

 ];

const categories = [
  { id: 'jeans', name: 'Jeans' },
  { id: 'jackets', name: 'Jackets' },
  { id: 'tshirts', name: 'T-Shirts' },
  {id: 'hoodie', name: 'Hoodie'},
  {id: 'shirt', name: 'Shirt'},
];

export default function ProductList() {
  const [cart, setCart] = useState<Product[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    setNotification(`${product.name} has been added to your cart!`);
    
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="p-4">
      {notification && (
        <div className="bg-green-500 text-white p-2 rounded mb-4">
          {notification}
        </div>
      )}

      <div className="flex overflow-x-auto space-x-4 p-4">
        {categories.map((category) => (
          <Link key={category.id} href={`#${category.id}`} className="bg-blue-900 text-white py-2 px-4 rounded">
            {category.name}
          </Link>
        ))}
      </div>
      {categories.map((category) => (
        <div key={category.id} id={category.id} className="my-8">
          <h2 className="text-3xl font-bold">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.filter(product => product.category === category.id).map(product => (
              <div key={product.id} className="border p-4 rounded shadow-lg flex flex-col items-center">
                <div className="relative overflow-hidden group">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="object-cover h-auto w-full transition-transform duration-300 group-hover:scale-125"
                  />
                </div>
                <h3 className="text-xl mt-2">{product.name}</h3>
                <p className="text-lg">{product.description}</p>
                <p className="text-xl font-bold">{product.price}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-500 text-white py-2 px-4 rounded mt-4 transition-transform duration-300 hover:shadow-lg"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={() => {
          if (cart.length > 0) {
            alert(`You have ${cart.length} item(s) in your cart.`);
          } else {
            alert("Your cart is empty.");
          }
        }}
        className="mt-4 bg-blue-700 text-white py-3 px-6 rounded"
      >
        View Cart
      </button>
<br  />
<br  />
<footer className="bg-blue-900 p-6">
      <p className="text-center text-white">Follow me for more updates</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/javeria-fatima-5414a330b/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3LSWEFmNRNOjNp2wTF4lYQ%3D%3D" target="_blank">
          <img src="/images/linkdin.png" alt="LinkedIn" className="h-6 w-6 shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
        </a>
        <a href="https://github.com/javeria-fatima49" target="_blank">
          <img src="/images/github.png" alt="GitHub" className="h-6 w-6 shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl" />
        </a>
        </div>
      <p className="text-center text-white mt-4">fatimajaveria409@gmail.com</p>
      <p  className="bg-blue-900 text-white p-1 text-center">&copy; 2024 Men Clothes Collection. All Rights Reserved.</p>
    </footer>
    </div>
  );
}


