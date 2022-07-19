/* 
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
Example 1:
Input: x = 121
Output: true
Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:
Input: x = -101
Output: false 
*/

/*let my_num = "121"
let my_split = my_num.split("")
let my_reverse_split =  my_split.reverse()
let my_reverse_string = my_reverse_split.join()


function isPalindrome(my_split) {if (my_reverse_string == my_num) {
    return true
} else {
    return false
}}

console.log(isPalindrome(my_reverse_string))*/




// Remove vowels

// Write a function that will remove all vowels from a given string. The function should return a string.
// Example:
// Input: 'Joel'
// Output: 'Jl'

//vowels=["a", "e", "i", "o", "u"]
//def get_vowels(string):
    //ans= ''
    //for letter in string:
        //if letter.lower() not in vowels:
            //ans += letter
    //return ans

//print(get_vowels("Michael"))


/*let vowels = ['a', 'e', 'i', 'o', 'u']

function removeVowels(string) {
    let ans = ''
    for (var letter in string) {
        //if (!(id in tutorTimes))
        if (!(letter in vowels)) {
        ans += letter;
        }
    }
    return ans
}


console.log(removeVowels("Mike"))*/

/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str, arr){
    matches = 0
    str = str.toLowerCase()

    for (name of arr) {
        if (str.includes(name.toLowerCase())) {
            console.log("Matched " + (name))
            matches ++
        } 
    } 
    if (matches == 0) {
        console.log('No Matches')
    }
}



//Call method here with parameters
//findWords(dog_string, dog_names)




//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i += 2){
            let mySplice = arr.splice(i, 1, "even index")
        }
        console.log(arr)
        return arr
    }
    

replaceEvens(givenArr)
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

