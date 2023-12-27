import React from 'react';
import Title from './components/Title';
import RoundImageWithText from './components/RoundImageWithText';
import Line from './components/Line';


const SkillsPage = () => {
  return (
    <section id="SkillsPage" className='pt-2 px-12'>
      <br/>
      <br/>
      <Title
        title = "Skills"
      />

    <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-5">

        <RoundImageWithText
        imageUrl="./Skills Logo/python.jpg"
        altText="Deskripsi gambar"
        caption="Python"
        />

        <RoundImageWithText
          imageUrl="./Skills Logo/cs.png"
          altText="Deskripsi gambar"
          caption="C#"
        />

        <RoundImageWithText
          imageUrl="./Skills Logo/javascript.png"
          altText="Deskripsi gambar"
          caption="Javascript"
        />

        <RoundImageWithText
          imageUrl="./Skills Logo/java.jpg"
          altText="Deskripsi gambar"
          caption="Java"
        />

        <RoundImageWithText
          imageUrl="./Skills Logo/unity.png"
          altText="Deskripsi gambar"
          caption="Unity"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/nodejs.png"
          altText="Deskripsi gambar"
          caption="NodeJs"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/html.png"
          altText="Deskripsi gambar"
          caption="Html"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/css.png"
          altText="Deskripsi gambar"
          caption="css"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/react.png"
          altText="Deskripsi gambar"
          caption="React Js"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/tailwind.png"
          altText="Deskripsi gambar"
          caption="Tailwind"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/php.png"
          altText="Deskripsi gambar"
          caption="PHP"
        />

      <RoundImageWithText
          imageUrl="./Skills Logo/laravel.jpg"
          altText="Deskripsi gambar"
          caption="Laravel"
        />

      </div>
      

      <Line/>
      
    </section>
  );
};

export default SkillsPage;