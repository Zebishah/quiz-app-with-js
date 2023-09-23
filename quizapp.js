window.onload=()=>{
    index=0;
}
let questions=[{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}

];
let total= questions.length;
let count=0;
let index=0,right=0,wrong=0;
let ques_box=document.querySelector("#questionBox");
let choices=document.querySelectorAll(".options");
let submit=document.querySelector("#submit");
let next=document.querySelector("#next");
let error=document.querySelector(".error");
let result=document.querySelector(".res-title");
let marks=document.querySelector(".numbers");
let green=document.querySelector("#green");
let red=document.querySelector("#red");
let back=document.querySelector("#back");
let cont1=document.querySelector(".container");
let cont2=document.querySelector(".container2");
let numbers=document.querySelector(".numbers");
load_question();
function load_question()
{
 if(index===total)
 {
    quiz_end();
 }
 
let data=questions[index];
ques_box.innerHTML=`${index+1}) ${data.question}`;
choices[0].nextElementSibling.innerHTML=`${data.a}`
choices[1].nextElementSibling.innerHTML=`${data.b}`
choices[2].nextElementSibling.innerHTML=`${data.c}`
choices[3].nextElementSibling.innerHTML=`${data.d}`
}
submit.addEventListener('click',()=>{
check_ans();
});
function check_ans(ans)
{
  count=0;
    choices.forEach((choice)=>{
           if(choice.checked)
           {
            ans=choice.value;
           }
           else{
            count++;
           }
           
    })
    if(count==4){
        alert("choose first....");
       count=0;
    }
    else{
    let data=questions[index];
    
    if (ans===data.correct)
    {
        submit.style.backgroundColor="green";     
        error.innerHTML="";   
        right++;
    }
    
    else if (ans!=data.correct&&count!=4)
    {
        submit.style.backgroundColor="red";     
        error.innerHTML="Incorrect answer...";
       
    }
}
}
function reset()
{
    choices.forEach((choice)=>{
        choice.checked=false;
    })
}
next.addEventListener('click',(ans)=>{
    console.log(count)
    index++;
    console.log(index)
    if(error.innerHTML=="Incorrect answer...")
    {
        error.innerHTML=""
        wrong++;
    }
    if (count!=4)
    {
    submit.style.backgroundColor="blue";     
    load_question();
    reset();
    }
   
});
function quiz_end()
{
 cont1.style.display="none";
 cont2.style.display="block";
    if(right>wrong)
    {
    result.textContent=`Congratulations! You Passed the Quiz..`;
    numbers.innerHTML=` Passed by ${right} out of 4 marks`;
    green.style.display="block";
    red.style.display="none";
    }
    else if(right<wrong ){
        result.innerHTML=`Ooops! You Failed the Quiz..`;
        numbers.innerHTML=`Failed by ${right} out of 4 marks`;
        red.style.display="block";
    }
    else if(right==wrong&&right!=0)
    {
        result.innerHTML=`Congratulation you got Promoted`;
        numbers.innerHTML=`Promoted by ${right} out of 4 marks`;
        green.style.display="block";
    }
    else if(right==0)
    {
        result.innerHTML=`Ooops! You Failed the Quiz..`;
        numbers.innerHTML=`Failed by ${wrong} out of 4 marks`;
        red.style.display="block";
    }
}
back.addEventListener('click',()=>{
 
    index=0;
    right=0;
    wrong=0;
    cont1.style.display="block";
    cont2.style.display="none";
    load_question();
    reset();
})


    

