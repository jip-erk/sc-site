

<script>
  import Nav from './lib/navbar.svelte'
  import Home from './lib/home.svelte'
  import Page1 from './lib/page1.svelte';
  import DomainPage from './lib/domains.svelte';
  import {myStore} from './domain';


 
</script>

<main>
  <Nav />
  <Home />
  <Page1 />

  {#if $myStore.domain}
    <DomainPage domain_img={$myStore.img} domain={$myStore.domain}/>
  {/if}


 
  
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
