// console.log('hello');
// object
// const student={
//     name:"Dhruv",
//     age:20,
//     cgpa:7.5,
//     ispass:true
// };
// const product={
//     name:"parker",
//     price:270,
//     discount:5,
// };
// const profile={
//     name:"Dhruv",
//     posts:1,
//     followers:21,
//     following:21,
//     bio:"intern",
// };
// console.log(profile);
// console.log(profile['name']);
// let num = prompt("enter a number: ");
// if (num%5==0) {
//     console.log(num," is divisible by 5");
// } else{
//     console.log(num," is not divisible by 5" );
// }
// let score = prompt("enter your score(0-100): ");
// if (score>=90) {
//     console.log("Congrats! you got 'A' grade");
// } else if (score>69 && score<90){
//     console.log("Congrats! you got 'B' grade" );
// } else if (score>59 && score<70){
//     console.log("Congrats! you got 'C' grade" );
// } else if (score>49 && score<60){
//     console.log("Congrats! you got 'D' grade" );
// } else{
//     console.log("Sorry you are fail");
// }
// for (let i=0; i<=100; i++){
//     if (i%2==0){
//         console.log("even numbers between 0 to 100 are: ",i);
//     }
// }
// let gamenum = 25;
// let usernum = prompt("Guess any number between 1 to 25: ");
// let count=1;
// while (gamenum!=usernum){
//     usernum=prompt("you Guessed wrong number. Guess again: ");
//     count=count+1
// }
// console.log("Congratulations! You guessed the correct number in ",count," times.")
// let name=prompt("Enter your fullname without using space: ");
// let len=name.length
// console.log(`your username will be: @${name}${len}`)
// let marks = [85,97,44,37,76,60];
// let len = marks.length;
// let totalMarks=0;
// for(let i=0;i<len;i++){
//     totalMarks=totalMarks+marks[i];
// }
// console.log(`Average marks for this array is: ${totalMarks/len}`)
// let oldPrices=[250,645,300,900,50];
// let len=oldPrices.length;
// let newval=0;
// for (let i=0;i,i<len;i++){
//     let offer=oldPrices[i]/10
//     newval=oldPrices[i]-offer;
//     console.log("new prices are: ",newval);
// }
// let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// companies.shift();
// console.log(companies);
// companies.splice(2,1,'Ola');
// console.log(companies);
// companies.push('Amazon');
// console.log(companies);
// function vowels(str){
//     let count=0;
//     for(i=0;i<str.length;i++){
//         if (str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
//             count++;
//         }
//     }
//     console.log('number of vowels in string: ',count)
// }

// vowels("dhruv")
// vowels("hello")
// vowels("hellodost")
// vowels("hello dost")
// vowels("hello my name is dhruv")
// let nums=[1,2,3,4];
// nums.forEach((val) => {
//     console.log(val*val);
// })
// let marks=[20,30,50,91,90,93,97,100];
// let filteredmarks=marks.filter((val)=>{
//     return val>90;
// })
// console.log("filteredmarks are: ",filteredmarks)
// let num=prompt("enter any number: ");
// let arr=[];
// for (let i=1;i<=num;i++){
//     arr.push(i);
// }
// console.log(arr)
// let sum=arr.reduce((res,cur)=>{
//     return res+cur;
// })
// console.log(sum);
// let product=arr.reduce((res,cur)=>{
//     return res*cur
// })
// console.log(product);

//DOM

// let h2=document.querySelector("h2");
// console.dir(h2.innerText)
// h2.innerText=h2.innerText+"From Apna College"
// let divs=document.querySelectorAll(".box")
// divs[0].innerText='hello';
// divs[1].innerText='hy';
// divs[2].innerText='hlo';

// let newEl=document.createElement("button");
// newEl.innerText="click me!";
// newEl.style.backgroundColor="red";
// newEl.style.color="white";
// document.querySelector("body").prepend(newEl)

// let modebtn=document.querySelector("#mode");
// let body = document.querySelector("body");
// let currmode="light";
// modebtn.addEventListener("click",()=>{
//     if (currmode==="light"){
//         currmode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     } else{
//         currmode="light";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });

// let data="new data";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewdata(){
//         console.log("data is: ",data);
//     }
// }
// let stu1= new user("dhruv","dhruv@email.com");
// let stu2= new user("daksh","daksh@email.com");

// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editdata(){
//         data="edited data";
//     }
// }
// let admin1 = new admin("admin","admin@email.com");


