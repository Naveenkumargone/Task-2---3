// Find Longest Sequence number

function longestSeq(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let currentLength = 1;

        while (nums.indexOf(currentNum + 1) !== -1) {
            currentNum++;
            currentLength++;
        }

        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}

const arr = [2, 3, 6, 8, 0];
console.log(longestSeq(arr));  
