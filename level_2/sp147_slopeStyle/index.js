const collectAnimals = (...arr) => arr
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const combineFruit = (fruit, sweets, vegetables) => {
    return { fruit, sweets, vegetables };
};
console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]))

const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`
console.log(parseSentence({location:"Burly Idaho", duration: "2 weeks"}))


// const returnFirst = items => items[0]
const returnFirst = items => {
    const [firstItem] = items
    return firstItem
}
console.log(returnFirst(["dog", "cat", "mouse", "jackolope", "platypus"]))

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav} and ${thirdFav}`
}
console.log(returnFavorites(favoriteActivities))


// const combineAnimals = (...arrs) => [...arrs].flat()
const combineAnimals = (...arrs) => arrs.flat()

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus", "bobCat"];
console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// function product(a, b, c, d, e) {
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

// const product = (...parameters) => {
//     return parameters.reduce((final, current) => final * current, 1)
// }


const product = (...parameters) => parameters.reduce((final, current) => final * current, 1)
console.log(product(1,2,3))

// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

// const unshift = (array, ...parameters) => {

//     return [...array, ...parameters]
// }
const unshift = (array, ...parameters) => [...parameters, ...array]
console.log(unshift([1,2,3], "a", "b", "c"))

// const populatePeople = names => {
//     console.log(names)
//     return names.map(name => {
//         name = name.split(" ")
//         return { firstName: `${name[0]}`, lastName: `${name[1]}` }
//     })
    
// }
const populatePeople = names => {
    return names.map(name => {
        name = name.split(" ")
        let [firstName, lastName] = name
        return { firstName, lastName }
    })
    
}
console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))