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

        
*/