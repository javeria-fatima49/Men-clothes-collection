"use client"; 
import React from 'react';

const Contact: React.FC = () => {
  return (
     <div className="p-5 h-screen bg-[url('/images/white-abstract-background_23-2148806276.avif')] bg-cover bg-center flex flex-col justify-between">
      <section id="contact" className="flex-grow">
        <h2 className=" md:text-3xl font-bold mb-4">Contact Me</h2>
        <p className="mb-6">If you have any questions or would like to get in touch, please fill out the form below:</p>
        <form action="https://formspree.io/your-email@example.com" method="POST" className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" name="name" required className="w-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          
          <div>
            <label htmlFor="email" className="block mb-1">Email:</label>
            <input type="email" id="email" name="email" required className="w-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600" />
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-1">Message:</label>
            <textarea id="message" name="message" rows={4} required className="w-50 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"></textarea>
          </div>
          <div>
         <button type="submit" id="submit-button" className="bg-blue-900 text-white py-3 px-12 rounded text-left transition-transform duration-300 hover:bg-blue-950  hover:shadow-xl">
           Submit
           </button>
          </div>
        </form>
      </section>
     <footer className="bg-blue-900 p-6 fixed bottom-0 left-0 right-0">
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

export default Contact;




