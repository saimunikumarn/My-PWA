function getit(file,callback){
var req=new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open("GET",file,true);
req.onreadystatechange=function(){
  if (req.readyState === 4 && req.status == "200" ) {
    callback(req.responseText);

  }
}
req.send();
}

getit("index.json", function(text){
let data=JSON.parse(text);
console.log(data);
basic (data.basics);
edu(data.education);
skills(data.skills);
});
var main=document.querySelector('.flex-parent');

function basic(basics){
let a= document.getElementById("sai");

var img=document.createElement("img");
img.src=basics.Photo;
// img.setAttribute("id","img");
img.classList.add("img");
a.appendChild(img);

var n=document.createElement("p");
n.innerHTML=basics.name;
n.classList.add("text");
a.appendChild(n);

var ph=document.createElement("p");
ph.innerHTML=basics.Phone;
a.appendChild(ph);

var c=document.createElement("p");
c.innerHTML=basics.Class;
a.appendChild(c);

var s=document.createElement("p");
s.innerHTML=basics.Section;
a.appendChild(s);

var e=document.createElement("p");
e.innerHTML=basics.Email;
a.appendChild(e);

}

var obj=document.createElement("div");
obj.classList.add("second-child");
main.appendChild(obj);
// Education div
var e1=document.createElement("div");
e1.classList.add("edu");
//append e1 to obj
obj.appendChild(e1);
var h1=document.createElement("h1");
h1.setAttribute("id","h1");
h1.textContent="Education Details";
h1.appendChild(document.createElement("HR"));
console.log(obj);
//append h1 to e1
e1.appendChild(h1);


function edu(education){
for (i in education) {
//course cretion
  var h2=document.createElement("p");
  h2.classList.add("edu1");
  h2.textContent=education[i].Course;
  //append h2 to h1
  e1.appendChild(h2);
  var h3=document.createElement("p");
  h3.classList.add("edu2");
  h3.textContent=education[i].Specialization;
  //append h3 to h2
  e1.appendChild(h3);
  //College
  var h4=document.createElement("p");
  h4.classList.add("edu3");
  h4.textContent=education[i].College;
  //append h4 to h3
  e1.appendChild(h4);
  //Data
  var ul=document.createElement("ul");
  ul.classList.add("edu4");
  e1.appendChild(ul);
    var li=document.createElement("li");
    li.textContent=education[i].Data;
    ul.appendChild(li);
  }

  }

  function skills(sai){
    var table=document.createElement("table");
    var row="";
    for (var k = 0; k < sai.length; k++) {
    row+="<tr><td><strong>"+sai[k].Name+"</strong></td><td>"+sai[k].info+"</td></tr>";
    }
    table.innerHTML=row;
    obj.appendChild(table);
    }
