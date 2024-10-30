import React from 'react';

export default function About() {
  return (
    <div className="relative bg-[url('/images/white-abstract-background_23-2148806276.avif')] bg h-screen">
    <div className='flex flex-col justify-center p-7 py-40 max-w-3xl mx-auto bg-white rounded-lg shadow-md hover:shadow-xl'>
        <h2 className='font-semibold text-2xl font-serif'>About Me</h2>
      <p className="text-black mb-4 font-sans">
        Hello! I'm Javeria Fatima, currently in my second year at Government Degree College Nazimabad. I am passionate about technology and am currently taking an artificial intelligence course through the Government of Sindh initiative.
      </p>
      
      <p className="text-black mb-4 font-sans">
        This course has allowed me to delve into the fascinating world of AI and develop my skills in this cutting-edge field. My journey in technology started early, and I have always been fascinated by how it can be used to solve real-world problems.
      </p>
      
      <p className="text-black mb-4 font-sans">
        Through my studies and projects, I aim to contribute to the field of AI and make a positive impact. In my free time, I enjoy exploring new technologies, reading about the latest advancements in AI, and working on personal projects to apply what I've learned.
      </p>
      
      <p className="text-black mb-4 font-sans">
        I am always eager to learn more and take on new challenges that help me grow both personally and professionally.Thank you for visiting!
      </p>
    </div>
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
