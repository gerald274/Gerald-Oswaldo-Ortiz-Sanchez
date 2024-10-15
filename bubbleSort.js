function bubbleSortIterativo(arr){
    const n=arr.length;
    for (let i = 0; i<n; i++){
        for (let j = 0; j<n-i-1; j++) {
            if (arr[j]> arr[j + 1]){
                [arr[j], arr[j + 1]]=[arr[j +1], arr[j]];
            }
        }
    }
    return arr;
}
const numeros = [60,35,12,15,77];
const sortedNumerosIterativo = bubbleSortIterativo(numeros);
console.log("estos son los numeros normales: ", sortedNumerosIterativo);




function bubbleSortRecursivo(arr, n = arr.length){
    if (n === 1){
        return arr;
    }
    let swapped = false;
for (let i = 0; i< n - 1; i++){
    if (arr[i] > arr[i + 1]){
        [arr[i], arr [i+1]]=[arr[i + 1], arr[i]];
        swapped = true;
    }
}
return swapped ? bubbleSortRecursivo(arr, n -1) : arr;
}

const numerosRecursivo = [34,25,13,22,45];
const sortedNumerosRecursivo = bubbleSortRecursivo(numerosRecursivo);
console.log("estos son los numeros recursivos: ", sortedNumerosRecursivo);

