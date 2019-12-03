var data;
 fetch("https://api.propublica.org/congress/v1/113/senate/members.json", {
   method: "GET",
   headers: {
     'X-API-Key': ' REWSYOYhlSiiaq2WHDZXZ0Xk9u2SSHE0wlHh2TGw'
   }
   
 }).then(function(response){
   if(response.ok){
     return response.json();
   }
   throw new Error(response.statusText);
 }).then(function(json){
   data = json.results[0].members;
   console.log(data);
   loader();
   statistics(data);
 }).catch(function(error){
   console.log("Request failed: " + error.message);
 });

 function loader(){
   var loader= document.getElementById("loader").style.display="none";
 }