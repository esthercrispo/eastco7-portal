function submit(){
    let
    name=document.getElementById("name").value;
    let
    regno=document.getElementById("regno").value;
    let 
    grievance=document.getElementById("grievance").value;
    if(name==""){
        alert("please enter your name");
        return;
    }
    if(regno==""){
        alert("please enter your registration number ");
        return;
    }
    if(grievance==""){
        alert("please enter your comments ");
        return;
    }
    alert("your feedback have been submitted successfully ");
    console.log(name);
    console.log(regno);
    console.log(grievance);
}