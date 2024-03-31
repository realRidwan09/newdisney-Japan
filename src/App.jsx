import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.modules.css'
import Cards from './component/cards/Cards'
import Nav from './component/nav/Nav'
import Basenav from './component/basehead/Basenav'

function App() {
  

  const movieOne =  [
    {
      image : "./src/assets/scroll1.jpg",
      heading : "Pixar best",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione."  
    },

    {
      image : "./src/assets/scroll2.jpg",
      heading : "Held nationwide from May to June",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione."
    },

    {
      image : "./src/assets/scroll3.jpg",
      heading : "Focus on Minnie in March",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ration."
    },

    {
      image : "./src/assets/scroll4.jpg",
      heading : "disney palpaloosa",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione."
    },

  ]

  const movieTwo =  [
    {
      image : "./src/assets/scroll4a.jpg",
      heading : "news",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione.", 
      date:"3/24/2024" 
    },

    {
      image : "./src/assets/scroll4b.jpg",
      heading : "news",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione.",
      date:"3/24/2024" 
    },

    {
      image : "./src/assets/scroll4c.jpg",
      heading : "news",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ration.",
      date:"3/24/2024" 
    },

    {
      image : "./src/assets/scroll6a.jpg",
      heading : "news",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ration.",
      date:"3/24/2024" 
    }
  ]

   const movieThree =  [
    {
      image : "./src/assets/scroll5d.jpg",
      heading : "This month's reconmended works",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione."  
    },

    {
      image : "./src/assets/scroll5b.jpg",
      heading : "final season",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione."
    },

    {
      image : "./src/assets/scroll5c.jpg",
      heading : "original series",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ration."
    },

    {
      image : "./src/assets/scroll5d.jpg",
      heading : "disney plus",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt, eaque maiores incidunt eum dolores vero veniam tempore quisquam quaerat laborum ratione."
    },
  ]

    const MovieFour =  [
      {
        image : "./src/assets/scroll3a.jpg",
        description : "Chip & Dale birthday commemorative goods."
      },
  
      {
        image : "./src/assets/scroll3b.jpg",
        heading : "Casual Mickey items",
        description : "Lorem ipsum dolor sit amet consectetur."
      },
  
      {
        image : "./src/assets/scroll3c.jpg",
        heading : "",
        description : "Reconmmeded gift item for the welcome season"
      },
  
      {
        image : "./src/assets/scroll3d.jpg",
        heading : "Disney Plastic Gamaguchi and other",
        description : "Chara Marche"
      },
  
    ]

    const movieFive= [

      {
        image : "./src/assets/scroll7a.jpg",
        heading : "chip and dale",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt."  
      },

    {
      image : "./src/assets/scroll7b.jpg",
      heading : "rapunzel",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt."  
    },

    {
      image : "./src/assets/scroll7c.jpg",
      heading : "ducky and bunny",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt."
    },

    {
      image : "./src/assets/scroll7d.jpg",
      heading : "rabbit",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt."
    },

    {
      image : "./src/assets/scroll7e.jpg",
      heading : "Tonsuke",
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime deserunt.",
      link : "go to chracter list"
    },
  ]

  const imageLogo = [
    {image : "./src/assets/disneylogo.jpg" },
    {image : "./src/assets/marvelogo.jpg" },
    {image : "./src/assets/pixarlogo.jpg" },
    {image : "./src/assets/starwarslogo.png" }
  ]

  const movieSix= [

    {image : "./src/assets/spe1.png"},
    {image : "./src/assets/spe2.png"},
    {image : "./src/assets/spe3.png"},
    {image : "./src/assets/spe4.png"},
    {image : "./src/assets/spe5.png"},
]

const movieSeven= [

  {image : "./src/assets/scr9a.png" },
  {image : "./src/assets/scr9b.png" },
  {image : "./src/assets/scr9c.png" },
  {image : "./src/assets/scr9d.png" },
  {image : "./src/assets/scr9e.jpg" },
  {image : "./src/assets/scr9f.png" }

]

const movieEight= [
  {image : "./src/assets/scr9f.png" },
  {image : "./src/assets/scr9e.jpg" },
  {image : "./src/assets/scr9d.png" },
  {image : "./src/assets/scr9f.png" },
  {image : "./src/assets/scr9a.png" },
  {image : "./src/assets/scr9b.png" }
  

]

const movieNine= [
  {image : "./src/assets/scr9a.png" },
  {image : "./src/assets/scr9b.png" },
  {image : "./src/assets/scr9c.png" },
  {image : "./src/assets/scr9d.png" },
  {image : "./src/assets/scr9e.jpg" },
  {image : "./src/assets/scr9f.png" }
  

]

const sociaLink= [

 
  {image : "./src/assets/insta.png" },
  {image : "./src/assets/xtwi.png" },
  {image : "./src/assets/fb.png" },
  {image : "./src/assets/yt.png" },

]


  return (
    <>

        <Nav/>
      
        <div id='movie1'>
         {
         movieOne.map((Movie)=>{
          return(
              <Cards
              image = {Movie.image}
              heading = {Movie.heading}
              description = {Movie.description}/>
          )
         })
         }
        </div>

            <h2 id='one'>news</h2>

        
      <div id='movie2'>

         {movieTwo.map((Movie2)=>{
          return(
            <Cards
               image = {Movie2.image}
               heading = {Movie2.heading}
               description ={Movie2.description}
               date={Movie2.date}
            />
          )
         })
         }
      </div>

      <div id='xmovie3'>

        <h2 id='disney'>Disney Plus recommended information</h2>

            <div id='movie3'>

              {movieThree.map((Movie3)=>{
                  return(
                  <Cards
                  image = {Movie3.image}
                  heading = {Movie3.heading}
                  description = {Movie3.description}
                  />
                  )
              })}

            </div>

      </div>


      <div>

              <h2 id='one'>Goods featuring popular characters are available!</h2>

              <div id='movie4'>

                {MovieFour.map((movie4)=>{
                  return(
                    <Cards
                      image = {movie4.image}
                      heading = {movie4.heading}
                      description = {movie4.description}
                    />
                  )
                })}

              </div>
            
      </div>

    <div>

        <h2>Character introduction</h2>

        <div id='movie5'>

          {movieFive.map((movie5)=>{
            return(
              <Cards
                image={movie5.image}
                heading={movie5.heading}
                description={movie5.description}
                link = {movie5.link}
              />
            )
          })}

        </div>
              
    </div>
          

        <div id='logob' style={{display:"flex", gap:"20px"}}>

          {imageLogo.map((logo)=>{
            return(
              <Cards
                image = {logo.image}
              />
            )
          })}

        </div>

      <div id='smovie6'>
          <h2>Special</h2>

        <div id='movie6'>

          {movieSix.map((movie6)=>{
            return(
              <Cards
              image = {movie6.image}
              />
            )
          })}

        </div>

      </div>

      <div id='simage7'>

          <h2>character products</h2>

          <div id='image7'>

              {movieSeven.map((image7)=>{
              return(
              <Cards
                image = {image7.image}
              />
            )
            })}

          </div>
      </div>


        <div id='image8'>

            {movieEight.map((image8)=>{
              return(
                  <Cards
                  image ={image8.image}
                  />
              )
            })}

        </div>


        <div id='image9' style={{display:"flex", gap:"20px"}}>

          {movieNine.map((image9)=>{
            return(
                <Cards
                image ={image9.image}
                />
            )
          })}

        </div>

      <div className="somedia">

        <div id='socialMedialogo' style={{display:"flex", gap:"20px"}}>

          {sociaLink.map((mediaicon)=>{
            return(
          <Cards
          image ={mediaicon.image}
          description= {mediaicon.description}
          />
          )
          })}
          
        </div>

        <h6>Go to SNS list</h6>

      </div>

      <Basenav />


  </>
  )
}

export default App
