
var input = document.getElementById("movie");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("buscar").click();
  }
});




function myFunction() {
 
  //const fs=require('fs')
    //document.getElementById("demo").innerHTML = "Hello World";
   try{
    const Http = new XMLHttpRequest();
  const url='https://yts.mx/api/v2/list_movies.jsonp?quality=1080&query_term='+document.getElementById("movie").value;
  Http.open("GET", url);
  Http.send();
  //document.getElementById("botones").innerHTML='<div class="accordion" id="accordionExample">'
  //Borrar es solo para probar bootstrap
  
 
  //Accordion bootstrap


  
//Fin Accordion bootrstrap

  
  Http.onreadystatechange = (e) => {
    let botones=document.getElementById('botones');
    botones.innerHTML='';
    let botoneshtml='';
    const resp=JSON.parse(Http.responseText)
    
    //Repite por película
    
    resp.data.movies.forEach((element,index) => {
      let movieid=resp.data.movies[index].id;

      //Get genres repeating subarray
      let genres='';
      resp.data.movies[index].genres.forEach((element,indexG)=>{
        //let genero=resp.data.movies[index].genres[0].Value;
        let genero=element;
        let color='' 
        let background='light' 

        //colores
        switch(genero) {
          case 'Acción':color='primary';
            // code block
            break;
          case 'Drama':color='secondary'
            // code block
            break;
            case 'Misterio':color='success'
            // code block
            break;
            case 'Suspense':color='danger'
            // code block
            break;
            case 'Familiar':color='warning'
            // code block
            break;
            case 'Terror': color='info'
            // code block
            break;
            case 'Aventura': color='success'; background="warning"
            // code block
            break;
          default:color='info';  background="warning"
            // code block
        }
        //



                //genres+=`<span class="badge text-bg-${color}" bg-warning> ${genero} </span>`;
                genres+=`<div col><span class="badge bg-${color} text-${background} ">  ${genero} </span></div>`;
      
      }
      
      );
      genres+="</div>"
      //Inicio accordion
    botoneshtml+='<div class="accordion" id="accordionExample">';
    //ROW
    botoneshtml+='<div class="row align-items-start gx-5">'
    //Inicio Items
    botoneshtml+='<div class="accordion-item col-10" > <h2 class="accordion-header" id="heading'+movieid+'">';
    //Botón header
    botoneshtml+='<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+movieid+'" aria-expanded="false" aria-controls="collapse'+movieid+'">  ';
    //Texto botón header
    botoneshtml+= resp.data.movies[index].title +'         '+genres+' </button></h2>';
    //Inicio body
    botoneshtml+='<div id="collapse'+movieid+'" class="accordion-collapse collapse show" aria-labelledby="heading'+movieid+'" data-bs-parent="#accordionExample">';
    //Contenido body
    botoneshtml+='<div class="accordion-body"><strong>'+ resp.data.movies[index].summary+'</strong><br>';
      //Fin repite película
    
    
    
      //Repite por torrent 
  resp.data.movies[index].torrents.forEach((element,indexT)=>
  {
    
    
   
    
    
    //Botón de descarga
    botoneshtml+='<button onclick="alertId(this.id)" id="'+resp.data.movies[index].torrents[indexT].url+'" class="btn btn-warning">'+resp.data.movies[index].torrents[indexT].quality+'</button>';
    

    
 //if ((index+1)==resp.data.movies.length && (indexT+1)==resp.data.movies[index].torrents.length)
 //document.getElementById('botones').innerHTML+='</div><h2>Hola Div</h2>';
    
  
  
  }
  )
  //Fin accordion
  botoneshtml+='</div></div></div></div></div>';
//  botoneshtml+='</div>';
  botones.innerHTML=botoneshtml;
    }
  );
      
    
  
  }
  
  }
  catch (error) {
      console.log(error.message);
    }
  
 
  }
  
  function alertId(id){
    document.getElementById("demo").innerHTML = id;
    document.getElementById("tag").innerHTML = "POST2";
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "//quadienttux.ddns.net:4000/api/torrents", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        test: id
    }));
    
  
  
  
  }
