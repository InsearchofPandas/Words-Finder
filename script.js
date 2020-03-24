const oDocument = document.getElementById('text-body').innerHTML;
const tInput = document.getElementById('input-text');
 
const toggler = document.getElementById('toggler');

let isCaseSensitive = false
let toSearch =""

//  function to find and highlight text
function find(toSearch) {

  const paragraph = document.getElementById('text-body');
  let search = toSearch
  search =  search.replace(/[.*+?^${}()|[\]\\"]/g, '\\$&');

  const re = isCaseSensitive=== false ? new RegExp(search, 'g') : new RegExp(search, 'gi')
   
  if (search.length > 0) { 
    paragraph.innerHTML = oDocument.replace(re, `<span class="highlight">$&</span>`);}
  else {paragraph.innerHTML = oDocument;}
}


// listen for input 
      tInput.addEventListener('keyup', (e)=> {
        toSearch = e.target.value
          find(toSearch)
      })



 // listen for toggle 
 
 toggler.addEventListener('change', (e)=> {
     isCaseSensitive = e.target.checked
     find(toSearch)
     
 })

