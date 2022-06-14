

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

var cards_en = [
    "Cooperation",
    "Economy",
    "Money",
    "ICT",
    "Water & Energy",
    "health",
    "food",
    "Life",
    "Education"
];



function ClickedDomain(Card, card_img){
    $myStore.domain = Card;
    $myStore.img = "https://source.unsplash.com/300x225/?" + card_img;
} 


</script>

<section id="page1">
    
    <div class="cards">

        {#each cards as card, i}
        <a on:click={() => ClickedDomain(card, cards_en[i])} href="#{card}">
            <div class="card">
                <div class="card__image-holder">
                <img class="card__image" src="https://source.unsplash.com/300x225/?{cards_en[i]}" alt="wave" />
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
    height: 100vh;
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
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
div.card {


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

  max-width: 300px;
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



</style>