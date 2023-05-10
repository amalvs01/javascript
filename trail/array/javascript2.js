//Array

// let myArray =["test", "testing","tester","tested"]

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);
// console.log(myArray[3]);

//-----------------------------------------


//string method

// let a = "mango";
// console.log(a.length); //to count the lenth or no of the letter{also count the whitespace between the words}

//----------------------------------

//indexOf

//  let a = "mango";

//  console.log(a.indexOf('mango'));// indexOf count strt with 0. it can identify the position of the letter[-1 is a identified that value is not there]or it can use as a validationmethod


 //---------------------------------------------------------

 //lastIndexof

 
//  let a = "mango S S";

//  console.log(a.lastIndexOf('S'));// identify the position of last repeated word /letter 

//  console.log(a.search('mango'));  //same as (indexOf)

//  console.log(a.includes('mango')); // to identify the word using true or false  [mango is (true)] [moangoes is (false)]

//slice method


//  let a = "mango S";
//  let b = a.slice(0 , 7); // a.slice(start ,end )position of the  letter is extract in to aa word

//  let c = a.slice(-5); //-1 is read  the last letter  of the word . if "-5" its read the last 5th positon in the word

//  console.log(b);
//  console.log(c);

 //number metho

  //  let a = "20";// string
  //  let b = 10;//number


  //  console.log(typeof a); //its string  (typeof is used to check the number or string)

  //  console.log(typeof parseInt(a));// parseInt() convert string  to number

  //  console.log(b); //its a number
  //  console.log(b.toString());// .tostring()  convert number to string

   //----------------------------------------------------


   //ARRAY METHOD

  //  let myArray = ["A","B","C"];
  //  console.log(myArray);// print the array

  //  myArray[0] = "Z"; // edit  using the index value
  //  console.log(myArray);

  //  myArray.push('D'); // .push  to add a new value in the last of array
  //  console.log(myArray);

  //  myArray.pop(); //.pop to remove the last  value in the array
  //  console.log(myArray);

  //  myArray.unshift('D'); //.unshift to add the new value in the front of array
  //  console.log(myArray);

  //  myArray.shift(); //.shift to remove the first value in the array
  //  console.log(myArray);

  //  console.log (myArray.length); //to identify the no  of values in the array

  //  myArray.splice(0 ,1); //to remove  any  value in the array by using the index
  //  //(0,1)the  0positon value is removed if (0,2) the 0-1 postion values will be removd
  //  console.log(myArray);

  //  myArray.splice( 1,2); //if (1,2) remove 2nd value of the array
  //  console.log(myArray);

  //  myArray.splice( 3, 0 , "D","E"); //  to add a new value in any posidtion of the array using index position
  //  //if 3 is the position add new values in the  index of 3
  //  console.log(myArray);


    // let myArray = ["A", "B", "C"];

    // let newArray =myArray.slice(1);//create the array using the index position
    // //creat a new array starts with B thts mean index position of (1)
    // console.log(newArray);


    //sort

    // let myArray = ["B", "C", "A"];

    // myArray.sort();// sort the crct array
    // console.log(myArray);

    // myArray.reverse() //reverse the array
    //  console.log(myArray);

    //myObj

    // let myObj={
    //   firstName : "john",
    //   lastName :  "doe"
    // };

    //  myObj.firstName="jackson"; //to edit the obect
    //  console.log(myObj);

    //  delete myObj.lastName; //to delete the object
    //  console.log(myObj);

   //if
   
  //  let johnAge  = 25; 
  //  if(johnAge===45){
  //    console.log("you are old");
  //  }else if(johnAge <= 30 && johnAge >= 20){
  //   console.log("you are about to be old");
  //  }else {
  //   console.log("you are too young");
  //  }

  // //switch

  // let fruits= "banana"

  // switch(fruits){
     
  //   case "Apple":
  //     console.log("I bought Apple");
  //     break;
  //   case "banana":
  //     console.log("I bought banana");
  //     break;
  //   default:
  // console.log("no fruits found");
  // }


//   //Loop
//   let count = 10;

//   for(let i = 0;i <=10; i++){
// console.log(i);
//   }


// //while
// let count = 0;

// while(count<= 10){
//   console.log(count);
//    count++;//ingriment
// }

//do

// let count = 0;

// do{
//   console.log(count);
//   count++;
// }while(count <= 10);

// let myArray =["john", "Doe","jacob"];

// for(let i= 0;i< myArray.length ; i++){
//   document.write(myArray[i] +"<br>")
// }

// let myObj={
//   firstName: "John",
//   lastName: "doe",
//   age:45
// };

// for(let x in myObj){
//   document.write(myObj[x] + "<br>");
// }  

//Events

// let btn =document.getElementById('btn')

// addEventListener("click",function(){
//   alert("Clicked");
// });

// fucton myFunc() n

// function onAlert(){
//   alert("You have clicked the button");
//   console.log("Clicked")
// }
 
