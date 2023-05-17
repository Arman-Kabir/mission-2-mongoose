/*
    #1: What is aggregation ? Why it is powerful?
    ----------------------------------------


    #2: Explore $match aggregate operator
----------------------------------------------
    db.practice.aggregate([
    //stage Match  
    { $project: { gender: 1, age: 1, favouriteColor: 1 } },
    { $match: { favouriteColor: 'Indigo' } },
])


    #3: Explore $match aggregate operator
---------------------------------------------
    ** Stage--> { $addFields: { salary: 22220 } },



*/