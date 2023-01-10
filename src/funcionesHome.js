const fs=require('fs')


function myFunction() {
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
    const resp=JSON.parse(Http.responseText)
    resp.data.movies.forEach((element,index) => {
      
  resp.data.movies[index].torrents.forEach((element,indexT)=>
  {
    
    
   
    //Inicio accordion
    botones.innerHTML+='<div class="accordion" id="accordionExample">';
    //Inicio Header
    botones.innerHTML+='<div class="accordion-item"> <h2 class="accordion-header" id="heading'+indexT+'">';
    //Botón header
    botones.innerHTML+='<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+indexT+'" aria-expanded="false" aria-controls="collapse'+indexT+'">  ';
    //Texto botón header
    botones.innerHTML+= resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'    </button></h2>';
    //Inicio body
    botones.innerHTML+='<div id="collapse'+indexT+'" class="accordion-collapse collapse show" aria-labelledby="heading'+indexT+'" data-bs-parent="#accordionExample">';
    //Contenido body
    botones.innerHTML+='<div class="accordion-body"><strong>'+ resp.data.movies[index].summary+'</strong><br>';
    //Botón de descarga
    botones.innerHTML+='<button onclick="alertId(this.id)" id="'+resp.data.movies[index].torrents[indexT].url+'" class="btn btn-warning">Descargar</button>';
    //Fin accordion
    botones.innerHTML+='</div></div></div></div>'
 //if ((index+1)==resp.data.movies.length && (indexT+1)==resp.data.movies[index].torrents.length)
 //document.getElementById('botones').innerHTML+='</div><h2>Hola Div</h2>';
    
    
  
  }
  )
  
    }
  );
      
    
  
  }
  
  }
  catch (error) {
      console.log(error.message);
    }
  
  console.log("Intenta escribir archivo")  
  fs.writeFile('/home/jromero/log.txt',botones,(err)=>{
    if (err) {
      console.log("Falló al escribir el archivo");  
      throw err;
    
  }
    else console.log("Archivo escrito");
  })
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