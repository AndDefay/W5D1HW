function Anagram(arr1, arr2) {
    if (arr2.length !== arr2.length){
        return false;
    }
    let firstWord = arr1.toLowerCase().split('').sort().join('');
    let secondWord = arr2.toLowerCase().split('').sort().join('');

    if (firstWord === secondWord){
        return true;
    } else{
        return false;
    }
}
console.log(Anagram("Spa", "sap"))


