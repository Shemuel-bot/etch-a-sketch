const container = document.querySelector('div');

container.style.width = '600px';
container.style.height = '100vh';

for (let index = 0; index < 16 * 16; index++) {
    const childDiv = document.createElement('div');
   
    childDiv.style.width = '115px';
    childDiv.style.height = '115px';
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



