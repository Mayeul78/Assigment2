const btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener("click", testeven);

function testeven(){
    console.log("btn pressed !");
    var nb = document.getElementById("in").value;
    console.log("Value"+nb);
    if (nb!=""){
        var xhttp = new XMLHttpRequest();
        const params = `name=${nb}`
        xhttp.open("GET", "even?" + params, true);
        xhttp.send();
        console.log("AJAX request sent : " + params);
        xhttp.addEventListener('load', function(){
            if (xhttp.status === 200 && xhttp.readyState === 4){
                var response = JSON.parse(xhttp.responseText);
                console.log("AJAX response : " + xhttp.responseText);
                if(response.even==true){
                    document.getElementById("R").innerHTML = `Even`;

                }else{
                    document.getElementById("R").innerHTML = `Not even`;
                }
                
                document.getElementById("txt").value = "";
            } else {
                console.error("Bad request");
            }

        })
    }
}