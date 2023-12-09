import React from "react";

export default function App(){
  const[messages, setMessages] = React.useState(["a", "b"])


  return(
    <div>
      messages.length === 0 ?
      <h1>You're all caught up!</h1>
      <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
    </div>
  )
}

/*
* What is conditional rendering?
When we want to only sometimes display something on the page based on
the condition of some sort

When would we use &&?
When you want to either display something or NOT display it

When would you use a ternary?
When you need to decide which thing among 2 options to display

What if you need to decide between  > 2 options on what to display?
Use an if... else if... else condition or a switch statement
 */