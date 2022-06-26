<script>
export let domain;
export let domain_img;

import { onMount } from "svelte";

onMount(() => {
  window.scrollTo(0, 0);
});
</script>

<section tabindex="-1" id={domain}>
   <div class="cont">
        <div class="img">
            <img alt="img" src={domain_img}>
        </div>
        <div class="text">
            <h1>{domain}</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam mollitia officia doloremque quo explicabo tempore, earum ullam laborum, velit commodi quam saepe dignissimos natus incidunt ad libero dolore? Inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at repudiandae aliquam porro dolore excepturi accusamus est, voluptatem aut iste facilis aliquid, doloremque delectus laudantium dignissimos repellat nulla quis debitis?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quis amet. Quod, corporis consequatur. Commodi debitis quidem voluptatibus quibusdam nobis nesciunt ullam possimus alias iusto quos, asperiores sint architecto odit?
        </div>
   </div>
</section>

<style>
section{
 
    background-size: cover;
    height: 100vh;
    width: 100%;
}

h1{
    font-size: 50px;
}


.cont{
    background-color: #e1ccff;
    grid-template-columns: repeat(2, 2fr);
    gap: 100px;
    padding: 80px;
    display: grid;
    width: 80%;
    justify-content: center;
    align-items: center;
   border-radius: 20px;
    position: relative;
  top: 50%; left: 50%;
  transform: translateX(-50%) translateY(-50%);

}

img{
    height: auto;
    width: 70%;
    border-radius: 10px;
}

.text{
   text-align: left;
   font-size: 20px;
}




</style>