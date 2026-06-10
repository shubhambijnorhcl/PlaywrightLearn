# JavaScript String Methods Cheat Sheet

## Common String Methods

| Method | Description | Example |
|--------|-------------|---------|
| **charAt()** | Returns character at specified index | `"Hello".charAt(1)` → `"e"` |
| **charCodeAt()** | Returns Unicode of character at index | `"Hello".charCodeAt(0)` → `72` |
| **concat()** | Joins strings together | `"Hello".concat(" ", "World")` → `"Hello World"` |
| **includes()** | Checks if string contains value | `"Hello".includes("ell")` → `true` |
| **indexOf()** | Returns index of first occurrence | `"Hello".indexOf("l")` → `2` |
| **lastIndexOf()** | Returns index of last occurrence | `"Hello".lastIndexOf("l")` → `3` |
| **slice()** | Extracts part of string | `"Hello".slice(1, 4)` → `"ell"` |
| **substring()** | Extracts part of string (similar to slice) | `"Hello".substring(1, 4)` → `"ell"` |
| **substr()** | Extracts characters starting from index (deprecated) | `"Hello".substr(1, 3)` → `"ell"` |
| **toLowerCase()** | Converts to lowercase | `"Hello".toLowerCase()` → `"hello"` |
| **toUpperCase()** | Converts to uppercase | `"Hello".toUpperCase()` → `"HELLO"` |
| **trim()** | Removes whitespace from both ends | `"  Hello  ".trim()` → `"Hello"` |
| **trimStart()** | Removes whitespace from start | `"  Hello  ".trimStart()` → `"Hello  "` |
| **trimEnd()** | Removes whitespace from end | `"  Hello  ".trimEnd()` → `"  Hello"` |
| **split()** | Splits string into array | `"a,b,c".split(",")` → `["a", "b", "c"]` |
| **replace()** | Replaces first occurrence | `"Hello".replace("l", "x")` → `"Hexlo"` |
| **replaceAll()** | Replaces all occurrences | `"Hello".replaceAll("l", "x")` → `"Hexxo"` |
| **repeat()** | Repeats string n times | `"Ha".repeat(3)` → `"HaHaHa"` |
| **padStart()** | Pads string at start to length | `"5".padStart(3, "0")` → `"005"` |
| **padEnd()** | Pads string at end to length | `"5".padEnd(3, "0")` → `"500"` |
| **startsWith()** | Checks if string starts with value | `"Hello".startsWith("He")` → `true` |
| **endsWith()** | Checks if string ends with value | `"Hello".endsWith("lo")` → `true` |
| **match()** | Finds matches against regex pattern | `"Hello123".match(/[0-9]+/)` → `["123"]` |
| **matchAll()** | Returns all regex matches | `"a1b2c3".matchAll(/[0-9]/g)` → Iterator of matches |
| **search()** | Returns index of regex match | `"Hello123".search(/[0-9]/)` → `5` |
| **toString()** | Converts to string (returns same string) | `"Hello".toString()` → `"Hello"` |
| **valueOf()** | Returns primitive value of string | `"Hello".valueOf()` → `"Hello"` |

## String Template Literals

| Feature | Description | Example |
|---------|-------------|---------|
| **Template Literal** | Use backticks for string interpolation | `` `Hello ${name}` `` → `"Hello John"` |
| **Multiline String** | Create multiline strings easily | `` `Line 1\nLine 2` `` → Multiline output |
| **Expression Evaluation** | Evaluate expressions inside `${}` | `` `Sum: ${2 + 3}` `` → `"Sum: 5"` |

## String Properties

| Property | Description | Example |
|----------|-------------|---------|
| **length** | Returns the length of string | `"Hello".length` → `5` |

## Commonly Used Patterns

| Pattern | Description | Example |
|---------|-------------|---------|
| **Get character at index** | Access like array | `"Hello"[1]` → `"e"` |
| **Convert to number** | Parse string as number | `Number("123")` or `parseInt("123")` → `123` |
| **Get word count** | Count words in string | `"Hello World".split(" ").length` → `2` |
| **Reverse string** | Reverse a string | `"Hello".split("").reverse().join("")` → `"olleH"` |
| **Capitalize first letter** | Capitalize first character | `str.charAt(0).toUpperCase() + str.slice(1)` → `"Hello"` |
| **Remove spaces** | Remove all spaces | `"Hello World".replace(/\s/g, "")` → `"HelloWorld"` |

---

## Notes
- Strings are **immutable** - methods return new strings, they don't modify originals
- Most string methods are **case-sensitive** unless you convert case first
- Use **template literals** (backticks) for easier string concatenation and readability
- **Regular expressions** can be powerful for pattern matching with `match()`, `replace()`, `search()`
