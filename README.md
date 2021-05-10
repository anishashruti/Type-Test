#Type Test

Anyone can test their typing skills by undergoing this simple test.

##Deployed Project:
http://anishashruti.github.io/Type-Test/

##Things I learned from this Project :relaxed:

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
- **React Hools**
- **Deployment of React App**

##Images
![Image 1](https://anishashruti.github.com/Type-Test/images/TypeTest1.png)
![Image 2](https://anishashruti.github.com/Type-Test/images/TypeTest2.png)
![Image 3](https://anishashruti.github.com/Type-Test/images/TypeTest3.png)

##Algorithm

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