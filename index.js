const axios = require('axios');

const config = {headers: {
    'Content-Type' : 'application/json',
    'mode' : 'no-cors'

}};

document.getElementById("myinput").addEventListener("input", (event)=>{
    var divclass = document.getElementsByClassName("autocomplete");
    var x = document.getElementById("myinput");
    console.log(x.value);

    const data = JSON.stringify({
        "_source": "desc", 
        "suggest": {
            "name-sugest": {
              "prefix": x.value.toString(),
              "completion": {
                "field": "desc"
              }
            }
          }
    });
    
    axios.post('http://localhost:9200/karan/_search', data, config).then((onvalue)=>{
        if(onvalue){
                cleardivs();
                for(results in onvalue.data.suggest['name-sugest'][0].options){
                    newDiv = document.createElement("div");
                    newDiv.setAttribute("class", "inserteddiv");
                    x.parentNode.appendChild(newDiv);
                    newDiv.innerHTML = onvalue.data.suggest['name-sugest'][0].options[results]._source.desc.input.toString();
                    console.log(onvalue.data.suggest['name-sugest'][0].options[results]._source.desc.input);
                }
        }
    }).catch((reason)=>{
        console.log(reason);
    });
});

function cleardivs(){
    divs = document.getElementsByClassName("inserteddiv");
    var inputform = document.getElementById("myinput");
    for(var i = 0; i < divs.length;){
        inputform.parentNode.removeChild(divs[0]);
    }
}