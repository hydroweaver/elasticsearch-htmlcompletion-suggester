/*I should have searched for 'typeerror: url is not a constructor elasticsearch' on google,
it gave me the following links:
https://github.com/elastic/elasticsearch-js/issues/814
https://github.com/elastic/elasticsearch-js/issues/905
Where they essentially say : The client is not intended to be used in a
browser environment, and we highly discourage you to connect to Elastixcsearchh directly form the browser

So even though it is discouraged, it should work with broserify! But it doesnt.

So I'll go ahead with non client implementation, vanilla axios or something

Another thing they recommend to check out is : https://search-ui-stable.netlify.app/?size=n_20_n

Which is a react demo for ES

PLUS THE MAIN EFFORT, ABOUT 4 - 5 HOURS I SPENT ON making broserify work with global / export / window what not! and 
removing onclick from HTML and adding event listener to js file....it works, then it doesnt, if it works then we have
the URL error mentioned above.

*/


const { Client } = require('@elastic/elasticsearch')
// const readline = require('readline');
const client = new Client({ node: 'http://localhost:9200' })

var x = document.getElementById("myinput").addEventListener;
document.getElementById("myinput").addEventListener("input", ()=>{
  console.log('x.value');  
});


// function showconsole(){
//     doc = document.getElementById("myinput");
//     run(doc.value);

// async function run(val) {

//   const { body } = await client.search({
//       index: "karan",
//       body: {
//         "_source": "desc", 
//         "suggest": {
//             "name-sugest": {
//               "prefix": val,
//               "completion": {
//                 "field": "desc"
//               }
//             }
//           }
//       }
//   });

//   for(results in body.suggest['name-sugest'][0].options){
//       console.log(body.suggest['name-sugest'][0].options[results]._source.desc.input);
//   }
// }

// }


// input = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// input.question('Enter search prefix: ', (answer)=>{
//   run(answer.toString()).catch(console.log);
//   input.close();
// });