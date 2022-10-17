# angular-donut-chart   

### Source: Building Reusable Angular Components Using Angular CLI - Ambli, Shreeharsh  

## Built With   
* [TypeScript](https://www.typescriptlang.org/docs/// "TypeScript documentation")  
* [Angular](https://angular.io/docs// "Angular Documentation")  
* [Google Charts](https://developers.google.com/chart/interactive/docs// "Google Charts documentation")  

## Getting Started  
### Prerequisites
* [Node.js](https://nodejs.org/en/ "Download Node.js 16.15.0 LTS")  

### Project Setup (VS Code)
* Angular
  * Install Angular CLI globally (one time setup)  
  ```bash
  npm install -g @angular/cli
  ng version
  ```   
  * Open project in vsCode (command run in the project directory)  
  ```bash
  code .
  ```   
  * Create Angular App  
  ```bash
  ng new project-name
  ```    
  * Run the project and open http://localhost:4200   
  ```bash
  ng serve
  ```   

  * Create new Angular Component  
  ```bash 
  ng generate component componentName
  
  --dry-run 
  --skip-tests
  --module=app
  --skip-import 
  ```
  * Create new Angular Service  
  ```bash
  ng generate service service-name
  ```
  * Lazy loading  
  ```bash
  ng generate module name --route name --module app.module
  ```  
 

### Topics practiced to get things done  
  

### Error messages for future reference  
✖ Error: Invalid Character (typing ng --version in the terminal)   
Solution: Use bash (workaround)   
✖ Error: Property 'name' has no initializer and is not definitely assigned in the constructor.      
Solution: Add ```"strictPropertyInitialization": false``` in the compiler options of the tsconfig.json or a default value to the property.    
✖ Error: Can't bind to 'ngModel' since it isn't a known property of 'input'.      
Solution: Add FormsModule and ReactiveFormsModule to the imports array in app.module.ts.  
✖ Error: Angular Material installation: No terminal detected. '--skip-confirmation' can be used to bypass installation confirmation. Ensure package name is correct prior to '--skip-confirmation' option usage.  
Solution: Type the command: npm install --save @angular/material @angular/cdk @angular/animations and then ng add @angular/material with git bash.    
