
 //document
var members = data.results[0].members;
var rep= false;
var dem= false;
var ind= false;


var repbox= document.getElementById("repid");
   repbox.addEventListener( 'click', function() {
     if(this.checked) {
         rep=true;
         console.log("REP TRUE");
     } else{
        rep= false;
        console.log("Rep false");
     }
     table();
   });

var dembox= document.getElementById("demid");
  dembox.addEventListener('click', function(){
    if(this.checked){
      dem=true;
    } else{
      dem= false;
    }
    table();
  });

var indbox= document.getElementById("indid");
  indbox.addEventListener('click',function(){
    if(this.checked){
      ind=true;
    } else{
      ind=false;
    }
    table();
  })  

var stateList=document.getElementById("stateDropDown");
var stateFilter="All";
stateList.addEventListener('change',function(){
    var option= document.getElementById("stateDropDown");
    stateFilter= option.value;
  table();
  console.log(stateFilter);
}) 


function containsObject(obj, list) {
  var i;
  for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
          return true;
      }
  }

  return false;
}


var stateList = [];
function getStatesList(){
 
  for(var i = 0; i < members.length;i++){
    if(!containsObject(members[i].state, stateList)){
      stateList.push(members[i].state);
    }
  }
  return stateList;
  console.log(stateList);
}


getStatesList();

function listfilter(){
  
  getStatesList();
  
  var list=document.getElementById("stateDropDown");
  for(var i = 0; i < stateList.length;i++){
    var option=document.createElement("option");
    option.innerHTML= stateList[i];
    option.setAttribute("value",stateList[i]);
    list.append(option);
  }

}
listfilter();


function table(){

  console.log('funcio table');
  
  var row="";
  var names="";
  var party="";
  var state="";
  var seniority="";
  var votes="";
  var senateData = document.getElementById("house-data");

  senateData.innerHTML="";


  for(var i = 0; i < members.length; i++){
      row = document.createElement("tr");

      names = document.createElement("td");
      var a = document.createElement("a");
      a.href = members[i].url;
      if(members[i].middle_name == null){
          a.innerHTML = members[i].first_name + " " + members[i].last_name;
      }else{
          a.innerHTML = members[i].first_name + " " + members[i].middle_name + " " + members[i].last_name;
      }
      names.append(a);
      
      
      party = document.createElement("td");
      party.innerHTML = members[i].party;

      state = document.createElement("td");
      state.innerHTML = members[i].state;

      seniority = document.createElement("td");
      seniority.innerHTML = members[i].seniority;

      votes = document.createElement("td");
      votes.innerHTML = members[i].votes_with_party_pct +"%";



      row.append(names, party, state, seniority, votes);
      senateData.appendChild(row);
  }


  var array = Array.from( document.querySelectorAll("#house-data tr"));
  console.log(array);
  var notFound= false;
  for(var i = 0; i<array.length;i++){ 
    array[i].style.display= "none";
    if(array[i].childNodes[1].innerHTML == "R" && rep && (stateFilter == array[i].childNodes[2].innerHTML || stateFilter == "All")){
      array[i].style.display ="table-row";
      notFound= true;
    }else if(array[i].childNodes[1].innerHTML == "D" && dem && (stateFilter == array[i].childNodes[2].innerHTML || stateFilter == "All")){
      array[i].style.display="table-row";
      notFound=true;
    }else if(array[i].childNodes[1].innerHTML == "I" && ind && (stateFilter == array[i].childNodes[2].innerHTML || stateFilter == "All")){
      array[i].style.display="table-row";
      notFound=true;
    }else if(dem == rep && rep == ind && (stateFilter == array[i].childNodes[2].innerHTML || stateFilter == "All")){
      array[i].style.display="table-row";
      notFound=true;
    }else if(dem == rep && rep== ind && stateFilter == "All"){
      array[i].style.display="table-row";
      notFound=true;
    }
}
  if(!notFound){
    var rowtr = document.createElement("tr");
    var p =document.createElement("td");
    p.setAttribute("colspan",5);
    p.innerHTML = "Users not found";
    rowtr.append(p);
    senateData.appendChild(rowtr);
  }
}
table();
