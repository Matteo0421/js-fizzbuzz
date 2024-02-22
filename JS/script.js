const container = document.getElementById('container');
for(let i = 1; i <= 100; i++){
  if(i % 3 === 0 && i % 5 ===0){
    container.innerHTML += `
      <div class="box entrambe">fizzbuzz</div>
    `
  }else if ( i % 5 ===0){
    container.innerHTML += `
      <div class="box cinque">buzz</div>
    `
  }else if(i % 3 === 0){
  
    container.innerHTML += `
    <div class="box tre">fizz</div>
  `
  }
  else{
    container.innerHTML += `
      <div class="box ">${i}</div>
    `
  }
}