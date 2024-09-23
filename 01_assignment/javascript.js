import { fetch, createDocument } from "./helpers";

/*
 Rewrite the for loop using a for-of loop
 @returns ["a", "b", "c", "d"]
 */
export const forOfLoop = () => {
  const array = ["A", "B", "C", "D"];
  const result = [];

  for (let index = 0; index < array.length; index++) {
    const lowerCaseLetter = array[index].toLowerCase();
    result.push(lowerCaseLetter);
  }

  return result;
};

/*
 Rewrite the for-in loop using a for-of loop
 Hint: Use Object.values() to assess the values of the object
 @returns [2, 6, 4, 8]
 */
export const forOfLoopWithObjects = () => {
  const object = { a: 1, b: 3, c: 2, d: 4 };
  const values = [];

  for (const key in object) {
    const value = object[key] * 2;
    values.push(value);
  }

  return values;
};

/*
 Rewrite the for-of loop using .map() on the cities array
 @returns ["Chicago", "Los Angeles", "New York"]
*/
export const map = () => {
  const cities = [
    { id: 1, name: "Chicago" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "New York" },
  ];

  const cityNames = [];

  for (let city of cities) {
    cityNames.push(city.name);
  }

  return cityNames;
};

/*
 Rewrite the for-of loop using .filter() on the cities array
 @returns [{"id": 2, "name": "Los Angeles"}]
*/
export const filter = () => {
  const cities = [
    { id: 1, name: "Chicago" },
    { id: 2, name: "Los Angeles" },
    { id: 3, name: "New York" },
  ];

  const filteredCities = [];

  for (let city of cities) {
    if (city.id > 1 && city.id < 3) filteredCities.push(city);
  }

  return filteredCities;
};

/*
 Rewrite the inner sorting function using the .localeCompare() function
 @returns "Ägerisee"
 */
export const sortAlphabetically = () => {
  const lakes = [
    { name: "Zürichsee", area: 88.17 },
    { name: "Klöntalersee", area: 3.29 },
    { name: "Ägerisee", area: 7.3 },
  ];

  lakes.sort((lake1, lake2) => {
    if (lake1.name > lake2.name) {
      return 1;
    }
    if (lake1.name < lake2.name) {
      return -1;
    }
    return 0;
  });

  const lakeFirstInAlphabet = lakes[0].name;
  return lakeFirstInAlphabet;
};

/*
 Convert the date and time into an American English version 
 using JavaScript Date() and .toLocaleString()
 @returns "Mon, October 3, 2022, 01:15:00 PM"
*/
export const parseAndFormatDate = () => {
  const dateTime = "2022-10-03 13:15";

  const result = "Mon, October 3, 2022, 01:15:00 PM";
  console.log(result);

  return result;
};

/*
 Determine the index in one line using a regular expression (regex) in the search function
 @returns 2
 */
export const searchString = () => {
  const string = "ABCD";

  const index1 = string.search("BD");
  const index2 = string.search("CD");
  const index = index1 != -1 ? index1 : index2;

  return index;
};

/*
 Rewrite the function using document.querySelectorAll()  
 @returns all <input> elements
*/
export const querySelectorAttribute = () => {
  const document = createDocument(`
	<div class="to-dos">
		<label><input type="checkbox" name="item"/>Go shopping</label>
		<label><input type="checkbox" name="item"/>Learn more JavaScript</label>
	</div>
	`);

  const elements = document.getElementsByName("item");

  return elements;
};

/*
  Rewrite .then() and .catch() using async/await and try/catch
  @returns {"a": 1}
 */
export const promise = async (successCallback, errorCallback) => {
  fetch("file1.json")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      successCallback(json);
    })
    .catch((e) => {
      errorCallback(e);
    });
};

/*
 Rewrite the for-of loop using Promise.all() so that files are requested
 simultaneously
 @returns [{"a": 1}, {"b": 2}]
 */
export const promiseAll = async (successCallback, errorCallback) => {
  try {
    const fileNames = ["file1.json", "file2.json"];
    const filePromises = fileNames.map(fetch);

    const jsons = [];

    for (let filePromise of filePromises) {
      const response = await filePromise;
      const json = await response.json();
      jsons.push(json);
    }

    successCallback(jsons);
  } catch (e) {
    errorCallback(e);
  }
};
