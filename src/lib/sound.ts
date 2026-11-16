let audio: AudioContext | null = null;

export function playTick(enabled: boolean) {
  if (!enabled || typeof window === "undefined") return;
  const Ctx = window.AudioContext;
  if (!audio) audio = new Ctx();
  if (audio.state === "suspended") void audio.resume();

  const now = audio.currentTime;
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(660, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.04, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
  oscillator.connect(gain);
  gain.connect(audio.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.1);
}
