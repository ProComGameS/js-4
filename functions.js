
export function generateKey(keyLength, symbols) {
    let result = '';

    for (let i = 0; i < keyLength; i++) {
        result += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }

return result;

}

