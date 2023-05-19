/**
 * **** Algolia search api
 
    $group--> finds unique values

    $match: { "scores.type": "exam" }
    $group:{_id:"$name"}
    $group:{_id:"$scores.score"}
    $group:{$sort:{name:-1}}
        
    
 */