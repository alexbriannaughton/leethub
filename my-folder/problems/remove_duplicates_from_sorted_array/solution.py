class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        while i < len(nums) - 1:
            if nums[i+1] == nums[i]:
                nums.remove(nums[i])
                continue
            i += 1