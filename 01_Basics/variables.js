

// value for constant variable cannot be changed as it is immutable
const userId=1734

//normally we use let to create mutable variables types its scope is limited to block (within curly braces)
let userName='Rizwan'

/*
prefer not to use var as it create issue in block and functional scope
*/
var userEmail="rizwan@google.com"
userCity="Shimoga"

//unassigned variables take "undefined" as a default value
let userState;

console.table([userId,userEmail,userName,userCity,userState])

let y=12;
function add(){
    let x=10;
    let y=13
    console.log(x+y)
    function change(){
        let y=14;
        console.log(x)
    }
    
    change()
    console.log(y)
}
add()
console.log(y)




