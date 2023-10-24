function areAnagrams(word1, word2) {
    // split words in an array -> sort the letters -> back to word and compare return true or false
    // console.log(word1.split('').sort().join(''))
    // console.log(word2.split('').sort().join(''))
    return word1.split('').sort().join('') === word2.split('').sort().join('');
  }
  
  function filterAnagrams(arr, target) {
    // return the words that are an anagram to target
    return arr.filter(word => areAnagrams(word, target));
  }
  
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); // Output: ['listen', 'silent']
  

  function sortByMultipleCriteria(people) {
    return people.sort((a, b) => {
      // console.log(a)
      // console.log(b)
      // if age not equal return younger
      if (a.age !== b.age) {
        return a.age - b.age;
      }
      // if age is equal sort by name
      return a.name < b.name ? -1 : 1;
    });
  }

  
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
  ];
  
  const sortedPeople = sortByMultipleCriteria(people);
  console.log(sortedPeople);
  