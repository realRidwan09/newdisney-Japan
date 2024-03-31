import "./Nav.modules.css"

const Nav = ()=>{
    return(
        <div id="navWrapcon">
                <div id="navWrap">
                   <div id="logo"> <img src="./src/assets/disneylogo.jpg" alt="disneylogo" /></div>
                   
                    <a id="nav" href=""> Disney Plus</a>
                    <a id="nav" href="">Shopping</a>
                    <a id="nav" href="">Movie</a>
                    <a id="nav" href="">Park & Resort</a>
                    <a id="nav" href="">Music</a>
                    <a id="nav" href="">Menu</a>
                    
                    <div id="inputSearch">
                        <input type="text" placeholder="search within the site"  />
                        <a id="searching" href=""><img id="searchlogo" src="./src/assets/download.jpeg" alt="" width="20px" height="20px"/> </a>
                    </div> 

                </div>

                <div id="homepageText">
                  <h2> A story from Olaf</h2>
                  <br />
                
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas debitis magnam eveniet? Iure ab, ipsum at eos voluptates accusantium repudiandae maxime, et vero, libero possimus voluptate fuga neque. Odio.</p>
                </div>
    

      </div>
    )


}

export default Nav