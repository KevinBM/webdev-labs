/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

let currentClass = "";

const makeDefault = () => {
   currentClass = "";
   document.querySelector('body').className =  `${currentClass}`;

};

const makeDesert = () => {
   currentClass = "desert";
   document.querySelector('body').className =  `${currentClass}`;

};

const makeOcean = () => {
   currentClass = "ocean";
   document.querySelector('body').className =  `${currentClass}`;
   
};

const makeHC = () => {
   currentClass = "high-contrast";
   document.querySelector('body').className =  `${currentClass}`;
};


document.querySelector("#default").addEventListener('click', makeDefault);
document.querySelector("#desert").addEventListener('click', makeDesert);
document.querySelector("#ocean").addEventListener('click', makeOcean);
document.querySelector("#high-contrast").addEventListener('click', makeHC);


