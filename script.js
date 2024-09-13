const toUppercase = () => {
    const string = document.getElementById('string').value;
    const upperCase = string.toUpperCase();

    let stringIndex = '';

    for (let i = 0; i < upperCase.length; i++) {
        stringIndex += `${i + 0}${upperCase[i]}`;
        
    }
    document.getElementById('result').value =  stringIndex.trim();
}