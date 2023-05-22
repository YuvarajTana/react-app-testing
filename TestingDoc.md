## All about Testing React applications 

## Testing

  **What is Testing**
    - Testing is the process of evaluating a system / software to find whether it is working as per the requirements or not.
  
  **Why do test**
    - It tests/checks a system in order to identify any gaps, errors, or missing requirements in contrary to the actual requirements.

## What and Why TDD(Test Driven Development)
  - It is a software development practice that focuses on creating unit test cases before developing the actual code. It is an iterative approach combining programming, unit test creation, and refactoring.

  - In TDD, developers create small test cases for every feature based on their initial understanding. The primary intention of this technique is to modify or write new code only if the tests fail. This prevents duplication of test scripts.

**Benefits of TDD**
  - It helps developers better analyze and understand client requirements and request clarity when not adequately defined.

  - Adding and testing new functionalities become much easier in the latter stages of development.

  - Test coverage under TDD is much higher compared to conventional development models. The TDD focuses on creating tests for each functionality right from the beginning.

  - It enhances the productivity of the developer and leads to the development of a codebase that is flexible and easy to maintain.


## Testing with React Testing Library and Jest 

 
  **React Testing Library**
    What is it ? 
      -  The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. 
      
      Its primary guiding principle is:
        - The more your tests resemble the way your software is used, the more confidence they can give you.

      [For more, click here](https://testing-library.com/docs/react-testing-library/intro)

    It Helps With:

      1. Rendering components into Virtual DOM
      2. Searching Virtual DOM
      3. Interacting with Virtual DOM
  
  However, its needs a test runner
    - Find tests, run them, make assertions

    Jest, Mocha, and Jasmine

  Jest is recommended by Testing Library and also comes with create react App.
  
  **Jest**
    
    



### We should follow test priority, why because  we can't test everything 
  1. Critical features / Must have features 
  2. Edge cases in above features 
  3. Things which are easy to break

### Basic component testing:
  - User interactions
  - rendering and conditional rendering 
  - Hooks
  - Utility functions

-  By default, Jest will look for files with the .test.js suffix and files with the .js suffix in __tests__ folders

- Your test suite must contain at least one test.

- The expect function is used every time you want to verify a certain outcome. Most expect functions are paired with a matcher function to assert something about a particular value


### Arrange Act Assert
  - Arrange/Act/Assert (AAA) is a pattern for arranging and formatting code in Unit Test methods.

  It is a best practice to author your tests in more natural and convenient way. The idea is to develop a unit test by following these 3 simple steps:

    Arrange – setup the testing objects and prepare the prerequisites for your test.
    Act – perform the actual work of the test.
    Assert – verify the result.


