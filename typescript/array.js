var sam = ["prince", "jack", "ameen"];
for (var _i = 0, sam_1 = sam; _i < sam_1.length; _i++) {
    var j = sam_1[_i];
    console.log(j.toUpperCase());
}
var act;
act = ["mack", 24, 4, 565, "qualified"];
act.push("btech");
act.pop();
act.unshift("final year");
console.log(act);
// Sorting
var num = [12, 24, 1, 3, 5, 45, 47, 9, 7];
num.sort(function (a, b) { return a - b; });
console.log(num);
console.log(num.length);
