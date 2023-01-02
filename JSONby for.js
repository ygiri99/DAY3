const resume = {
  Name: "P.Yadhavagiri",
  Age: 42,
  DOB: "dd-mm-yyyy",
  Bio: {
    Height: 158,
    Weight: 65,
  },
  Qualification: "B.Sc,Math",
  Skills: ["JavaScript", "c", "Automobile"],
  Habits: ["Reading", "Yoga"],
  Projects: [
    { Name: "Paar shop", lang: ["c", "Js"] },
    { Name: "Esai", lang: ["c++", "Js"] },
    { Name: "Angadi", lang: ["Java", "Js"] },
  ],
};
// for - to print project array
console.log("Printing Projects using for:");
console.log("");
for(var i=0; i<resume.Projects.length;i++){
    console.log(resume.Projects[i]);
    }
    console.log("___________________________________________________________");
    console.log("");
//for in - to find number of keys and display the key
console.log("Printing keys using for in:");
console.log("");
let j="";i=0;
for(var key in resume){
   i++;
   j+=key +" ,";
  }
console.log("Number of keys is :",i+"\n      The keys are: ",j);
console.log("___________________________________________________________");
console.log("");
//for of - to print the values of skills
console.log("Printing values of skills using for of:");
console.log("");
console.log("The skills are ");
for(var value of resume.Skills){
  console.log(value);
}

console.log("___________________________________________________________")
console.log("");
console.log("Printing keys using forEach");
console.log("");
Object.keys(resume).forEach(function(k, v){
  console.log(v+1 + ' - ' + k);
});