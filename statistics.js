var statistics={
    "Democrats":[{
        "n_reps":"",
        "%votes":"",
    }
    ],
    "Republicans":[{
        "n_reps":"",
        "%votes":"",
    }
    ],
    "Independents":[{
        "n_reps":"",
        "%votes":"",
    }
    ],
    "Total":[{
        "n_reps":"",
        "%votes":"",
    }
    ] ,
    "Least_Engaged":[{
        "name":"",
        "n_missedVotes":"",
        "%missed":"",
    }
    ],
    "Most_Engaged":[{
        "name":"",
        "n_missedVotes":"",
        "%missed":"",
    }
    ],
    "Most_Loyal":[{
        "name":"",
        "n_partyVotes":"",
        "%partyVotes":"",
    }
    ],
    "Least_Loyal":[{
        "name":"",
        "n_partyVotes":"",
        "%partyVotes":"",
    }
    ] 
}

var members = data.results[0].members;
var members_num = members.length;
var members10pct= members_num * 0.1;

function list_Parties(){
    var dem =[];
    var repub =[];
    var indep =[];
    for(var i = 0;i< members.length;i++){
        if(members[i].party=="D"){
            dem.push(members[i].votes_with_party_pct);
        } else if(members[i].party=="R"){
            repub.push(members[i].votes_with_party_pct);
        } else{
            indep.push(members[i].votes_with_party_pct);
        }
    }
    var votes =0;
    statistics.Democrats[0].n_reps = dem.length;
    for(var i = 0; i < dem.length;i++){
        votes = votes + dem[i];

    }
    statistics.Democrats[0]["%votes"] = votes/dem.length;
    votes=0;
    for(var i = 0; i < repub.length;i++){
        votes = votes + repub[i];

    }
    statistics.Republicans[0].n_reps = repub.length;
    statistics.Republicans[0]["%votes"] = votes/repub.length;
    votes=0;
    for(var i = 0; i < indep.length;i++){
        votes = votes + indep[i];

    }
    statistics.Independents[0].n_reps = indep.length;
    statistics.Independents[0]["%votes"] = votes/indep.length;

    statistics.Total[0].n_reps= dem.length + repub.length + indep.length;
    statistics.Total[0]["%votes"]= (statistics.Republicans[0]["%votes"] + statistics.Democrats[0]["%votes"])/2;
    console.log(statistics);
}

members_num = members.length;
members10pct= members_num * 0.1;

function table1(){
    list_Parties();
    var row="";
    var title="";
    var n_rep="";
    var pct_votes="";
    var tbodyid = document.getElementById("table1");
    for(var i = 0; i<=3; i++){
        row = document.createElement("tr");
        if(i == 0){
            title = document.createElement("td");
            title.innerHTML = "Democrates";
            n_rep= document.createElement("td");
            n_rep.innerHTML = statistics.Democrats[0].n_reps;
            pct_votes= document.createElement("td");
            pct_votes.innerHTML = (statistics.Democrats[0]["%votes"]).toFixed(2);
        }else if(i == 1){
            title= document.createElement("td");
            title.innerHTML = "Republicants";
            n_rep= document.createElement("td");
            n_rep.innerHTML = statistics.Republicans[0].n_reps;
            pct_votes= document.createElement("td");
            pct_votes.innerHTML = (statistics.Republicans[0]["%votes"]).toFixed(2);
        }else if(i == 2 && statistics.Independents[0].n_reps != 0){
            title= document.createElement("td");
            title.innerHTML = "Independents";
            n_rep= document.createElement("td");
            n_rep.innerHTML = statistics.Independents[0].n_reps;
            pct_votes= document.createElement("td");
            pct_votes.innerHTML = (statistics.Independents[0]["%votes"]).toFixed(2);
        }else if(i == 3) {
            title= document.createElement("td");
            title.innerHTML = "Total";
            n_rep= document.createElement("td");
            n_rep.innerHTML = statistics.Total[0].n_reps;
            pct_votes = document.createElement("td");
            pct_votes.innerHTML = (statistics.Total[0]["%votes"]).toFixed(2);
        }

        row.append(title,n_rep,pct_votes);
        tbodyid.appendChild(row);

    }
}

members_num = members.length;
members10pct= members_num * 0.1;



