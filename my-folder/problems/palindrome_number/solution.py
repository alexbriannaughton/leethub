class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        s = str(x)
        i = 0
        while i < len(s) / 2:
            if s[i] != s[-1-i]: return False
            i += 1
        return True