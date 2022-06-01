
var login = document.getElementById("login");
var regalo = document.getElementById("regalo");
var regaloCrear = document.getElementById("regaloCrear");
var regaloModificar = document.getElementById("regaloModificar");
var regaloBorrar = document.getElementById("regaloBorrar");
var cat = document.getElementById("cat");
var pedido = document.getElementById("pedido");

login.addEventListener("click", ()=>{
  var user=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  
  var body= { 
      email: user,
      password: password
  }

  var data=getInfo("http://localhost:4002/v1/usuarios/login", body)

  document.getElementById("usuario").textContent =data;

  clearDiv("dispregalo");
  clearDiv("dispregaloID");
  clearDiv("modregaloID");
  clearDiv("borraregaloID");
  clearDiv("dispcat");
  clearDiv("dispped");
  
})


regalo.addEventListener("click", ()=>{

  var data=getInfoGET("http://localhost:4002/v1/regalos")

  document.getElementById("dispregalo").textContent =data;

  clearDiv("usuario");
  clearDiv("dispregaloID");
  clearDiv("modregaloID");
  clearDiv("borraregaloID");
  clearDiv("dispcat");
  clearDiv("dispped");
})

regaloCrear.addEventListener("click", ()=>{
  var id_regalo=document.getElementById("id_regalo").value;
  var descripcion=document.getElementById("descripcion").value;
  var costo = document.getElementById("costo").value;
  var estrellas = document.getElementById("estrellas").value;
  var id_categoria = document.getElementById("id_categoria").value;
  var body= { 
      id_regalo: id_regalo,
      descripcion: descripcion,
      costo : costo,
      estrellas_promedio : estrellas,
      id_categoria : id_categoria
  }

  var data=getInfo("http://localhost:4002/v1/regalos", body)

  document.getElementById("dispregaloID").textContent =data;

  clearDiv("usuario");
  clearDiv("dispregalo");
  clearDiv("modregaloID");
  clearDiv("borraregaloID");
  clearDiv("dispcat");
  clearDiv("dispped");
})

regaloModificar.addEventListener("click", ()=>{
  var id_regalo=document.getElementById("id_regalo").value;
  var descripcion=document.getElementById("descripcion").value;
  var costo = document.getElementById("costo").value;
  var estrellas = document.getElementById("estrellas").value;
  var id_categoria = document.getElementById("id_categoria").value;
  var body= { 
      id_regalo: id_regalo,
      descripcion: descripcion,
      costo : costo,
      estrellas_promedio : estrellas,
      id_categoria : id_categoria
  }

  var url = "http://localhost:4002/v1/regalos/" + id_regalo;
  getInfoPUT(url, body);

  var data=getInfoGET(url);
  document.getElementById("modregaloID").textContent =data;

  clearDiv("usuario");
  clearDiv("dispregalo");
  clearDiv("dispregaloID");
  clearDiv("borraregaloID");
  clearDiv("dispcat");
  clearDiv("dispped");
})

regaloBorrar.addEventListener("click", ()=>{
  var id_regalo=document.getElementById("id_regalo").value;


  var url = "http://localhost:4002/v1/regalos/" + id_regalo;
  var data = getInfoDELETE(url);

  document.getElementById("borraregaloID").textContent =data;

  clearDiv("usuario");
  clearDiv("dispregalo");
  clearDiv("dispregaloID");
  clearDiv("modregaloID");
  clearDiv("dispcat");
  clearDiv("dispped");
})


cat.addEventListener("click", ()=>{

  var data=getInfoGET("http://localhost:4002/v1/categorias")

  document.getElementById("dispcat").textContent =data;

  clearDiv("usuario");
  clearDiv("dispregalo");
  clearDiv("dispregaloID");
  clearDiv("modregaloID");
  clearDiv("borraregaloID");
  clearDiv("dispped");
})

pedido.addEventListener("click", ()=>{

  var data=getInfoGET("http://localhost:4002/v1/pedidos")

  document.getElementById("dispped").textContent =data;

  clearDiv("usuario");
  clearDiv("dispregalo");
  clearDiv("dispregaloID");
  clearDiv("modregaloID");
  clearDiv("borraregaloID");
  clearDiv("dispcat");
})



function clearDiv(id){
  document.getElementById(id).textContent = ' ';
}

function getInfo(url, body){
    var xml = new XMLHttpRequest();
    xml.open("POST", url, false); //true = async requests; false = sync  //Apaga el modo asincrono 
    xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xml.send(JSON.stringify(body));
   return xml.responseText;
}

function getInfoGET(url){
  var xml = new XMLHttpRequest();
  xml.open("GET", url, false); //true = async requests; false = sync  //Apaga el modo asincrono 
  xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xml.send();
 return xml.responseText;
}

function getInfoPUT(url, body){
  var xml = new XMLHttpRequest();
  xml.open("PUT", url, false); //true = async requests; false = sync  //Apaga el modo asincrono 
  xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xml.send(JSON.stringify(body));
 return xml.responseText;
}

function getInfoDELETE(url){
  var xml = new XMLHttpRequest();
  xml.open("DELETE", url, false); //true = async requests; false = sync  //Apaga el modo asincrono 
  xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xml.send();
 return xml.responseText;
}