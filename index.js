// /*let names=["Unnati","Ayush","Tejaswi","aman","archith"];
// let max_string = names[0];
// let current_string = 0;
// for(let i = 0; i < names.length; i++){
//     let single_name = names[i];
//       if(single_name.length > max_string.lenght){
//         max_string = single_name;
//         }
//         console.log(max_string);
//     }
// */


// /*function sum(){
//     let number1 = 2;
//     let number2 = 3;
//     sum = number1 + number2;
//     console.log(sum);
// }
// sum();

// function button_clicked(){
//     console.log("Button is Clicked.");
// }
// */


// /*function button_clicked(){
//     for( let i = 10; i > 0; i = i -1){
//         if (i % 2 != 0){
//             console.log(i);
//         }
//     }
// }
// */


// /*function AverageNumber(num1 , num2, num3, num4){
    
//     let average = (num1 + num2 + num3 + num4) / 4;
//     return average;
// }

// let avg_num = AverageNumber(20 , 30 , 40 , 20); 
// console.log(avg_num);
// */


// /*function PrimeNumber(LowerNumber, HigherNumber){
//     for(let i = LowerNumber; i <= HigherNumber; i = i + 1){
//         let counter = 0;
//         let flag = false;
//         for(let j = 2; j < i; j = j + 1){
//             counter = 1;
//             if(i % j == 0){
//                 flag = false;
//                 return i;
//             }
//             else{
//                 flag = true;
//             }
            
//         }
        
//     }
   
// }

// let Prime = PrimeNumber(0, 100);
// console.log(prime);
// */



function primeNumber(LowerNumber, HigherNumber){ 
    	let flag=false; 
    	for(let i = LowerNumber; i <= HigherNumber; i = i + 1){ 
             for(let j = 2; j < i; j = j + 1){ 
                let flag = true;
                 if(i % j == 0){ 
                     flag = false; 
                     break; 
                 }
             } 
             if(flag){ 
                return i; 
             } 
         } 
    } 
 
    let prime = primeNumber(1, 100);
    console.log("Prime Number " +prime);


// let a = 2;
// switch(a){
//     case 1:
//         a = "One";
//         break;
//     case 2:
//         b = "Two";
//         break;
//     default:
//         a = "not found";
//         break;
// }
// console.log("The value of a is "+a );