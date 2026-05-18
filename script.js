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