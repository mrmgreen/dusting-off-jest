export const RANDOM_ALAN_QUOTE = "RANDOM_ALAN_QUOTE";

export function getRandomAlanQuote() {
  return {
    type: RANDOM_ALAN_QUOTE,
    getPosts: true,
  }
}
