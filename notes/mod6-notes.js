/*
    #1
    ----
        Interface Schema Model Database Query


    #2  Install express , typescript, mongoose , ts-node-dev
    --------------------------------------------------------
    i will use my computer as a server
    google-> mongodb download -> MongoDb Community server

    *after installing- add path variable of the bin folder
    -------
    *npm init
    ----installing ts
    npm install typescript --save-dev
    --------install express
    npm install express --save
    -----install mongoose
    npm install mongoose --save
    

    created src folder to have my files. 
    First file -- server.ts.......
    some give it index.ts or app.ts

    ----to run file- we need - ts-node-dev
    npm i ts-node-dev --save-dev

    * in package.json file -> in scripts---add
    "dev": "ts-node-dev --respawn --transpile-only ./src/server.ts",


    #3 How to organize your code alittle more . install and implement types
    --------------------------------------------
    
    
    install @types/  express,cors== dev-dependency 

    #4 -- How To relate Interface and schema
    ----------------------------------------------

    * Interface -> Schema using interface

     
    Step1:Interface
    Step2:Schema
    Step3:Model
    Step4: Database Query
    



    #5 Create Model using Interface , Schema and Insert Data
    -----------------------------------------------------
    *model -->Query on model



    #6 How to organize your structure , MVC vs Modular
    -----------------------------------------------------

    // Pattern MVC , Modular - we do modular

    src->(folder) app --> everything of files then app->(folder) modules


    #7: More Refactoring, Test api to insert data
--------------------------------------------------------


    #8: Create and Test Post Route , Refactor Code
------------------------------------------------
    route->controller->service

    to post -> receive data from front-end using req.body in the controller


    #10: What is instance methods ,built custom instance method
    ----------------------------------------------------------------
    *instance methods-->instance er methods
    *class -> instance + (instance er sathe methods thakle seita instance methods)


    #11: What is statics ,built custom static method
    ------------------------------------------------------

    class->Attached->Method->Directly call using Class
    //user= new User
    //user.   -> instance methods
    //User.getAdminUsers() // class dia jokhon sorasori method access kori




    


*/