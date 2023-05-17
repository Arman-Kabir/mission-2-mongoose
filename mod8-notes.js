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


         #5: Explore $group more , accumulator, $sort , $limit
         --------------------------------------------------------
         *$group: {
            _id: null
        }-----> gives us a document taking all documents

        ****understand these well 
        db.practice.aggregate([
    { $match: { age: { $gt: 18 } } },
    //group stage 
    {
        $group: {
            _id: "$salary",
            persons: { $sum: 1 }
        }
    },
    {
        //project stage 
        $project: {
            _id: 0,
            salary: "$_id",
            persons: 1
        }
    },
    //sort stage 
    {
        $sort: { _id: -1 }
    },
    {
        $limit: 3
    }
])

#6: Explore Accumulator Operator using aggregation
----------------------------------------------------
    

*/