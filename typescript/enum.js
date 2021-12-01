var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = getPrintMediacode('newsletter')] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = PrintMedia.Newsletter * 4] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 10] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'NDTV' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('NDTV');
console.log(mediaType);
function getPrintMediacode(mediaName) {
    if (mediaName === 'newsletter') {
        return 24;
    }
}
console.log(PrintMedia.Newsletter);
console.log(PrintMedia["Book"]);
console.log(PrintMedia[1]);
// String Enum 
//it stores the data as string
var Class;
(function (Class) {
    Class["name"] = "Ameenpeer";
    Class["surname"] = "Shaik";
    Class["branch"] = "CSE";
    Class["place"] = "Rayachoty";
    Class["DOB"] = "31/03/2000";
    Class["college"] = "SSITS";
})(Class || (Class = {}));
console.log(Class.branch);
console.log(Class.surname);
console.log(Class.place);
console.log(Class.name);
console.log(Class.DOB);
console.log(Class.college);
