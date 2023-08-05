var x = {
    name: "Reyad",
    "Full Name": "Reyad Hossain Khan",
    email: "khanreyad207@gmail.com",
    myDetail: ["Programmer","Officer"],
    fabouriteMovies : {
        bangla: "Suronggo",
        english: "Tytanic",
        hindi : "Tarename",
    }
};
x.bookList = { 
    bangla : "SorotChandra",
    English : "Haripoter",
    Arabic : "Arob Rojoni"
};

Object.freeze(x);

x.car = { 
    bangla : "SorotChandra",
    English : "Haripoter",
    Arabic : "Arob Rojoni"
};
console.log(x);
