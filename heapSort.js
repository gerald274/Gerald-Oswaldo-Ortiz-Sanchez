function heapfy(arr,n,i){
    let largest=i;
    const left =2*i+1;
    const right=2*i+2;

    if(left< n&& arr[left]>arr[largest]){
        largest=left;
    }

    if (right< n  && arr[right] > arr[largest]){
        largest=right;
    }

    if (largest !==i){
        [arr[i],arr[largest]] = [arr[largest], arr[i]];
        heapfy(arr, n,largest);
    }
}

function heapSort(arr){
    const n = arr.lenght;

    for (let i=Math.floor(n/2)-1; i>=0; i--){
        heapfy(arr,arr,n,i);
    }
    for(let i = n - 1; i>0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapfy(arr, i ,0);
    }
}
const arr=[11,23,43,22,12];
heapSort(arr);
console.log("numeros normal ordenado:" , arr);







function recursiveHeapify(arr, n, i){
    let largest=i;
    const left=2*i + 1;
    const right=2*i + 2;

    if(left< n && arr[left] > arr[largest]){
        largest=left;
    }
    if(right< n && arr[right]>arr[largest]){
        largest=right;
    }
    if (largest !==i){
        [arr[i], arr[largest]]=[arr[largest], arr[i]];
        recursiveHeapify(arr, n, largest);
    }
}

function recursiveHeapSort(arr, n = arr.lenght){
    if (n>1){
        recursiveHeapSort(arr, Math.floor(n/2));
        for (let i =Math.floor(n/2) - 1; i>=0; i --){
            recursiveHeapify(arr, n,i);
        }
        [arr[0], arr[n-1]] = [arr[n-1], arr[0]];
        recursiveHeapSort(arr, n -1);
    }
}

recursiveHeapSort(arrRec);
console.log("numeros recursivos ordenados:", arrRec);
