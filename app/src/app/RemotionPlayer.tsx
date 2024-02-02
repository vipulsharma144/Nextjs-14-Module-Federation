import { Player } from "@remotion/player";

type TProps = {
  component: any;
  inputProps: { [key: string]: string | number | {} } | any;
};

function RemotionPlayer(props: TProps) {
  const { component, inputProps } = props;

  return (
    <Player
      className=" object-contain"
      component={component}
      durationInFrames={150}
      compositionWidth={400}
      compositionHeight={200}
      fps={30}
      controls
      // autoPlay
      style={{
        width: "100%",
      }}
      inputProps={{ ...inputProps }}
      loop
    />
  );
}

export default RemotionPlayer;
