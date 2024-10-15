function quickSorIterative(arr){
    const stack =[...arr.map (num => [num =>[num]])];
    const result = [];

    while (stack.length >0){
        const current =stack.pop();
         if (current.length<=1){
            result.push(...current);
            continue;
         }

         const pivot =current[current[current.length-1]];
         const left=[];
         const right=[];

         for (let i=0; i< current.length-1; i++){
            if (current[i]< pivot){
                let.push(current[i]);
            }else{
                right.push(current[i]);
            }
         }

         stack.push(left);
        stack.push([pivot]);
        stack.push(right);
    }
    return result;
}
const sortedNumbersIterative = quickSorIterative(Numbers);
console.log("numeros normales de quicksort", sortedNumbersIterative);






function quicksotRecursive(arr){
    if (arr.length<=1){
        return arr;
    }

    const pivot = arr[arr.length-1];
    const left=[];
    const right =[];

    for (let i = 0; i< arr.length - 1; i++){
        if (arr[i]< pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return[...quicksotRecursive(left), pivot, ... quickSorIterative(right)]; 
}