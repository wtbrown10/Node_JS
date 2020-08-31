function lcm(arr) {
    arr.sort((a,b) => a - b)
    console.log('Max:',arr[1]);
    console.log('Min:',arr[0]);
    let foundLcm = false;
    const min = arr[0], max = arr[1];
    for (let i = max+1; !foundLcm && i < 100; i++) {
        let evenlyDivisable = true;
        //test if i is the lcm (evenly divisable by all numbers between min and the max)
        for (let j = min; j <= max && evenlyDivisable; j++) {
            if(
                !(i % j === 0)
            ) {
                evenlyDivisable = false
            }
        }
        if (evenlyDivisable) {
            console.log('LCM:', i);
        }
    }
    return arr
}
lcm([1,5])