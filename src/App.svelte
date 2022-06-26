

<script>
  
  import { Router, Link, Route } from "svelte-navigator";

  import Nav from './lib/navbar.svelte'
  import Home from './lib/home.svelte'
  import Page1 from './lib/page1.svelte';
  import DomainPage from './lib/domains.svelte';
  import {myStore} from './domain';
  import VoorWie from './lib/Voor-wie.svelte';
  import DoeMee from "./lib/doe-mee.svelte"; 
  import Producten from "./lib/producten.svelte";
  import Agenda from "./lib/agenda.svelte";
  import KennisBank from "./lib/kennisbank.svelte";
import Kennisbank from "./lib/kennisbank.svelte";

import Login from "./lib/login.svelte";
</script>

<main>
  <!-- 

  <Nav />


    <Home />
     <Page1 />
       <VoorWie />

  -->
  <Router>
  <Nav background_color={'none'}/>
  <Route path="/">
    <Home />
    <Page1 />
    {#if $myStore.domain}
    <DomainPage domain_img={$myStore.img} domain={$myStore.domain}/>
    {/if}
  </Route>
  <Route path="voor-wie">
    <VoorWie />
  </Route>

  <Route path="doe-mee">
    <DoeMee />
  </Route>

  <Route path="producten">
    <Producten />
  </Route>

  <Route path="agenda">
    <Agenda />
  </Route>

  <Route path="kennis-bank">
    <Kennisbank />
  </Route>

  <Route path="login">
    <Login />
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
