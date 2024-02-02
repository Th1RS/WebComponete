class CardNews extends HTMLElement {
    constructor( ) {
        super( );


        const shadow = this.attachShadow({mode:"open"}); 
        //amarrando os filhos na arvore fantasma:
        shadow.appendChild(this.build( ));
        shadow.appendChild(this.style( ));//filhos amarrados na arvore 

        
    }
    // Vamos criar a base do componete agoras:

    //construtor
    build(){
        const componetRoot = document.createElement('div');
        componetRoot.setAttribute("class", "card");//essa linha faz que, esse elemento tenha uma classe, é como se nós coloca-se um atributo 

        const cardLeft = document.createElement('div');
        cardLeft.setAttribute("class", "card__left");//adicionamos classes para facilitar depois para alterar elementos expecificos
        //o coisa boa, fazer filhos kkk
        //brincadeira, vamos fazer os filhos da div cardLeft, no caso `span, a e p`
        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute('autor') || "Annonymous"); //adicionado o conteúdo, aparti do que pegar pelo atributo `autor`

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content")

        //filhos da div(cadLeft) criados, agora vamos prender as crianças ao pai 
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement('div');
        cardRight.setAttribute("class", "card__right");//essa div não poderia ficar sem sua classe também 
        //essa div é mais moderada na questão filhos, tem um só, img 
        const newsImagen = document.createElement("img");
        newsImagen.src= this.getAttribute("photo") || "./photos/OIG1.XizKFBUwiD.jpeg"; 
        newsImagen.alt="Foto da noticia"

        cardRight.appendChild(newsImagen);



        //depois de criar o pai, e os elementos filhos, vamos amarrar os componetes filhos
        //no elemento Pai com appendChild 

        componetRoot.appendChild(cardLeft);
        componetRoot.appendChild(cardRight);
        //crianças mal criadas, tem até que amarralas ao Pai 


        return componetRoot;

    }

    //estilo
    style(){
        const style = document.createElement("style");
        style.textContent = `
        .app_Root{
            /* Adicione as propriedades de estilo desejadas para sua div */
            width: 300px; /* Ajuste conforme necessário */
            height: 200px; /* Ajuste conforme necessário */
            background-color: #f0f0f0;
        }
        .card {
            width: 80%;
            box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
            display: flex; 
            flex-direction: row;
            justify-content: space-between; 
            margin: 10px ;
        
        }

        .card__left{
            display: flex;
            flex-direction: column; 
            justify-content: center;
            padding-left: 10px;

        }
        .card__left > span {
            font-weight: 400;
        }

        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none; 
            font-weight: bold;

        }
        .card__left > p {
            color: rgb(70, 70, 70);
        }
        .card__right{
            position: relative;
            width:100%;

        }
        .card__right > img {
            margin: 3px;
            padding-left:5px;
            padding-right:5px;
            float: right;
            width: 240px;
        }
        `;

        return style; 
    }

}
// body, html {
//     margin: 0;
//     padding: 0;
//   }
  
//   .container {
//     position: relative;
//     width: 100%; /* ou uma largura desejada */
//   }
  
//   .extrema-direita {
//     position: absolute;
//     top: 0;
//     right: 0;
//   }

// a forma com vamos referenciar nos componete: 
customElements.define("card-news", CardNews)