function table2(){
    var users=[];
    users =  members.sort(function(a,b){return a["missed_votes_pct"] - b["missed_votes_pct"]});
    var row ="";
    var names="";
    var mvotes="";
    var pctvotes="";
    var link= document.getElementById("table2");

    for(var i = 0; i < members10pct; i++){
        row = document.createElement("tr");
        names = document.createElement("td");
        var a = document.createElement("a");
        a.href = users[i].url
        if(users[i].middle_name == null){
            a.innerHTML = users[i].first_name + " " + users[i].last_name;
        }else{
            a.innerHTML = users[i].first_name + " " + users[i].middle_name + " " + users[i].last_name;
        }
        names.append(a);

        mvotes= document.createElement("td");
        mvotes.innerHTML= users[i].missed_votes;

        pctvotes= document.createElement("td");
        pctvotes.innerHTML= users[i].missed_votes_pct;

        row.append(names, mvotes, pctvotes);
        link.appendChild(row);
        if(members10pct-1 == i && users[i].missed_votes_pct == users[i+1].missed_votes_pct){
            members10pct = members10pct+1;
        }
    }
}

members_num = members.length;
members10pct= members_num * 0.1;

function table3(){
    var users=[];
    users =  members.sort(function(a,b){return a["missed_votes_pct"] - b["missed_votes_pct"]});
    var row ="";
    var names="";
    var mvotes="";
    var pctvotes="";
    var link= document.getElementById("table3");
    console.log(users);

    for(var i = members_num - 1; i > members_num-members10pct; i= i-1){
        row = document.createElement("tr");
        names = document.createElement("td");
        var a = document.createElement("a");
        a.href = users[i].url
        if(users[i].middle_name == null){
            a.innerHTML = users[i].first_name + " " + users[i].last_name;
        }else{
            a.innerHTML = users[i].first_name + " " + users[i].middle_name + " " + users[i].last_name;
        }
        names.append(a);

        mvotes= document.createElement("td");
        mvotes.innerHTML= users[i].missed_votes;

        pctvotes= document.createElement("td");
        pctvotes.innerHTML= users[i].missed_votes_pct;

        row.append(names, mvotes, pctvotes);
        link.appendChild(row);
        if(i-1 == members_num-members10pct && users[i].missed_votes_pct == users[i-1].missed_votes_pct){
            members10pct= members10pct-1;
        }
    }
}

members_num = members.length;
members10pct= members_num * 0.1;

function table4(){
    var users=[];
    users =  members.sort(function(a,b){return a["votes_with_party_pct"] - b["votes_with_party_pct"]});
    var row ="";
    var names="";
    var mvotes="";
    var pctvotes="";
    var link= document.getElementById("table4");

    for(var i = 0; i < members10pct; i++){
        row = document.createElement("tr");
        names = document.createElement("td");
        var a = document.createElement("a");
        a.href = users[i].url
        if(users[i].middle_name == null){
            a.innerHTML = users[i].first_name + " " + users[i].last_name;
        }else{
            a.innerHTML = users[i].first_name + " " + users[i].middle_name + " " + users[i].last_name;
        }
        names.append(a);

        mvotes= document.createElement("td");
        mvotes.innerHTML= users[i].total_votes;

        pctvotes= document.createElement("td");
        pctvotes.innerHTML= users[i].votes_with_party_pct;

        row.append(names, mvotes, pctvotes);
        link.appendChild(row);

        if(members10pct-1 == i && users[i].votes_with_party_pct == users[i+1].votes_with_party_pct){
             members10pct = members10pct+1;
        }
    }
}

members_num = members.length;
members10pct= members_num * 0.1;

function table5(){
    var users=[];
    users =  members.sort(function(a,b){return a["votes_with_party_pct"] - b["votes_with_party_pct"]});
    var row ="";
    var names="";
    var mvotes="";
    var pctvotes="";
    var link= document.getElementById("table5");

    for(var i = members_num-1; i > members_num-members10pct; i= i-1){
        row = document.createElement("tr");
        names = document.createElement("td");
        var a = document.createElement("a");
        a.href = users[i].url
        if(users[i].middle_name == null){
            a.innerHTML = users[i].first_name + " " + users[i].last_name;
        }else{
            a.innerHTML = users[i].first_name + " " + users[i].middle_name + " " + users[i].last_name;
        }
        names.append(a);

        mvotes= document.createElement("td");
        mvotes.innerHTML= users[i].total_votes;

        pctvotes= document.createElement("td");
        pctvotes.innerHTML= users[i].votes_with_party_pct;

        row.append(names, mvotes, pctvotes);
        link.appendChild(row);

        if(i-1 == members_num-members10pct-1 && users[i].votes_with_party_pct == users[i-1].votes_with_party_pct){
            members10pct= members10pct -1;
        }
    }
}



