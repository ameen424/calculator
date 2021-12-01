enum PrintMedia{
    Newspaper = 1,
    Newsletter = getPrintMediacode('newsletter'),
    Magazine = Newsletter * 4,
    Book = 10
}



function getMedia(mediaName : string) : PrintMedia{
    if(mediaName === 'NDTV' || mediaName === 'Outlook'){
        return PrintMedia.Magazine;
    }
}


let mediaType : PrintMedia = getMedia('NDTV');
console.log(mediaType);

function getPrintMediacode(mediaName : string) : number{
    if(mediaName === 'newsletter'){
        return 24;
    }
}



console.log(PrintMedia.Newsletter);
console.log(PrintMedia["Book"]);
console.log(PrintMedia[1]);


// String Enum 
//it stores the data as string

enum Class {
    name = "Ameenpeer",
    surname = "Shaik",
    branch = "CSE",
    place = "Rayachoty",
    DOB = "31/03/2000",
    college = "SSITS"
}


console.log(Class.branch);
console.log(Class.surname);
console.log(Class.place);
console.log(Class.name);
console.log(Class.DOB);
console.log(Class.college);