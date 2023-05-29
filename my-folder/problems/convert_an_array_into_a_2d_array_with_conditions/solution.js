/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
    const answer = [[]];

    for (let i = 0; i < nums.length; i++) {
        let landed = false;
        
        for (let j = 0; j < answer.length; j++) {
            if (!answer[j].includes(nums[i])) {
                answer[j].push(nums[i]);
                landed = true;
                break;
            }
        }

        if (!landed) answer.push([nums[i]]);
    }

    return answer;
};