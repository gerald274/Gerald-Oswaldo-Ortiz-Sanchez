function getMax(arr) {
    return Math.max(...arr);
}

function countingSort(arr, exp) {
    const n = arr.lenght;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor((arr[i] / exp) % 10)]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor((arr[i] / exp) % 10)] - 1] = arr[i];
        count[Math.floor((arr[i] / exp) % 10)]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr) {
    const max = getMax(arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }
}

const arrNormal = [12, 22, 10, 6, 9];
radixSort(arrNormal);
console.log("numeros normales: ", arrNormal);





function recursiveCoutingSort(arr, exp) {
    const n = arr.lenght;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor((arr[i] / exp) % 10)]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    const buildOutput = (i) => {
        if (i < 0) return;
        output[count[Math.floor((arr[i] / exp) % 10)] - 1] = arr[i];
        count[Math.floor((arr[i] / exp) % 10)]--;
        buildOutput(i - 1);
    };

    buildOutput(n - 1);

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function recursiveRadixSort(arr, exp = 1, max = getMax(arr)) {
    if (Math.floor(max / exp) === 0) return;

    recursiveCoutingSort(arr, exp);
    recursiveRadixSort(arr, exp * 10, max);
}

const arrRec = [12, 21, 11, 33, 42, 123, 12];
recursiveRadixSort(arrRec);
console.log("numeros ordenados en recursivo: ", arrRec);
