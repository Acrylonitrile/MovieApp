import { options } from "./Constants";

async function FetchData(url: string) {
  let data = await (await fetch(url, options)).json();
  //console.log(data);
  return data;
}

export default FetchData;
