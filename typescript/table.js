var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var csvForm = document.getElementById("csvForm");
var csvFile = document.getElementById("csvFile");
var displayArea = document.getElementById("displayArea");
var final_vals = [];
csvForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var csvReader = new FileReader();
    var input = csvFile.files[0];
    csvReader.onload = function (evt) {
        var text = evt.target.result;
        if (typeof text === "string" || text instanceof String) {
            var values = text.split(/[\n]+/);
            values.forEach(function (val) {
                final_vals.push(val.split(","));
            });
            generate_table(final_vals).then(function (result) {
                displayArea.innerHTML = result;
                var th_values = document.getElementsByTagName("th");
                var td_values = document.getElementsByTagName("td");
                var capitaliize_table_column = function (table_e) {
                    table_e.innerHTML =
                        table_e.innerHTML[0].toLocaleUpperCase() +
                            table_e.innerHTML.slice(1);
                };
                for (var _i = 0, th_values_1 = th_values; _i < th_values_1.length; _i++) {
                    var th_val = th_values_1[_i];
                    capitaliize_table_column(th_val);
                }
                for (var _a = 0, td_values_1 = td_values; _a < td_values_1.length; _a++) {
                    var td_val = td_values_1[_a];
                    capitaliize_table_column(td_val);
                }
            });
        }
    };
    csvReader.readAsText(input);
});
var generate_table = function (arrayTable) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, "\n      <table class=\"table table-stripped\">\n      <thead>\n        ".concat(arrayTable[0]
                .map(function (val) {
                return "\n                <th scope=\"col\">".concat(val, "</th>\n            ");
            })
                .join(""), "\n      </thead>\n      <tbody>\n          ").concat(arrayTable
                .map(function (val, index) {
                if (index === 0)
                    return;
                return "\n                  <tr>\n                        ".concat(val
                    .map(function (sub_val) {
                    return "\n                                <td>".concat(sub_val, "</td>\n                            ");
                })
                    .join(""), "\n                  </tr>\n              ");
            })
                .join(""), "\n        </tbody>\n      </table>\n    ")];
    });
}); };
// const csvForm = document.getElementById('csvForm') as HTMLFormElement;
// const csvFile = document.getElementById('csvFile') as HTMLInputElement;
// const displayArea = document.getElementById('displayArea') as HTMLDivElement;
// // is the array to hold the final values from the CSV file
// let final_vals = [];
// // Create an event listener for the form object
// csvForm.addEventListener("submit", (e: Event) =>  {
//     e.preventDefault(); // prevent HTML form submission
//     let csvReader = new FileReader(); // generate a filereader from the JS API
//     const input = csvFile.files[0]; // grab the first (only) file from the input
//     // generating the function that will run on the action
//     csvReader.onload = function(evt) {
//         const text = evt.target.result; // this is the data generated from the csvReader reading the information in the file
//         // Ensure the type of information from the file is a string
//         if(typeof text === 'string' || text instanceof String) {
//             const values = text.split(/[\n]+/); // group the information by the CSV breakpoint \n is a new line
//             values.forEach(val => {
//                 // further split by each section by the CSV
//                 final_vals.push(val.split(','));
//             });
//             // create form
//             generate_table(<[string[]]>final_vals)
//                     .then(result => {
//                     // async function is used to ensure the formatting does not try to occur after the table is created
//                     displayArea.innerHTML = result;
//                     const th_values = document.getElementsByTagName('th');
//                     const td_values = document.getElementsByTagName('td');
//                     const capitilize_table_column = (table_el: HTMLElement) => {
//                         table_el.innerHTML = table_el.innerHTML[0].toUpperCase() + table_el.innerHTML.slice(1);
//                     }
//                     for (const th_val of th_values) {
//                         capitilize_table_column(th_val);
//                     }
//                     for (const td_val of td_values) {
//                         capitilize_table_column(td_val);
//                     }
//                 });
//         }
//     }
//     // this runs the above action
//     csvReader.readAsText(input);
// });
// // used as async to ensure a promise can be used to format the data
// const generate_table = async (arrayTable: [string[]]) : Promise<string> => {
//     return `
//         <table class="table table-striped">
//             <thead>
//                 ${arrayTable[0].map(val => {
//                     return `
//                         <th scope="col">${val}</th>
//                     `
//                 }).join('')}
//             </thead>
//             <tbody>
//             ${arrayTable.map((val, index) => {
//                 if(index === 0) return;
//                 return `
//                     <tr>
//                         ${val.map(sub_val => {
//                             return `
//                                 <td>${sub_val}</td>
//                             `
//                         }).join('')}
//                     </tr>
//                 `
//             }).join('')}
//             </tbody>
//         </table>
//     `;
// }
