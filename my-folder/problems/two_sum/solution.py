class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # good time, bad mem
        # dict = {}
        # for i, n in enumerate(nums):    
        #     if n in dict:
        #         return [i, dict[n]]
        #     else: dict[target - n] = i

        # bad time, good mem
        i = 0
        while i < len(nums):
            j = i + 1
            while j < len(nums):
                if nums[i] + nums[j] == target:
                    return [i, j]
                j += 1
            i += 1