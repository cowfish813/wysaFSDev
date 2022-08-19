var obj = {
    a: {
        b: {
            c: 12
        }
    }
};

Object.prototype.findPath = function (path) {
    const arr = path.split('.');//individual chars to chain on
    let cur = this;
    for (let node of arr) {
        if (!cur[node]) return undefined; //early exit
        cur = cur[node]; //update to most current
    }
    return cur; //most current
}

console.log(obj.findPath('a.b.c')); // 12
console.log(obj.findPath('a.b')); // {c: 12}
console.log(obj.findPath('a.b.d')); // undefined
console.log(obj.findPath('a.c')); // undefined
console.log(obj.findPath('a.b.c.d')); // undefined