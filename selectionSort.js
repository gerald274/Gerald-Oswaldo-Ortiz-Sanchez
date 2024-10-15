

function selectionSort(arr){
    const n =arr.length;

    for (let i=0; i <n-1; i++){
        let minIndex=i;

        for (let j = i +1; j<n; j++){
            if (arr[j]<arr[minIndex]){
                minIndex=j;
            }
        }

        if (minIndex !==i){
            [arr[i], arr[minIndex]] =[arr[minIndex], arr[i]];
        }
    }

    return arr;
}

const numbers=[23,34,54,66,12,32];
const sortedNumbersIterative=selectionSort([... numbers]);
console.log("numeros normales o iterativos:", sortedNumbersIterative);






function selectionSortRecursive(arr,start=0){
    const n = arr.length;

    if (start >= n - 1){
        return arr;
    }
    let minIndex=start;
    for (let j=start+1;j< n; j++){
        if (arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }

    if (minIndex !== start){
        [arr[start],arr[minIndex]]=[arr[minIndex], arr[start]];
    }
    return selectionSortRecursive(arr,start +1);
}

const sortedNumerosRecursive=selectionSortRecursive([... numbers]);
console.log("estos son los numeros recursivos:", sortedNumerosRecursive);
