import * as React from "react";

const Context = React.createContext({
  arr: [],
});
Context.displayName = "Context";
export default Context;
