var tup = [10, 'prince', 'ameen', 'btech', 'cse', 18504, 'jack', 'sam', 'Atom', 'Xereal', 'slack', 15, 25, 726, 7262];
tup.push(24);
tup.push('SSITS');
tup.push('RCT');
console.log("the length of tuple is : " + tup.length);
console.log(tup.pop() + " popped from the element");
console.log("items after pop : " + tup.length);
// to access the data using index value
console.log(tup[3]);
console.log(tup[7]);
console.log(tup);
function displayPyramid(n) {
    for (var i = 0; i < n; i++) {
        var str = '';
        for (var j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (var k = 1; k <= (2 * i + 1); k++) {
            str = str + '*';
        }
        console.log(str);
    }
}
displayPyramid(8);
