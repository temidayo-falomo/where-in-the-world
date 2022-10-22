import React from "react";
import { StyledLoading } from "./Loading.styled";

function Loading(props: any) {
  return (
    <StyledLoading theme={props.theme}>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
}

export default Loading;
