const paragraphbutton = document.getElementById('p-button');
const imagebutton = document.getElementById('img-button');
const paragraph = document.getElementById('p-div');
const image = document.getElementById('img-div');

const paragraphArray = [i]
let counter = 0;

function addParagraph () {
    pDiv.style.display = 'block';
    imgDiv.style.display = 'none';

    let newParagraph = documetn.createElement('p')
    newParagraph.textContent = 'Christian is the best'
    pDiv.appenChild(newParagraph);
}

paragraphbutton.onclick = addParagraph;

function addImage() {
    pDiv.style.display = 'none';
    imgDiv.style.display = 'block'

    let newImg = document.createElement('Img');
    newImg.src = "lamborghini.jpg"

}