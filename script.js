//TASK1
var arr = [32,25,85,89,45,76,7,41,2,12];
// // butun elementleri cap et
//a) let a = arr.slice(0)



//en boyuk element

// b)let  b = Math.max(...arr);
// console.log(b);


// sona 15 elave et

// arr.push(15);
// c)console.log(arr);
//ilk elem sil
// arr.shift(0)
// d)console.log(arr);


// e) arr.sort();
// console.log(arr[arr.length-1]);

// arr.splice(3,0,43);
// f)console.log(arr);

// g)console.log(arr.slice(3));

// h)arr.forEach((value) => console.log(value))

// i)for(let i =0 ; i<arr.length; i++){
//     if(arr[i]>40){
//         console.log(arr[i]);
//     }
// }

// arr.map((value) => {
//     if(value > 40){
//         console.log(value);
//     }
// })

//TASK2

// var getStudentsName = ([
//     { name: "Steve" },
//     { name: "Mike" },
//     { name: "John" }
// ])
// console.log(getStudentsName.map((value) => {
//     return value.name;
// }));

//TASK3

// const checkFactors = function(arr,num){
//     for(let i =0; i<arr.length;i++){
//         if(num % arr[i] !== 0){
//             return false
//         }
        
//     }
//     return true;
// }



// console.log(checkFactors([2,3,4],24));

// TASK4

const getSequence = function(start,end){
    let arr = [];
    for(let i = start; i<= end; i++){
      arr.push(i);
    }

    console.log(arr);

    
}


getSequence(5,21);


