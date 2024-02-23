export function insertSpaceEveryThirdFromEnd(number: number): string | undefined {
  const str = number.toString();
  return str
    .split("") // Convert string to array of characters
    .reverse() // Reverse the array to start spacing from the end
    .join("") // Join back into a string
    .match(/.{1,3}/g) // Match groups of up to 3 characters
    ?.join(" ") // Join groups with a space
    .split("") // Split the string back into an array
    .reverse() // Reverse the array to restore original order
    .join(""); // Join back into a string
}
