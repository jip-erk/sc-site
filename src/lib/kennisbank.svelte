<script>
    import { onMount } from "svelte";
    
    onMount(() => {
      window.scrollTo(0, 0);
    });
    </script>
    
    <section id="first">
        <div class="center">
            <span>Kennis Bank</span>
            <a href="#2">
            <button>Klik hier</button>
            </a>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
        </div>
    </section>
    <section>
        <div class="cont" id="2">
            <div class="img">
                <img alt="img" src="https://partyspellen.nl/wp-content/uploads/2020/03/mind.png">
            </div>
            <div class="text">
                <h1>Kennis Bank</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aperiam mollitia officia doloremque quo explicabo tempore, earum ullam laborum, velit commodi quam saepe dignissimos natus incidunt ad libero dolore? Inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at repudiandae aliquam porro dolore excepturi accusamus est, voluptatem aut iste facilis aliquid, doloremque delectus laudantium dignissimos repellat nulla quis debitis?
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quis amet. Quod, corporis consequatur. Commodi debitis quidem voluptatibus quibusdam nobis nesciunt ullam possimus alias iusto quos, asperiores sint architecto odit?
            </div>
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
        background-image: url('https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1600');
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
        max-width:  300px;
        height: auto;
        width: 100%;
        border-radius: 10px;
    }
    .text{
   text-align: left;
   font-size: 20px;
}

    
    
    </style>
    