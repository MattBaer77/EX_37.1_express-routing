
function mean (nums) {

    let sum = 0;
    let count = 0;

    for (let num of nums) {

        sum = sum + num;
        count++

    }

    return sum/count

}

module.exports = {
    mean,
  };