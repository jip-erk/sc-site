

<script>
import {myStore} from '../domain';

var cards = [
    "Cooperatie",
    "Economie",
    "Geld",
    "ICT",
    "Water & Energie",
    "gezondheid",
    "voedsel",
    "Samenleven",
    "Educatie"
];

var cards_img= [
    "./src/assets/icons/Samenleving.png",
    "./src/assets/icons/Economie.png",
    "./src/assets/icons/Geld.png",
    "./src/assets/icons/ICT.png",
    "./src/assets/icons/Water & Energie.png",
    "./src/assets/icons/Gezondheid.png",
    "./src/assets/icons/voedsel.png",
    "./src/assets/icons/Samenleving.png",
    "./src/assets/icons/Educatie.png"
];



function ClickedDomain(Card, card_img){
    $myStore.domain = Card;
    $myStore.img = card_img;
} 


</script>

<section id="page1">
    
    <div class="cards">

        {#each cards as card, i}
        <a on:click={() => ClickedDomain(card, cards_img[i])} href="#{card}">
            <div class="card">
                <div class="card__image-holder">
                  <img class="card__image" src="{cards_img[i]}" alt="wave" />
                </div>
                <div class="card-title">
                <h2>{card}</h2>
                </div>
            </div>
        </a>
        {/each}
      
    </div>


</section>

<style>
section{
    background-color: #ffffff;
    background-size: cover;

    width: 100%;
}


h2{
    font-size: 24px;
      color: rgb(22, 22, 22);
    font-family: 'Ubuntu', sans-serif;
      margin: 0;
      padding: 0;
}


div.cards {

  margin: auto;
  max-width: 960px;
  text-align: center;
  position: relative;


}
div.card {
  background-color: #ace281;
  border-radius: 10px;
  transform: translateY(50px);
  display: inline-block;
  margin: 8px;
  max-width: 300px;
  perspective: 1000;
  position: relative;
  text-align: left;
  transition: all 0.3s 0s ease-in;
  width: 300px;
  z-index: 1;
}
div.card img {
  width: 70%;
  margin: auto;
  display: block;

}
div.card .card__image-holder {

  height: 0;
  padding-bottom: 75%;
  z-index: 0;
}
div.card div.card-title {
    margin-top: 10px;
    background-color: #8fbc6c;
  position: relative;
  z-index: 0;
transition: all 0.2s ease-in;
padding: 10px;
border-radius: 5px;

}

div.card-title:hover{
background-color: #ace281 !important;


}

a{
  text-decoration: none;
}


</style>