interface IBodyMessage {
    name: string,
    id: number,
    body?: string
}

const implementBodyMessage = (obj: IBodyMessage): any => {
    return obj;
}

let objTest = {
    name: 'Victor',
    id: 7,
    body: "Hello world"
}
let test = implementBodyMessage(objTest);

console.log(test);