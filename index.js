console.log("script loded");
// decleration sections
let radioOne = document.getElementById('radio1');
let radioTwo = document.getElementById('radio2');
let inputOne = document.getElementById('input1');
let inputTwo = document.getElementById('input2');



// radio buttons sections

radioOne.onclick = function radioOnec(){
   inputOne.classList.add('add');
   inputOne.classList.remove('remove');
   inputTwo.classList.add('remove');

};
radioTwo.onclick = function radioTwoc(){
   inputTwo.classList.add("add");
   inputTwo.classList.remove("remove");
   inputOne.classList.add('remove');
};