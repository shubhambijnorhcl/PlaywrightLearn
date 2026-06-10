// Anagram checker in JavaScript

function normalizeString(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .split("")
        .sort()
        .join("");
}

function areAnagrams(first, second) {
    return normalizeString(first) === normalizeString(second);
}

// Example usage:
const word1 = "Listen";
const word2 = "Silent";
const message = areAnagrams(word1, word2)
    ? `\"${word1}\" and \"${word2}\" are anagrams.`
    : `\"${word1}\" and \"${word2}\" are not anagrams.`;

console.log(message);

// More examples:
console.log(areAnagrams("Dormitory", "Dirty room")); // true
console.log(areAnagrams("Hello", "World")); // false
