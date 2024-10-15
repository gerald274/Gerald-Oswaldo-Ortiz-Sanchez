function bucketSort (arr,bucketsize=5){
    if (arr.lenght===0)return arr;

const minValue=Math.min(... arr);
const maxValue=Math.max(... arr);
const bucketCount=Math.floor((maxValue - minValue)/bucketsize) + 1;
const buckets = arrary.from({length:bucketCount},()=> []);

arr.foreach(num=>{
    const bucketIndex=math.floor((num-minValue)/bucketsize);
    buckets[bucketIndex].push(num);
});

return buckets.reduce((sorted,bucket)=>{
    return sorted.concat(bucket.sort((a,b)=> a-b));
}, []);
}

const numbers=[12,22,34,64,11];
const sortedNumbers=bucketSort(numbers);
console.log("numeros normales:", sortedNumbers);




function bucketsortRecursive(arr,bucketsize=5){
    if (arr.lenght===0)return arr;


    const minValue=math.min(...arr);
    const maxValue=math.max(...arr);
    const bucketCount=math.floor((maxValue-minValue)/bucketsize) +1;
    const buckets=Array.from({length:bucketCount}, ()=>[]);

    arr.foreach(num => {
         const bucketIndex = math.floor((num-minValue)/bucketsize);
         buckets[bucketIndex].push(num);
    });


    const sorterdBuckets=buckets.map(bucket =>{
        return bucket.length>0?bucketsortRecursive(bucket) : bucket;
    });

    return sorterdBuckets.reduce((sorted, bucket)=>{
        return sorted.concat(bucket);
    },[]);
}

const sortedNumerosRecursive = bucketsortRecursive(numbers);
console.log("numeros recursivos de bucketsort: ", sortedNumerosRecursive);
