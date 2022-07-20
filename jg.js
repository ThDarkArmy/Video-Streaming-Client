let st = "ISAFEAMSAFEVERYSAFEGOODSAFEATSAFEPYTHONSAFEPROGRAMMING"
console.log(st.replaceAll("SAFE", " "))

let st1 = "I AM VERY GOOD AT PYTHON PROGRAMMING"
console.log(st1.replaceAll(" ", "SAFE"))


let sr = [1, 2, 4, 7, 9,9,9,10,4, 10]

let t = sr[0]
for(let i=1;i<sr.length;i++){
    t = t^sr[i]
}

console.log(t)
console.log(0^9)

