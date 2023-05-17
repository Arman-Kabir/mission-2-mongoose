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

    **{
                $floor: {
                    $multiply: [{ $rand: {} }, 100]
                }
            }

    ** new collection with new field::: {$out:"salary"}

    #4: Explore $group
    ----------------------
        update collection using aggregation -->
        **{$merge: "practice"}
        
        *****$group -- finds out unique combinations
        **{ $group: { _id: "$gender" } }



*/