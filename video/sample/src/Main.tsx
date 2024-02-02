import { useCurrentFrame, useVideoConfig } from "remotion";
import { z } from "zod";
import { Stargazer } from "./cache";
import { Content } from "./Content";
import { getProgress } from "./utils";

export const mainSchema = z.object({
  repoOrg: z.string(),
  repoName: z.string(),
  starCount: z.number().step(1),
  duration: z.number().step(1),
  repoImage: z.string(),
  music1Notification: z.string().optional(),
  music2: z.string().optional(),
});

type SchemaProps = z.infer<typeof mainSchema>;

export type MainProps = SchemaProps & {
  readonly stargazers: Stargazer[] | null;
};

export default function Main({
  repoOrg,
  repoName,
  stargazers,
  repoImage,
  music1Notification,
  music2,
}: MainProps) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const extraEnding = fps;

  if (!stargazers) {
    return null;
  }

  const progress = getProgress(
    frame,
    durationInFrames - extraEnding,
    stargazers.length,
    fps
  );

  return (
    <Content
      stargazers={stargazers}
      repoOrg={repoOrg}
      repoName={repoName}
      progress={progress}
      repoImage={repoImage}
      music1Notification={music1Notification}
      music2={music2}
    />
  );
}
