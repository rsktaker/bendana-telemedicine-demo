"use client";

type Props = { room: string; name: string };

export function JitsiRoom({ room, name }: Props) {
  const config = {
    startWithAudioMuted: false,
    startWithVideoMuted: false,
    prejoinPageEnabled: false,
    disableDeepLinking: true,
  };
  const iface = {
    SHOW_JITSI_WATERMARK: false,
    SHOW_WATERMARK_FOR_GUESTS: false,
    DEFAULT_BACKGROUND: "#0c1b2a",
    TOOLBAR_BUTTONS: [
      "microphone",
      "camera",
      "desktop",
      "fullscreen",
      "hangup",
      "chat",
      "settings",
      "raisehand",
      "tileview",
    ],
  };
  const params = new URLSearchParams({
    "userInfo.displayName": name,
    config: JSON.stringify(config),
    interfaceConfig: JSON.stringify(iface),
  });
  const src = `https://meet.jit.si/${encodeURIComponent(room)}#${params.toString()}`;

  return (
    <iframe
      title="Videollamada"
      className="room-frame"
      src={src}
      allow="camera; microphone; fullscreen; display-capture; autoplay"
    />
  );
}
