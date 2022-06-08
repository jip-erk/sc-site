<script>
    import logo from '../assets/logo.svg';
</script>

<header>
  <nav class="container">
    <div>
      <img src={logo} alt="Svelte">
    </div>
    <div>
      <a href="#" class="navLinks">welkom</a>
    </div>
    <div>
      <a href="#" class="navLinks">Portfolio</a>
    </div>
    <div>
      <a href="#" class="navLinks">Portfolio</a>
    </div>
    <div>
      <a href="#" class="navLinks">Portfolio</a>
    </div>
    <div>
      <a href="#" class="navLinks">Portfolio</a>
    </div>
    
  </nav>
</header>
<style>
header{
  position: absolute;
  width: 100%;
}

img{
  width: 100px;
  height: 100px;
}

nav {
  display: grid;
  grid-template-columns: repeat(7, 0.5fr);
  grid-auto-rows: auto;
  grid-gap: 1em;
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


</style>
