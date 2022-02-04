let currentFont = 1.4;
const makeBigger = () => {
   
   currentFont+=1;
   document.querySelector('h1').style.fontSize = `${currentFont + .5}em`;
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
  
  

};

const makeSmaller = () => {
   currentFont-=1;
   document.querySelector('h1').style.fontSize = `${currentFont + .5}em`;
   document.querySelector('.content').style.fontSize = `${currentFont}em`;
  
   
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

