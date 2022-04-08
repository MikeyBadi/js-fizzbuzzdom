// dichiarare la costante del container
const container = document.querySelector('.container')

// impostare i limite del contatore
const limit = 501
const diviThree = 3
const diviFive = 5

for(let i=1; i < limit; i++){
  const box = document.createElement('div');
  box.className = "box";
  box.append(i);
  
  if ((i % diviFive) && !(i % diviThree)){
    box.classList.add("box-mult-3")
    box.innerHTML = ("Buzz")
    
  } else if (!(i % diviFive) && (i % diviThree)){
    box.classList.add("box-mult-5")
    box.innerHTML = ("Fizz")
    
  } else if (!(i % diviFive) && !(i % diviThree)){
    box.classList.add("box-mult")
    box.innerHTML = ("BuzzFizz")
  }
  container.append(box);
};
