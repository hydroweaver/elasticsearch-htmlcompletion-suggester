const axios = require('axios');

const config = {headers: {
    'Content-Type' : 'application/json',
    'mode' : 'no-cors'

}};

document.getElementById("myinput").addEventListener("input", (event)=>{
    var x = document.getElementById("myinput").value;
    console.log(x);

    const data = JSON.stringify({
        "_source": "desc", 
        "suggest": {
            "name-sugest": {
              "prefix": x,
              "completion": {
                "field": "desc"
              }
            }
          }
    });
    
    axios.post('http://localhost:9200/karan/_search', data, config).then((onvalue)=>{
        if(onvalue){
                for(results in onvalue.data.suggest['name-sugest'][0].options){
                    console.log(onvalue.data.suggest['name-sugest'][0].options[results]._source.desc.input);
                }
        }
    }).catch((reason)=>{
        console.log(reason);
    });
});
