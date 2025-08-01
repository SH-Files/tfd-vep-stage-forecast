const zeroPad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const formatCountDown = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);

  const days = Math.floor(Math.abs(totalSeconds) / 86400); // 86400 = 24 * 60 * 60
  const hours = Math.floor((Math.abs(totalSeconds) % 86400) / 3600);
  const minutes = Math.floor((Math.abs(totalSeconds) % 3600) / 60);
  const seconds = Math.abs(totalSeconds) % 60;

  return `${zeroPad(days)}:${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(
    seconds
  )}`;
};

export const formatDateTime = (date: Date) => {
  return `${date.getFullYear()}-${zeroPad(date.getMonth())}-${zeroPad(
    date.getDate()
  )} ${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}:${zeroPad(
    date.getSeconds()
  )}`;
};
