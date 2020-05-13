# React-CompoundComponent

Starting from a classic component refactor it into a compound component using both Children and clone and Context-api techniques

Starting version avaiable in master branch or codesandbox at https://codesandbox.io/s/ykxo1n7nwx

Children and clone: https://codesandbox.io/s/compound-components-the-basics-14l2v

Context-Api: https://codesandbox.io/s/compound-components-context-api-5y2t1

the code is also avaible in this repository, the master has the starting point, in the branches the final refactored code

Children and Clone summarized technique:

- use static keyword to create sub-component (not mandatory, you can skip this one)
- using React.Children.map loop through the direct children of the component (the subcomponent NEED to be DIRECT children of the compound component)
- if needed to identify specific children you can use the displayName property
- use React.cloneElement to pass a shallow copy of the children, you can also insert new props to each children

Context-Api summarized:

- The parent component has some state and methods and share it with its children through context-api
- children can access parent state and methods and use it to communicate with it

good articles for this topic:
https://www.jakewiesler.com/blog/compound-component-basics/
https://www.jakewiesler.com/blog/compound-components-and-the-context-api/
https://hackernoon.com/3-easy-steps-to-writing-compound-components-5d4647b7bb7
https://blog.logrocket.com/guide-to-react-compound-components-9c4b3eb482e9/
https://blog.bitsrc.io/understanding-compound-components-in-react-23c4b84535b5
https://medium.com/@Dane_s/react-js-compound-components-a6e54b5c9992
https://egghead.io/lessons/react-course-overview-advanced-react-component-patterns
https://www.youtube.com/watch?v=hEGg-3pIHlE

official Doc context-api: https://reactjs.org/docs/context.html#api
