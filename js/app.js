

const request = superagent
let resultsTable = document.querySelector('.users-list')

document.querySelector('#app-container button').addEventListener('click', function() {

request
.get('https://randomuser.me/api/?results=50')
.then(function(data){

console.log(data.body.results);

const results = data.body.results

results.forEach(function(obj) {

resultsTable.innerHTML += `

<article>
  <span>${obj.nat}</span>
  <h6>${obj.email}</h6>
</article>
`
})
})
})
