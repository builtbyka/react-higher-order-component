This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Higher Order Components

Solidifying understanding of higher order components in React. 

Using ideas surrounding functional programming and composition. 

-First stage - displaying a list and filtered lists. Noting similarities in function. Asking for composition, display is only different to filtered via filtering function. 

-Second stage - Filtered list becomes a HO component. Rename display to show its focus is for rendering. In React this is a pattern, not officially part of API. It's the ability to enhance a prexisting function. 

-Third  / fourth stage - Create even further flexibility but choosing filter and then it's criteria

-Fifth stage - Just for fun. Push various functions our to external files. Add a second list to test flexibility. Use new css Grid functionality for 2 column layout (only certain browsers)

Note - these can be optimised further with a truly abstracted higher order function that waits for a function as an argument knowing that's how it will enhancce the initial simpler component. Meaning you don't just have to enhance with filter, it can be any enhancement to your initial component you choose. 