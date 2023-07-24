class Solution:
    def reverseWords(self, s: str) -> str:
        output = []
        s = s.strip().split(" ")
        i = len(s) - 1
        while i >= 0:
            if s[i] != " " and s[i] != "":
                output.append(s[i])
                if not i == 0: output += " "
            i -= 1
        return "".join(output)