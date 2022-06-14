<script>

</script>

<section>
    <div class="center">
        <span>Ontdek de domeinnen</span>
        <a href="#page1">
        <button>start hier</button>
        </a>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
    </div>
</section>

<style>


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

section{
    background-image: url('https://i.imgur.com/4rPdrXI.jpg');
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

</style>

