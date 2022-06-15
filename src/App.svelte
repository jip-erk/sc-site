

<script>
  
  import { Router, Link, Route } from "svelte-navigator";

  import Nav from './lib/navbar.svelte'
  import Home from './lib/home.svelte'
  import Page1 from './lib/page1.svelte';
  import DomainPage from './lib/domains.svelte';
  import {myStore} from './domain';
  import VoorWie from './lib/Voor-wie.svelte';


 
</script>

<main>
  <!-- 

  <Nav />


    <Home />
     <Page1 />
       <VoorWie />

  -->
  <Router>

  <Route path="/">
    <Nav background_color={'none'}/>
    <Home />
    <Page1 />
    {#if $myStore.domain}
    <DomainPage domain_img={$myStore.img} domain={$myStore.domain}/>
    {/if}
  </Route>
  <Route path="/voor-wie">
    <Nav background_color={'#e1ccff'}/>
    <VoorWie />
  </Route>

</Router>

  



</main>

<style>
  :root {
  
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  
  main {
    text-align: center;

    margin: 0 auto;
  }


</style>
