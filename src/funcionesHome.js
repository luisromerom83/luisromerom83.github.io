function myFunction() {
    //document.getElementById("demo").innerHTML = "Hello World";
   try{
    const Http = new XMLHttpRequest();
  const url='https://yts.mx/api/v2/list_movies.jsonp?quality=1080&query_term='+document.getElementById("movie").value;
  Http.open("GET", url);
  Http.send();
  document.getElementById("botones").innerHTML='<div class="accordion" id="accordionExample">'
  //Borrar es solo para probar bootstrap
  document.getElementById("tests").innerHTML='<div class="accordion" id="accordionExample">  <div class="accordion-item">    <h2 class="accordion-header" id="headingOne">      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">        Accordion Item #1      </button>    </h2>    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">      <div class="accordion-body">        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.      </div>    </div>  </div>  <div class="accordion-item">    <h2 class="accordion-header" id="headingTwo">      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">        Accordion Item #2      </button>    </h2>    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">      <div class="accordion-body">        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.      </div>    </div>  </div>  <div class="accordion-item">    <h2 class="accordion-header" id="headingThree">      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">        Accordion Item #3      </button>    </h2>    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">      <div class="accordion-body">        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It&apos;s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.      </div>    </div>  </div></div>'
//Accordion bootstrap


  
//Fin Accordion bootrstrap

  
  Http.onreadystatechange = (e) => {
    
    //document.getElementById("respuesta").innerHTML = Http.responseText;
    const resp=JSON.parse(Http.responseText)
    resp.data.movies.forEach((element,index) => {
  
  resp.data.movies[index].torrents.forEach((element,indexT)=>
  {
    document.getElementById("botones").innerHTML+='<div class="accordion-item"> <h2 class="accordion-header" id="heading"'+index+'">'
    //document.getElementById("botones").innerHTML += '<button type="submit" formaction="'+resp.data.movies[index].torrents[indexT].url+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</button><br>';
    document.getElementById("botones").innerHTML += '<button id="'+resp.data.movies[index].torrents[indexT].url+'" onclick="alertId(this.id)" class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse'+index+'" aria-expanded="true" aria-controls="collapse'+index+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</button></h2>';
    //                                                                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">

    
    document.getElementById("botones").innerHTML+=' <div id="collapse'+index+'" class="accordion-collapse collapse show" aria-labelledby="heading'+index+'" data-bs-parent="#accordionExample"><div class="accordion-body">'+resp.data.movies[index].summary+'</div></div></div>'
    
    //document.getElementById("botones").innerHTML += '<a href="'+resp.data.movies[index].torrents[indexT].url+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</a><br>';
    //document.getElementById("botones").innerHTML='<form>  <button type="submit" formaction="https://www.w3docs.com">ABRIR</button></form>'
    //<button type="submit" formaction="https://www.w3docs.com">Click me</button>
  
  }
  )
  
    }
  );
      
    
  
  }
  document.getElementById("botones").innerHTML +="</div>"
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