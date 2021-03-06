function solve(arr) {
    let num = 1;
    const result = [];
    arr.forEach(el => {
        if (el === 'add') {
            result.push(num);
        } else if (el === 'remove') {
            result.pop();
        }
        num++;
    });
    return result.length > 0 ? result.join('\n') : 'Empty';
}
console.log(solve(['add',
    'add',
    'add',
    'add']
));
console.log(solve(['remove',
    'remove',
    'remove']
));
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));