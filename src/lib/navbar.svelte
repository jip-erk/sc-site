<script>
    import logo from '../assets/logo.svg';
    import { Router, Link, Route } from "svelte-navigator";

    export let background_color;
    

    


  

</script>

<header style="background-color: {background_color};">
  <nav class="container">
    <div class="logo">
      <img src={logo} alt="Svelte">
      <div class="txt">
        <p>NIEUW</p> 
        <p>BRABANT</p>
        <p>ZUID-OOST</p>
      </div>
    </div>
    <div>
      <Link to="/"><a href=" " class="navLinks">Welkom</a></Link>
    </div>
    <div>
      <Link to="/"><a href=" " class="navLinks">domeinen</a></Link>
    </div>
    <div>
      <Link to="/voor-wie"><a href=" " class="navLinks">Voor Wie</a></Link>
    </div>
    <div>
      <Link to="/doe-mee"><a href=" " class="navLinks">Doe mee</a></Link>
    </div>
    <div>
      <Link to="/"><a href=" " class="navLinks">Producten</a></Link>
    </div>
    <div>
      <Link to="/"><a href=" " class="navLinks">Agenda</a></Link>
    </div>
    <div>
      <Link to="/"><a href=" " class="navLinks">kennis Bank</a></Link>
    </div>
    <div>
      <Link to="/"><a href=" " class="navLinks">Login</a></Link>
    </div>
    
  </nav>
</header>
<style>

header{
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  position: fixed;
  width: 100%;
}
p{
  color: aliceblue;
  padding: 0;
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.1em;
}

.txt p:nth-child(1){
  letter-spacing: 0.5em;
}

.txt p:nth-child(2){
  letter-spacing: 0.1em;
}


.txt{
  margin-left: 10px;
  display: inline-block;
  text-align:justify;
  justify-content: space-between;
  position: relative;
  
}

img{
  width: 100px;
  height: 100px;
}

nav {
  display: grid;
  grid-template-columns: repeat(9, 0.5fr);
  grid-auto-rows: auto;
  grid-gap: 0.1em;
  align-items: center;
  text-align: center;
}

@media screen and (max-width: 900px) {
  nav {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    grid-gap: 1em;
 }
}  

.navLinks {
  font-family: 'Ubuntu', sans-serif;
  font-size: 1.2em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgb(255, 255, 255);
}

a{
  position: relative;
  display: inline-block;
  text-decoration: none;
}

a::after {
  position: absolute;
  left: 0;
  content: "";
  width: 100%;
  height: 1.5px;
  background: rgb(255, 255, 255);
  bottom: -2px;
  transform: scale(0, 1);
  transition: transform 0.3s;
  transform-origin: right top;
}
a:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}

.logo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
}

</style>
