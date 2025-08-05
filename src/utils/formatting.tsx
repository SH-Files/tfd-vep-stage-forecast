const zeroPad = (n: number) => (n < 10 ? `0${n}` : `${n}`);

export const formatCountDown = (ms: number) => {
  const totalSeconds = Math.abs(Math.floor(ms / 1000));

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${zeroPad(days)}:${zeroPad(hours)}:${zeroPad(minutes)}:${zeroPad(
    seconds
  )}`;
};

export const formatDate = (date: Date) => {
  const time = date
    .toLocaleString("en-US", { hour: "numeric", hour12: true })
    .split(" ");

  const hours = zeroPad(parseInt(time[0]));
  const timeSuffix = time[1];

  return `${date.getFullYear()}-${zeroPad(date.getMonth())}-${zeroPad(
    date.getDate()
  )} ${hours}:${zeroPad(date.getMinutes())}:${zeroPad(
    date.getSeconds()
  )} ${timeSuffix}`;
};
