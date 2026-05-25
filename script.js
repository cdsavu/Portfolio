const name = "Cristian";
let age = 31;
console.log(name, age);

function myIntroduction(name, age)
{
    console.log(`Hello my name is ${name} and I'm ${age} years old and i'm learning code`);
}
myIntroduction(name,age);

function minorOrAdult(age)
{
    if(age>=18)
    {
        console.log("Adult");
    }
    else
    {
        console.log("Minor");
    }
}

for(let i=0; i<25; i++)
    {
        minorOrAdult(i);
    }

const skills = ["Desire for learning","C#", "SQL","Javascript","HTML","CSS"];
skills.forEach(function (skill){
    console.log(skill)
});
skills.push("Javascript");
console.log(skills);

// const project = {
//     name : "ITP Library Management",
//     description : "An API written in C# using Swagger as the way to access endpoints",
//     year : 2022
// }
// console.log(project.name);

const projects = [
    {
        name:"ITP Library Management",
        year:2022
    },
    {
        name:"Clear",
        year:2023
    },
    {
        name:"Inventory",
        year:2024
    }
];
projects.forEach(function(project){
    console.log(project.name);
});

const heading = document.querySelector("h1");
heading.textContent ="I'm kinda tired tonight but I'll get something done still";
heading.style.color = "red";