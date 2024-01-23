const container = document.querySelector('div');



let size = 16;


container.style.width =  '900px';
container.style.height = '900px';

let elementSize = 900 / size;

console.log(elementSize);
for (let index = 0; index < size*size; index++) {
    const childDiv = document.createElement('div');
    
   

    childDiv.style.width = elementSize+'px';
    childDiv.style.height = elementSize+'px';
    childDiv.style.backgroundColor = 'white';
    
    childDiv.addEventListener('mouseenter', () =>{
        childDiv.style.backgroundColor = ChangeColor();
    })

    container.appendChild(childDiv);
}

function ChangeColor(){
    let part1 = Math.floor(Math.random() * 100);
    let part2 = Math.floor(Math.random() * 100);
    let part3 = Math.floor(Math.random() * 100);
   return "rgb(" + part1 + ',' + part2 + ',' + part3 +")";
}



