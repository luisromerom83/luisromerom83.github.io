function myFunction() {
    //document.getElementById("demo").innerHTML = "Hello World";
   try{
    const Http = new XMLHttpRequest();
  const url='https://yts.mx/api/v2/list_movies.jsonp?quality=1080&query_term='+document.getElementById("movie").value;
  Http.open("GET", url);
  Http.send();
  document.getElementById("botones").innerHTML='<div class="accordion" id="accordionExample">'
  //Borrar es solo para probar bootstrap
  //document.getElementById("tests").innerHTML='<div class="accordion-item"> <h2 class="accordion-header" id="headingOne">                                                                                                             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">  Primer button    </button></h2><div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"><div class="accordion-body"><strong> Bla bla bla</strong></div></div></div>'
 
  //Accordion bootstrap


  
//Fin Accordion bootrstrap

  
  Http.onreadystatechange = (e) => {
    
    //document.getElementById("respuesta").innerHTML = Http.responseText;
    const resp=JSON.parse(Http.responseText)
    resp.data.movies.forEach((element,index) => {
  
  resp.data.movies[index].torrents.forEach((element,indexT)=>
  {
    
    
    //document.getElementById("botones").innerHTML += '<button id="'+resp.data.movies[index].torrents[indexT].url+'" onclick="alertId(this.id)" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+index+'" aria-expanded="true" aria-controls="collapse'+index+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</button></h2>';
    document.getElementById('botones').innerHTML+='<div class="accordion-item"> <h2 class="accordion-header" id="heading'+indexT+'">      <button onclick="alertId(this.id)" id="'+resp.data.movies[index].torrents[indexT].url+'" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+indexT+'" aria-expanded="false" aria-controls="collapse'+indexT+'">  ' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'    </button></h2><div id="collapse'+indexT+'" class="accordion-collapse collapse show" aria-labelledby="heading'+indexT+'" data-bs-parent="#accordionExample"><div class="accordion-body"><strong>'+ resp.data.movies[index].torrents[indexT].summary+'</strong></div></div></div>'

if (indexT===0)
console.log (document.getElementById('botones').innerHTML)   
    
    
    //document.getElementById("botones").innerHTML += '<a href="'+resp.data.movies[index].torrents[indexT].url+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</a><br>';
    //document.getElementById("botones").innerHTML='<form>  <button type="submit" formaction="https://www.w3docs.com">ABRIR</button></form>'
    //<button type="submit" formaction="https://www.w3docs.com">Click me</button>
  
  }
  )
  document.getElementById("botones").innerHTML +="</div>"
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