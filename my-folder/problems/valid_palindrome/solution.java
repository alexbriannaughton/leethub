class Solution {
    public boolean isPalindrome(String s) {
        
        int i = 0, j = s.length() - 1;
        
        while(i < j) {
            
            char c1 = s.charAt(i); 
            char c2 = s.charAt(j); 
            
            if(!isValidChar(c1)){
                i++; 
                continue; 
            }
            if(!isValidChar(c2)){
                j--; 
                continue; 
            }
            
            if(Character.toLowerCase(c1) != Character.toLowerCase(c2))
                return false; 
            
            i++; 
            j--; 
        }
        
        return true; 
    }
    
    private boolean isValidChar(Character c) {
        
        return Character.isAlphabetic(c) || Character.isDigit(c); 
        
    }
}