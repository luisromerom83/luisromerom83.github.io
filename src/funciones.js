function myFunction() {
    //document.getElementById("demo").innerHTML = "Hello World";
   try{
    const Http = new XMLHttpRequest();
  const url='https://yts.mx/api/v2/list_movies.jsonp?quality=1080&query_term='+document.getElementById("movie").value;
  Http.open("GET", url);
  Http.send();
  document.getElementById("botones").innerHTML=""
  Http.onreadystatechange = (e) => {
    
    //document.getElementById("respuesta").innerHTML = Http.responseText;
    const resp=JSON.parse(Http.responseText)
    resp.data.movies.forEach((element,index) => {
  
  resp.data.movies[index].torrents.forEach((element,indexT)=>
  {
    
    //document.getElementById("botones").innerHTML += '<button type="submit" formaction="'+resp.data.movies[index].torrents[indexT].url+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</button><br>';
    document.getElementById("botones").innerHTML += '<button id="'+resp.data.movies[index].torrents[indexT].url+'" onclick="alertId(this.id)" >' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</button><br>';
    //document.getElementById("botones").innerHTML += '<a href="'+resp.data.movies[index].torrents[indexT].url+'">' + resp.data.movies[index].title + ' '+resp.data.movies[index].torrents[indexT].quality+'</a><br>';
    //document.getElementById("botones").innerHTML='<form>  <button type="submit" formaction="https://www.w3docs.com">ABRIR</button></form>'
    //<button type="submit" formaction="https://www.w3docs.com">Click me</button>
  
  }
  )
  
    }
  );
      
    
  
  }
  //document.getElementById("botones").innerHTML +="</form>"
  }
  catch (error) {
      console.log(error.message);
    }
  
  
  }
  
  function alertId(id){
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://quadienttux.ddns.net:4000/api/torrents", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        test: "done"
    }));
    
    document.getElementById("demo").innerHTML = id;
    document.getElementById("tag").innerHTML = "POST2";
  
  
  }