let sideSize = 16;
const container = document.querySelector('div');
const button = document.querySelector('button');

container.style.width =  '300px';
container.style.height = '300px';


button.addEventListener('click', () =>{
    sideSize = window.prompt('Choose pixel amount');
    if(size != null){
        RemoveSquares();
        SetPixels();
    }   
})

function RemoveSquares(){
    let child;
    for(let a = 0; a < (sideSize - Math.floor((0.4375 * sideSize))); a++){
     for(let i = 0; i< container.childNodes.length; i++)
        {
            child = container.childNodes[i]
            container.removeChild(child);
        }
    }
}
function AddPixels(){   
    for (let index = 0; index < sideSize*sideSize; index++) {
        const childDiv = document.createElement('div');
    
        childDiv.style.width = (300 / size)+'px';
        childDiv.style.height = (300 / size)+'px';
        childDiv.style.backgroundColor = 'white';
        
        childDiv.addEventListener('mouseenter', () =>{
            childDiv.style.backgroundColor = ChangeColor();
        })
    
        container.appendChild(childDiv);
    }
}
function ChangeColor(){
    let part1 = Math.floor(Math.random() * 100);
    let part2 = Math.floor(Math.random() * 100);
    let part3 = Math.floor(Math.random() * 100);
   return "rgb(" + part1 + ',' + part2 + ',' + part3 +")";
}
//This is to add the pixels when the page loads 
window.onload(AddPixels());