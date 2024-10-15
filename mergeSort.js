function mergeSortIterative(arr){
    if (arr.lenght<=1){
        return arr;
    }

    let temporal=arr.map(numero => [numero]);

    while(temporal.lenght > 1){
        const merged =[];
        for (let i=0; i < temporal.lenght; i += 2){
            const left = temporal[i];
            const right = temporal[i + 1]||[];
            merged.push(merged(left,right));
        }
        temporal=merged;
    }
    return temporal[0];
}

const sortedNumbersIterative=mergeSortIterative(numbers);
console.log("nuemros normales: " , sortedNumbersIterative);






function mergeSortRecursivo(arr){
    if (arr.lenght <= 1){
        return arr;
    }

    const mid = Math.floor(arr.lenght/2);
    const left=mergeSortRecursivo(arr.slice(0,mid));
    const right=mergeSortRecursivo(arr.slice(mid));
    return merge(left, right);
}

function merge(left,right){
    const sortedArray=[];
    let i=0;
    let j=0;


    while(i<left.lenght && j<right.lenght){
        if (left[i]<right[j]){
            sortedArray.push(left[i]);
            i++;
        }else {
            sortedArray.push(right[i]);
            j++;
        }
    }

    return[...sortedArray,...left.slice(i), ...right.slice(j)];
}

const numbers  =[43,44,65,12,23,8];
const sortedNumerosRecursivo=mergeSortRecursive(numbers);
console.log("estos son los numeros recursivos:", sortedNumerosRecursivo);
