let vic = { language: { Javascript: { value: "favorite" } } } 
let vic2 = { language: { Java: { value: "favorite" } } } 

let arr = ['Java', 'Javascript']
for(lang of arr) { console.log(vic?.language[lang] ?? {}) }
for(lang of arr) { console.log(vic2?.language[lang] ?? {}) }
