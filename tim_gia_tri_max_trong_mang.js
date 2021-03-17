let numbers=[-3,5,1,3,2,10,11,0,2,3,98,101,0,102];
let max=numbers[0];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>max){
        max=numbers[i];
    }
}
document.write("The maximum value is: "+max);