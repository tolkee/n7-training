export default function(array: any[]) {
  console.log("shuffle");
  return array.sort(() => Math.floor(Math.random() * array.length));
}
