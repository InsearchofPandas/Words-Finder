const oDocument = document.getElementById('text-body').innerHTML;
const textInput = document.getElementById('input-text');
 
const toggler = document.getElementById('toggler');

let isCaseSensitive = false
let toSearch =""

//  function to find and highlight text
function find(toSearch) {
  const contents = document.querySelectorAll('.content') ; 
  const paragraph = document.getElementById('text-body');
  let search = toSearch;


  search =  search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
  const re = isCaseSensitive === false ? new RegExp(search, 'g') : new RegExp(search, 'gi')
   
  if (search.length > 0) { 
  contents.forEach(content => {
      content.innerHTML = content.innerText.replace(re, `<span class="highlight">$&</span>`);
})
}
  else {paragraph.innerHTML = oDocument;}
}


// listen for input 
      textInput.addEventListener('keyup', (e)=> {
        toSearch = e.target.value
          find(toSearch)
      })



 // listen for toggle 
 
 toggler.addEventListener('change', (e)=> {
     isCaseSensitive = e.target.checked
     find(toSearch)
     
 })

