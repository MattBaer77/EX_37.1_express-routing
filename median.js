
function median (nums) {

    if (nums.length % 2 === 0){

        const first = nums[((Math.floor(nums.length/2)) - 1)]

        const second = nums[((Math.floor(nums.length/2)))]

        return ((first+second)/2)

    }
    
    return nums[Math.floor((nums.length/2))]

}

module.exports = {
    median,
  };