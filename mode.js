
function mode(nums) {

    const counts = {}
    
    nums.forEach(function(num) {

        if(counts[num] === undefined) {

            counts[num] = 0;

        }

        counts[num] += 1;

    });

    const arrNums = Object.values(counts);

    const max = Math.max(...arrNums);

    let keysOfMax = [];

    for (let key of Object.keys(counts)) {
        if (counts[key] === max){
            keysOfMax.push(key)
        }
    }

    if (keysOfMax.length === 1) {
        return keysOfMax[0]
    }

    return keysOfMax

}

module.exports = {
    mode,
  };