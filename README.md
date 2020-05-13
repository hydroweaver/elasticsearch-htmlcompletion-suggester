# elasticsearch-htmlcompletion-suggester
Super simple html input tag calling elastic search for auto suggest on console

Input tag which calls local elastic search instance completion suggester having some data already defined with the following data and format.

```json
PUT karan
{
"mappings": {
  "doc" : {
    "properties" : {
      "desc" : {
        "type" : "completion"
      }
    }
  }
}
}

POST karan/doc/_bulk
  {"index" : {"_id" : 1}}
  {"desc" : {"input" : ["karan", "verma"], "weight" : 10 }}
  {"index" : {"_id" : 2}}
  {"desc" : {"input" : ["karan", "sharma"], "weight" : 20 }}
  {"index" : {"_id" : 3}}
  {"desc" : {"input" : ["karan", "gupta"], "weight" : 100 }}
  {"index" : {"_id" : 4}}
  {"desc" : {"input" : ["karan", "bajaj"], "weight" : 40 }}
  {"index" : {"_id" : 5}}
  {"desc" : {"input" : ["karan", "roger"], "weight" : 50 }}


POST karan/_search?pretty
{
  "_source": "desc", 
"suggest": {
    "name-sugest": {
      "prefix": "karan",
      "completion": {
        "field": "desc"
      }
    }
  }
}
```

Dependencies for this to work:

1. Axios
2. Browerify to bundle require with HTML to call Axios.
3. ENABLE CORS Plugin in chrome - Cross Domain - CORS - Offered by: Mai Tan (https://chrome.google.com/webstore/detail/cross-domain-cors/mjhpgnbimicffchbodmgfnemoghjakai)
4. Autocomplete within HTML - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_autocomplete
