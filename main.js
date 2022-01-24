// Creating Function
const hexLetters = '0123456789abcdef';
let hexColor = '';

function randomHexColor(){

    hexColor = '';
    for(let i = 0; i < 6; i++) { 
        
        hexColor += hexLetters[Math.round(Math.random() * 15)]
     
    }    
    
    document.querySelector('.hex-code').innerHTML = '#' + hexColor;
    document.querySelector('body').style = `background-color:`+ '#' + hexColor;
    return hexColor;
    
}

// Adding to HTML
document.querySelector('.hex-code').innerHTML = '#' + randomHexColor();

// Copy to clipboard
function copyText(){
    var copy = document.querySelector('.hex-code');
    navigator.clipboard.writeText('#' + hexColor);
    alert('#' + hexColor + ' Copied to clipboard!')
}