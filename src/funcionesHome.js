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
    
    //document.getElementById("respuesta").innerHTML = Http.responseText;
    const resp=JSON.parse(Http.responseText)
    resp.data.movies.forEach((element,index) => {
  
  resp.data.movies[index].torrents.forEach((element,indexT)=>
  {
    
    
   
    document.getElementById('botones').innerHTML+='<div class="accordion" id="accordionExample"><div class="accordion-item"> <h2 class="accordion-header" id="heading'+indexT+'">      <button onclick="alertId(this.id)" id="'+resp.data.movies[index].torrents[indexT].url+'" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+indexT+'" aria-expanded="false" aria-controls="collapse'+indexT+'">  ' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'    </button></h2><div id="collapse'+indexT+'" class="accordion-collapse collapse show" aria-labelledby="heading'+indexT+'" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>'+ resp.data.movies[index].torrents[indexT].summary+'XXX</strong></div></div></div></div>'

 //if ((index+1)==resp.data.movies.length && (indexT+1)==resp.data.movies[index].torrents.length)
 //document.getElementById('botones').innerHTML+='</div><h2>Hola Div</h2>';
    
    
  
  }
  )
  if (index===0)
console.log (document.getElementById('botones').innerHTML)  
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