interface Props {
  badge?: number;
  autopause?: number;
  quality_selector?: number;
  player_id?: number;
  app_id?: number;
  video_id: number;
  title?: string;
}

export function VideoPlayer({
  badge = 0,
  autopause = 0,
  quality_selector = 1,
  player_id = 0,
  app_id = 1,
  video_id,
  title,
}: Props) {
  const baseUrl = `https://player.vimeo.com/video/${video_id}?badge=${badge}&amp;autopause=${autopause}&amp;quality_selector=${quality_selector}&amp;player_id=${player_id}&amp;app_id=${app_id}`;

  const url = baseUrl;

  return (
    <iframe
      src={url}
      allow="autoplay; fullscreen; picture-in-picture"
      className="w-full h-full absolute top-0 left-0"
      title={title}
    />
  );
}
