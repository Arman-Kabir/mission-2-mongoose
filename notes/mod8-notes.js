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


    #####5: Explore $group more , accumulator, $sort , $limit
         --------------------------------------------------------
         *accumulator does adds... 

         ** $group: {
            _id:"$salary"
        }
        **_id-->gives us distinct values. 

         *$group: {
            _id: null
        }-----> gives us a document taking all documents

        **if we give anything except _id--> then it takes them as accumulator object

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
    

#7: Explore $unwind
-------------------------
 {
        //unwind stage 
        $unwind: "$friends"
    },
    {
        $group: {
            _id: "$friends",
            count: { $sum: 1 }
        }
    }

    #8: Explore powerful Multi Stage Pipeline
    -----------------------------------
    $facet -- to create multi-stage pipeline

    db.practice.aggregate([
    { $match: { _id: ObjectId("6406ad63fc13ae5a40000064") } },
    {
        $facet: {
            //Sub Pipeline
            "friendsCount": [
                //stage 
                { $project: { friendsCount: { $size: "$friends" } } }

            ],
            //sub pipeline 
            "interestsCount": [
                { $project: { interestsCount: { $size: "$interests" } } }
            ],
            //sub pipeline
            "skillsCount": [
                { $project: { skillsCount: { $size: "$skills" } } }
            ]
        }

    }
])


#9: Explore $lookup operator
-------------------------
    *referencing document
    *local field  *Foreign Field

    db.practice.aggregate([


    {
        $match: { email: "dladley0@washingtonpost.com" }
    },
    {
        $lookup:{
            from:"additionalInfo",
            localField:'_id',
            foreignField:'userId',
            as:'additionalInformation'
        }
    }
])


    #10 Fix _id $lookup issue , overview of populate methodsx
    updateOne(
    {_id:ObjectId('64662d1261b4254f456bad4c')},
    {$set:{userId:new ObjectId('6406ad63fc13ae5a40000064')}})



*/