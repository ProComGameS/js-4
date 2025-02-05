
export function generateKey(keyLength, symbols) {
    let result = '';

    for (let i = 0; i < keyLength; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

return result;

}


export function average(mixed) {

    const nummer = mixed.filter(elem => !isNaN(Number(elem)));
    const converter = nummer.map((elem) => Number(elem));
    const sum = converter.reduce((a, b) => a + b);
    const result = sum / converter.length;

    return result;

}


export function showDeepArray(deep) {

    if (!Array.isArray(deep)) {
        console.log(deep);
        return deep;
    }
    deep.forEach((item) => {
        showDeepArray(item);
    })

}

