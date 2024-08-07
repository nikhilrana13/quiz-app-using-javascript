




let timerleft = 30;
let timerelement = document.getElementById("time")
let timerbtn = document.querySelector('.timer')
let bodyelement = document.body;



  let counter = 30;
   
  let intervalid = setInterval(function(){
    counter --;
      
    if(counter <= 15){
      bodyelement.style.backgroundColor = "#DBADAD";
      timerbtn.style.backgroundColor = " red";
      
    }  else{
      bodyelement.style.backgroundColor = "#F6F4F0;"

      
    }

    timerelement.innerHTML = counter;
     

    if(counter <=0){
      clearInterval(intervalid);

    }
},1000 );
  
  





  let option1 = document.querySelector('.option-1');
  let checkicon1 = document.querySelector('.check-icon1')
  let checkicon2 = document.querySelector('.check-icon2')
  let checkicon3 = document.querySelector('.check-icon3')
  let option2 = document.querySelector('.option-2');
  let option3 = document.querySelector('.option-3');
  let option4 = document.querySelector('.option-4');
  let checkicon4 = document.getElementById("check-icon4");
  let nextquiz = document.querySelector('.Next-btn')
  let questions = document.querySelector('.question')
  let answer1 = document.querySelector('.answer1')
  let answer2 = document.querySelector('.answer2')
  let answer3 = document.querySelector('.answer3')
  let answer4 = document.querySelector('.answer4')
  option1.addEventListener('click',()=>{
      checkicon1.style.display = 'block'
      option1.style.border = '2px solid red';
  })




 option2.addEventListener('click',()=>{
      checkicon2.style.display = 'block'
      option2.style.border = '2px solid red';
  })


  option3.addEventListener('click',()=>{
    checkicon3.style.display = 'block'
    option3.style.border = '2px solid red';
})

option4.addEventListener('click',()=>{
  checkicon4.style.display = 'block'
  option4.style.border = '2px solid green';
})





nextquiz.addEventListener('click',() =>{
    questions.innerHTML = 'How do you write "Hello World" in an alert box?'
    answer1.innerHTML = ' 1.alert("Hello World"); '
    answer2.innerHTML = '2.alertBox("Hello World");'
    answer3.innerHTML = '3.msgBox("Hello World");'
    answer4.innerHTML = ' 4.msg("Hello World");'
    
})



