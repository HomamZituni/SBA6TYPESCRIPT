Reflection: 

For this project, I implemented several TypeScript features and utilized object-oriented programming principles. 
I created a Product class as a template for creating product objects, with a constructor to initialize each object with properties like price and category.
I used methods like displayDetails() that were defined inside the class to operate on the object data. This approach allows the methods to be reusable and 
encapsulated within the class. I used separate utility functions to improve reusability and maintainability. The project required async operations to 
fetch product data from an external API. I used async/wait to handle these operations and mapped it to the Product class. Errors were managed using 
try/catch blocks and custom error handling utilities.
These two features allowed me to manage asynchronous operations and error management.  
The biggest challenges I faced were figuring out how to write the exact syntax, working 
through the various TypeScript errors and writing the async functions for main.ts and apiService.ts. 
These issues were overcome by reading the errors, looking up examples online to refer to and reading the classroom documentation, 
re-writing the interfaces on the apiService.ts file and using type assertions to get the API function to run in the service file. 
Getting the correct syntax took some planning and understanding how to break down the logic require for each module to be able to run the API. 
There was also issues with the package.json and tsconfig files both of which require extensive editing to be able to get the code to be able to properly compile and run. 
