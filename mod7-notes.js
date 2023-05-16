/*
    #1: Overview Of previous Module ,Install Studio 3T , No SQL Booster
--------------------------------------------------------------------------
        save-> save() method is in mongoose -> mongoose does it with data validate using-> schema
        mongoose doesn't  use mongoDB insert or insertMany as that inserts any type of data

        except insert and insertMany of mongoDB query -> all other queries work in mongoose

        ***Download practice data ----> https://github.com/Apollo-Level2-Web-Dev/mongoose-practice-data/blob/main/practice-data.json

        *******Queries********
        *show databases
        *use practice-mongoose
        *db.getCollection('practice').find()
        *db.getCollection('practice').find().limit(2)

            ***GUI Tools***
            *Studio 3T
            *NoSql Booster



    #2: Explore $ne , $neq , $gt , $lt , $gte , $lte Operator
    -------------------------------------------------------------
        *search --> mongodb operators -> Query and Projection Operators 
        when using any operator --> we must bring a new {}
        
        *$eq *$ne *$gt *$lt *$lte *$gte


        *field filtering --> {gender:1}

        projection --> .project({age:1})

        sorting  --> .sort({age:1})--sorts in ascending order ==>  .sort({age:-1}) --sorts in descending order


    #3 Explore $in , $nin , Nested Condition,
    --------------------------------------------------
        new {} when using operators
        { age: { $gte:18, $lt:30 } } --> , is called implicit and;
        { $in: [18, 20] } --> works like 'or' ||| it is also called implicit and;
        { gender: 'Female', age: { $nin: [18, 23,30,46,23] } } ---> not in


    4: Explore $and , $or , Implicit vs explicit and
------------------------------------------------------------
    //  db.practice.find({
//     $and: [
//         { gender: 'Female' },
//         { age: { $lt: 30 } },
//         { "skills.name": 'JAVASCRIPT' }
//     ]
//      }).project({ gender: 1, age: 1, "skills.name": 1 })

//  db.practice.find({
//     $or: [
//       {"skills.name":'PYTHON'},
//         { age: { $lt: 30 } },
//         { "skills.name": 'JAVASCRIPT' }
//     ]
//      }).project({ gender: 1, age: 1, "skills.name": 1 })


    db.practice.find({
    "skills.name":{$in: ['JAVASCRIPT','PYTHON'] }
    }).project({ gender: 1, age: 1, "skills.name": 1 })

*** we can't use implicit and -- in case of same data. Instead we use explicit and.
    $and: [
        { age: { $ne: 18 } },
        { age: { $gt: 15 } }
    ]



    #5: Explore $exists , $type , $size operator
    ---------------------------------------------------
    $exists only finds out if field is available

    *$exists (true | false)
    *$type
    *$size (to find empty array or array size) --> In array query operatore

    #6: Explore $all , $elemMatch Operator Part1:
    ------------------------------------------------
    *db.practice.find({ interests: "Travelling" }).project({ interests: 1 })
    *db.practice.find({ interests: ["Gardening", "Writing", "Reading"] }).project({ interests: 1 })
    * interests: {$all:['Travelling','Cooking','Reading']} -->we take elements from array at any position
    *  skills: { $elemMatch: { name: "JAVA", level: "Intermidiate" } }
    * 


    #7: Explore $set , $addToSet , $push operator
    ------------------------------------------------
    to find and id::: {_id:ObjectId("6406ad63fc13ae5a40000065")}

    *********Field Update Operators*************
    { $set: { <field1>: <value1>, ... } } ----> we can use $set in primitive types of data to update


    ******Array Update Operators********
    * $addToSet ---> new value is not added -- if previous value is available.
    * To insert in an array -- $addToSet is better.
    
    *{ $addToSet: { <field>: { $each: [ <value1>, <value2> ... ] } } }

    *{ $push: { <field1>: <value1>, ... } }
    
    $each is used so that array values don't get inserted as an array.-- inserted as individual data.
     

        
*/