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


### Testing with React Testing Library and Jest 

  -  The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. 
      
  - Its primary guiding principle is : The more your tests resemble the way your software is used, the more confidence they can give you.

  [For more, click here](https://testing-library.com/docs/react-testing-library/intro)

  It Helps With:
    1. Rendering components into Virtual DOM
    2. Searching Virtual DOM
    3. Interacting with Virtual DOM
  
  However, its needs a test runner
    - Find tests, run them, make assertions
    Jest, Mocha, and Jasmine

  Jest is recommended by Testing Library and also comes with create react App.
  
### We can not test everything, so we should follow test priority,  
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


### Arrange Act Assert - Pattern 
  - Arrange/Act/Assert (AAA) is a pattern for arranging and formatting code in Unit Test methods.

  Arrange: we prepare the testing environment, all of the arguments for the function being tested and its dependencies;

  Act: we call the tested function;

  Assert: we compare function results with expected results, if they are equal the function worked correctly.


###  Explaining Pattern with Example
  ```JavaScript
    // App.js 

    <div className="App">
      <p className='WelcomeText'>Hello, Welcome to testing KT session</p>
    </div>
  ```

  ```JavaScript
    // App.test.js
    // Explain details what we want to test:
    test('Loads and displays ', () => {

      // Arrange: prepare the environment ,render the component.
      render(<App />);
      
      // Act: Try to find element / anything expected by selecting
      const paragraphElement = screen.getByText(/Welcome to testing/i);

      
      // Assert: check that expected element and test in the document.
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement.textContent).toEqual('Hello, Welcome to testing KT session');
    });    
  ```

Links: 
 
1. React Testing Library - https://testing-library.com/docs/react-testing-library/intro
2. Jest DOM - https://testing-library.com/docs/ecosystem-jest-dom/
3. Mocking Server - https://github.com/mswjs/msw