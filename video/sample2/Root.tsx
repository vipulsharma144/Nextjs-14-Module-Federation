import { Composition } from "remotion";
import { Component } from "./Component";
import React from "react";
import "./style.css";

type TProps = {
  inputProps?: typeof Component.defaultProps;
};

export const RemotionRoot: React.FC = (props: TProps) => {
  const { inputProps } = props;
  return (
    <>
      <Composition
        component={Component}
        durationInFrames={300}
        width={1080}
        height={1080}
        fps={30}
        id="test-render"
        defaultProps={{
          ...inputProps,
          text: "world",
          color: "red",
          image: "https://picsum.photos/600/300",
        }}
      />
      {/* Additional compositions can be rendered */}
    </>
  );
};
