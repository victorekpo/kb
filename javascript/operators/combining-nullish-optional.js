// Combining the nullish coalescing operator and optional chaining to set default values.

obj = {
  name: "Vic",
  details: { 
    city: "Houston",
    skills: "programming"
  }
}

obj2 = {
  name: "Vic",
  details: {
    age: 30,
    city: "Houston",
    skills: "programming"
  }
}

result = obj.details?.age ?? 25
result2 = obj2.details?.age ?? 25

console.log(result, result2)
