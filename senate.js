
function table(){
    var members = data.results[0].members;

    var row="";
    var names="";
    var party="";
    var state="";
    var seniority="";
    var votes="";
    var senateData = document.getElementById("senate-data");

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
    //document.getElementById("senate-data").innerHTML = JSON.stringify(data,null,2);
}
table();
 