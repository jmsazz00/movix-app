export default function calculateRating(loved: number | null): number {
  if (loved === null) {
    return 2;
  } else if (loved < 2) {
    return 2.5;
  } else if (loved < 3) {
    return 3;
  } else if (loved < 5) {
    return 3.5;
  } else if (loved < 7) {
    return 4;
  } else if (loved < 9) {
    return 4.5;
  } else {
    return 5;
  }
}
