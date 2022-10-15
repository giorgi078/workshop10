    // document.write("hello world");
    // console.log("gamarjoba");
    // // window.alert("please accept cookies");
    // console.log(5); //number
    // console.log("5"); //string - sityva text
function shemowmeba(){
    let a = document.getElementById("number").value;
    console.log(a);
    if(a == 0){
        console.log(a + " არის 0-ის ტოლი");
        document.getElementById("pasuxi").innerHTML = a + " არის 0-ის ტოლი";
    }
    else if(a > 0){
        console.log(a + " დადებითია");
        document.getElementById("pasuxi").innerHTML = a + " დადებითია";
    }
    else{
        console.log(a + " უარყოფითია");
        document.getElementById("pasuxi").innerHTML = a + " უარყოფითია";
    }
}
{
    for(let i=0; i<=10; i++){
        console.log(i);
    }
    for(let i=10 ; i>=0; i--){
        console.log(i);
    }
}
{
    let operator = "x", a=2, b=6;

    switch(operator){
        case "+":
            console.log(a+b);
        break;
        case "-":
            console.log(a-b);
        break; 
        case "x":
            console.log(a*b);
        break;
        case ":":
            console.log(a/b);
        break;
        default: console.log("არ აგირჩევია ოპერატორი +,-,x,:");
    }
}
// function anteba(){
//     document.getElementById("ganateba").src = "img/on.png";
// }
// function chaqroba(){
//     document.getElementById("ganateba").src = "img/off.png";
// }
function antebachaqroba(){
    let a = document.getElementById("ganateba").src;
    console.log(a);
    if(a =="file:///D:/front%20end/front%20end/workshop10/img/off.png"){
        document.getElementById("ganateba").src = "img/on.png";
    }else{
        document.getElementById("ganateba").src = "img/off.png";
    }
}
function ghilaki(){
    let a = document.getElementById("ganateba").src;
    console.log(a);
    if(a=="file:///D:/front%20end/front%20end/workshop10/img/off.png"){
        document.getElementById("button").innerHTML= "ანთება";
    }else{
        document.getElementById("button").innerHTML= "ჩაქრობა";
    }
}