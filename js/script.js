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
  console.log(box);
  container.append(box);


  if (!(i % diviThree)){
    box.classList.add("box-mult-3")
  } else if (!(i % diviFive)){
    box.classList.add("box-mult-5")
  } else if (!(i % (diviFive && diviThree))){
    box.classList.add("box-mult")
  }
};
