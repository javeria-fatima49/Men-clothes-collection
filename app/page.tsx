import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative bg-[url('/images/white-abstract-background_23-2148806276.avif')] bg h-screen">
      <div className="absolute bg-black opacity-50 h-screen"></div>
      <div className="p-12 w-full flex flex-col md:flex-row items-center relative z-10">
        <div className="flex flex-col gap-4 w-full md:w-1/2 p-6 bg-white bg-opacity-90 shadow-lg rounded-md">
          <h1 className="text-3xl font-serif font-bold text-center md:text-left text-blue-900">
            Welcome to Men Clothes Collection
          </h1>
          <p className="text-lg font-sans">
            Your ultimate destination for stylish and trendy clothing, now for older boys too! Our collection is filled with jeans, jackets, and shirts that perfectly fit their personality and style.
            Our outfits will give your boys a modern and fashionable look, whether for school, parties, or casual outings. Each piece is made from high-quality materials, ensuring both comfort and style.
            Explore our collection with the latest trends and vibrant designs, and see how your young man stands out on every occasion. Start shopping today and don’t miss the chance to make them stylish!
          </p>
         <div className="px-3 sm:px-7"> 
    <Link href="/product/id" 
          className="bg-blue-900 text-white py-2 px-6 sm:py-3 sm:px-12 rounded w-full sm:w-auto transition-transform duration-300 hover:bg-blue-950 hover:shadow-xl hover:scale-105">
        Shop Now
    </Link> 
</div>
        </div>
         <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <Image
            src="/images/360_F_247194532_88PMkaOwdTq396eUmLuM5fEpeqpq7Vu6.jpg"
            alt="Description of the image"
            width={700}
            height={600}
            className="shadow-2xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      <div className="py-12 w-full flex flex-col items-center">
        <h2 className="text-2xl font-serif font-bold text-blue-900 mb-4">Featured Products</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-gray shadow-md rounded-md p-4 w-64">
            <Image
              src="/images/F0158101901_2_copy.webp"
              alt="Product 1"
              width={350}
              height={350}
              className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
            />
            <h3 className="font-bold text-lg mt-2">Stylish Jacket</h3>
            <p className="text-gray-700">A modern jacket for casual outings.</p>
            <Link href="/product/id" className="bg-blue-900 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-950 block text-center mt-2">
              View Product
            </Link>
          </div>
          <div className="bg-gray shadow-md rounded-md p-4 w-64">
          <Image
               src="/images/F0446109622LOWER_1 - Copy.webp" 
               alt="Product 2"
               width={300}
               height={300}
               className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
             />
             <h3 className="font-bold text-lg mt-2">Stylish Shirt</h3>
             <p className="text-gray-700">Elegant formal shirt for business occasions.</p>
             <Link href="/product/id" className="bg-blue-900 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-950 block text-center mt-2">
               View Product
             </Link>
            
           </div>
           <div className="bg-gray shadow-md rounded-md p-4 w-64">
             <Image
               src="/images/F1035106619_1.webp" 
               alt="Product 3"
               width={300}
               height={300}
               className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"             />
             <h3 className="font-bold text-lg mt-2">Stylish T-Shirt</h3>
             <p className="text-gray-700">Comfortable t-shirt for everyday wear.</p>
             <Link href="/product/id" className="bg-blue-900 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-950 block text-center mt-2">
               View Product
            </Link>
           </div>
           <div className="bg-gray shadow-md rounded-md p-4 w-64">
             <Image
               src="/images/F0451109622LOWER_1.webp" 
               alt="Product 4"
               width={300}
               height={300}
               className="shadow-xl rounded transition-transform duration-300 hover:scale-105 hover:shadow-l"
             />
             <h3 className="font-bold text-lg mt-2">Stylish Shirt</h3>
             <p className="text-gray-700">Trendy shirt with a vibrant pattern.</p>
             <Link href="/product/id" className="bg-blue-900 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-950 block text-center mt-2">
              View Product
             </Link>
           </div>

        </div>
      </div>
      <footer className="bg-blue-900 p-4">
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
