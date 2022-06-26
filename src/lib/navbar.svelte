<script>
  import { onMount } from "svelte";

onMount(() => {
  window.scrollTo(0, 0);
});

    import logo from '../assets/logo.svg';
    import { Router, Link, Route } from "svelte-navigator";

    export let background_color;
    let height = '100px';
    let display = 'inline-block';
  if(background_color){
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      background_color = '#e1ccff'; 
      display = 'none';
      height = '50px';

    } else {
      background_color = '#e1ccff00';
      display = 'inline-block';
      height = '100px';
    }
  });
  }


</script>

<header style="background-color: {background_color};">
  <nav class="container">
    <div  class="logo">
      <img style="height: {height};" src={logo} alt="Svelte">
      <div style="display: {display};" class="txt">
        <p>NIEUW</p> 
        <p>BRABANT</p>
        <p>ZUID-OOST</p>
      </div>
    </div>
    <div>
      <Link to="/"><p class="navLinks">Welkom</p></Link>
    </div>
  
    <div>
      <Link to="/voor-wie"><p class="navLinks">Voor Wie</p></Link>
    </div>
    <div>
      <Link to="/doe-mee"><p  class="navLinks">Doe mee</p></Link>
    </div>
    <div>
      <Link to="/producten"><p class="navLinks">Producten</p></Link>
    </div>
    <div>
      <Link to="/agenda"><p class="navLinks">Agenda</p></Link>
    </div>
    <div>
      <Link to="/kennis-bank"><p class="navLinks">kennis Bank</p></Link>
    </div>
    <div>
      <Link to="/login"><p class="navLinks">Login</p></Link>
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
.txt > p{
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

.navLinks{
  position: relative;
  display: inline-block;
  text-decoration: none;
}

.navLinks::after {
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
.navLinks:hover::after {
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
