# Type Test

Anyone can test their typing skills by undergoing this simple test.

## Deployed Project:
[Start your Test!](http://anishashruti.github.io/Type-Test/)

## Things I learned from this Project :relaxed:

_**Learning outcomes:**_

- **React Basics**:
  - Components
  - Data Flow
  - JSX
  - State
  - Props
- **Simple Animations**
- **Class Based Component**
- **Functional Components**
- **React Hooks**
- **Usage of API**
- **Deployment of React App**

## Images
![Image 1](https://github.com/anishashruti/Type-Test/blob/main/images/TypeTest1.PNG)
![Image 2](https://github.com/anishashruti/Type-Test/blob/main/images/TypeTest2.PNG)
![Image 3](https://github.com/anishashruti/Type-Test/blob/main/images/TypeTest3.PNG)

## Algorithm

1. **Handle the underflow case** 
    - all characters should be shown as not-attempted.
2. **Handle the overflow case** 
    - early exit(A case when the user completes the test before the given time)
3. **Handle the backspace case**
    - Mark the [index+1] element as notAttempted(irrespective of whether the index is less than zero)
    - But, don't forget to check for the overflow here(index +1 -> out of bound, when index === length-1)
4. **Update the status in test info**
    1. Find out the last character in the inputValue and it's index
    2. Check if the character at same index in testInfo (state) matches
    3. Yes -> Correct
        No  -> Incorrect (Mistake++)
5. **Irrespective of the case, characters, words and wpm can be updated**
        
*Enjoyed Making this project and learned a lot of new stuffs *	:sparkling_heart:
