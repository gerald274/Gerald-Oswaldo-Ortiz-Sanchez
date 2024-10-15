//function normal
function insertionSort(arr){
    for (let i=1; i<arr.lenght;i++){
        let key=arr[i];
        let j=i-1;

        while(j>=0 && arr[j] > key){
            arr [j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
}

const arrNormal=[11,22,12,32,13];
insertionSort(arrNormal);
console.log("nnumeros normales ordenados:", arrNormal);





//function recursive 
function recursiveInsertionSort(arr, n){
    if (n<=1){
        return;
    }

    recursiveInsertionSort(arr, n-1);
    let key= arr[n- 1];
    let j = n - 2;

    while(j>=0 && arr[j] > key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
}

const arrRec=[12,22,13,32,11];
recursiveInsertionSort(arrRec, arrRec.length);
console.log("numeros rescursivos ordenados:", arrRec);
