function adnewWEfield(){
   let newnode = document.createElement("textarea");
   newnode.classList.add("form-control");
   newnode.classList.add("WEfield");
   newnode.classList.add("mt-2");
   newnode.setAttribute("rows", 4);
   newnode.setAttribute("placeholder", "Enter Work Experience Here");

   let wobj= document.getElementById("WE");
   let Waddbutton = document.getElementById("Waddbutton");


   wobj.insertBefore(newnode, Waddbutton);

}
function adnewQfield(){
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("Qfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("rows", 4);
    newnode.setAttribute("placeholder", "Enter Qualification Here");
 
    let Qobj= document.getElementById("Q");
    let Qaddbutton = document.getElementById("Qaddbutton");
 
 
    Qobj.insertBefore(newnode, Qaddbutton);



}

function adnewskillsfield(){
    let newnode = document.createElement("input");
    newnode.classList.add("form-control");
    newnode.classList.add("skillsfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("type", 'text');
    newnode.setAttribute("placeholder", "Enter Skills Here");
 
    let skillsobj= document.getElementById("skills");
    let skillsaddbutton = document.getElementById("skillsaddbutton");
 
 
    skillsobj.insertBefore(newnode, skillsaddbutton);



}


function addsoftskillsfield(){
    let newnode = document.createElement("input");
    newnode.classList.add("form-control");
    newnode.classList.add("softskillsfield");
    newnode.classList.add("mt-2");
    newnode.setAttribute("type", 'text');
    newnode.setAttribute("placeholder", "Enter Soft Skills Here");
 
    let softskillsobj= document.getElementById("softskills");
    let softskillsaddbutton = document.getElementById("softskillsaddbutton");
 
 
    softskillsobj.insertBefore(newnode, softskillsaddbutton);



}


function generatecv(){

    let name = document.getElementById("name").value;

    let nameT = document.getElementById("nameT");
    nameT.innerHTML = name;
    document.getElementById("nameT2").innerHTML= name;


    document.getElementById("roleT").innerHTML = document.getElementById("role").value;
    document.getElementById("contactT").innerHTML = document.getElementById("contact").value;
    document.getElementById("emailT").innerHTML = document.getElementById("email").value;
    document.getElementById("addressT").innerHTML = document.getElementById("address").value;
    document.getElementById("dobT").innerHTML = document.getElementById("dob").value;

    if (document.getElementById('single').checked) {
        var single = document.getElementById('single').value;
        document.getElementById("statusT").innerHTML = single ;
      }
      if (document.getElementById('married').checked) {
        var married = document.getElementById('married').value;
        document.getElementById("statusT").innerHTML = married ;
      }

    

   let linkedin = document.getElementById("linkedin").value
      if(linkedin == null || linkedin == "" ){
          document.getElementById("linkT").style.display = 'none';
      }
       let github = document.getElementById("github").value;

       if(github == null || github == "" ){
        document.getElementById("gitT").style.display = 'none';
    }
    let portfolio = document.getElementById("portfolio").value;
    if(portfolio == null || portfolio == "" ){
        document.getElementById("portT").style.display = 'none';
    }


    if(linkedin == "" && github == "" && portfolio == ""){
        document.getElementById("spaceholder").style.display = 'none';
    }

    document.getElementById("linkedinT").href = document.getElementById("linkedin").value;
    document.getElementById("githubT").href = document.getElementById("github").value;
    document.getElementById("portfolioT").href = document.getElementById("portfolio").value;
    document.getElementById("linkedinT").innerHTML = document.getElementById("linkedin").value;
    document.getElementById("githubT").innerHTML = document.getElementById("github").value;
    document.getElementById("portfolioT").innerHTML = document.getElementById("portfolio").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("objective").value;


    let container = document.getElementById("ss").value;

    if(container == null || container == "" ){
        document.getElementById("softskillscontainer").style.display = 'none';
    }

    let softskills = document.getElementsByClassName("softskillsfield");

    let string = "";

    for(let i of softskills){
string = string + `<li> ${i.value} </li>`;
    }
document.getElementById("softskillsT").innerHTML= string;



   
    let workexperince = document.getElementsByClassName("WEfield");

    let str = "";

    for(let i of workexperince){
str = str + `<li> ${i.value} </li>`;
    }
document.getElementById("WET").innerHTML= str;



let skills = document.getElementsByClassName("skillsfield");

    let str1 = "";

    for(let i of skills){
str1 = str1 + `<li> ${i.value} </li>`;
    }
document.getElementById("skillsT").innerHTML= str1;


let academicqualification = document.getElementsByClassName("Qfield");

let str2 = "";
for(let i of academicqualification){
str2 = str2 + `<li> ${i.value} </li>`;

}
document.getElementById("QT").innerHTML = str2;

let file = document.getElementById("img").files[0];

if(file == null || file == ""){
    document.getElementById("imgT").src = "Random.jpg";
}else{
    let reader = new FileReader();
reader.readAsDataURL(file);
document.getElementById("imgT").src = reader.result;
  
  
reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
    
}

}

document.getElementById("resume").style.display= 'none';
document.getElementById("resumetemp").style.display= 'block';
document.getElementById("downloadbtn").style.display= 'block';
    
}

window.onload = function(){
    document.getElementById("download").addEventListener("click", ()=>{
       const resume = this.document.getElementById("resumetemp") ;
       var opt = {
   
        filename: `Resume.pdf`,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          dpi: 192,
          scale:4,
          letterRendering: true,
          useCORS: true
        },   jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' }
    };
       html2pdf().from(resume).set(opt).save();
    })
}

