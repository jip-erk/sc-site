<script>
import { onMount } from "svelte";

onMount(() => {
  window.scrollTo(0, 0);
});
</script>

<section id="first">
    <div class="center">
        <span>Doe Mee!</span>
        <a href="#2">
        <button>Klik hier</button>
        </a>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
    </div>
</section>
<section>
    <div class="cont" id="2">
                    <h1>Doe Mee!</h1>
                    Naast het ontvangen van de nieuwsbrief en daarmee vriend worden van Nieuw Brabant Zuid-Oost kun je bij ons aan te sluiten of nader kennis te maken: 

<br> <br> Ontmoet elkaar op de maandelijkse borrel <br> <br>

We organiseren eens per maand een borrel. In een informele setting komen we bij elkaar onder het genot van een drankje en een hapje maken we graag kennis met jou en delen we de laatste ontwikkelingen.

<br><br> Word mede-eigenaar<br> <br>

Als mede-eigenaar heb je een aantal voordelen. Zo kun je voor een lager tarief deelnemen aan activiteiten, krijg je toegang tot de kennisbank en kun je meebeslissen over de thema's en investeringen van de coöperatie. Het mede-eigenaarschap van de regio Nieuw Brabant Zuid-Oost kost 35 euro per jaar. 

<br><br> Support Society 4.0<br> <br>

Ook kun je ook nog de landelijke Society 4.0 organisatie steunen; dat kost dat 15 euro per jaar extra en hiermee maak je het mogelijk dat de landelijke organisatie verder kan groeien.

<br><br> Word kerngroeplid<br> <br>

Als kerngroeplid doe je mee aan één van onze projecten. Bij het kopje "Wij zoeken" kun je vinden waar wij nu specifiek naar op zoek zijn. Je draagt bij vanuit je eigen missie. Er er wordt geen vergoeding gegeven. Na aanmelding nemen we contact met je op.
    </div>
 </section>

<style>
section{
    background-color: #ffffff;
    background-size: cover;
    height: 100vh;
    width: 100%;
}

svg{
    transition: all .3s ease-in-out;
    transform: scale(1.2);
    fill: #fff;
    margin-top: 20px;
}




span{
    font-size: 3em;
    color: aliceblue;
   
}

.center{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

#first{
    background-image: url('https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80');
    background-size: cover;
    height: 100vh;
    width: 100%;
}

button{
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 20px;
    padding: 10px 30px 10px 30px;
    font-size: 1.2em;
    font-family: 'Ubuntu', sans-serif;
    color: rgb(0, 0, 0);
    margin-top: 30px;
    transition: all 0.2s;
}

button:hover{
    background-color: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    border-radius: 15px;
}

a:hover + svg{
    transform: translate(0px,20px);
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
    width: 100%;
    border-radius: 10px;
}

.text{
    content-align: center;
   text-align: center;
   font-size: 20px;
}


</style>
