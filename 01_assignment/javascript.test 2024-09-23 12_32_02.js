import {
  forOfLoop,
  forOfLoopWithObjects,
  map,
  filter,
  sortAlphabetically,
  searchString,
  parseAndFormatDate,
  querySelectorAttribute,
  promise,
  promiseAll,
} from "./javascript";
import { describe, it, expect } from "vitest";

describe("JavaScript Functions", () => {
  it("forOfLoop", () => {
    expect(forOfLoop()).toStrictEqual(["a", "b", "c", "d"]);
    expect(forOfLoop.toString()).toMatch(/ of /);
  });

  it("forOfLoopWithObjects", () => {
    expect(forOfLoopWithObjects()).toStrictEqual([2, 6, 4, 8]);
    expect(forOfLoopWithObjects.toString()).toMatch(/ of /);
  });

  it("map", () => {
    expect(map()).toStrictEqual(["Chicago", "Los Angeles", "New York"]);
    expect(map.toString()).toMatch(/\.map\(/);
  });

  it("filter", () => {
    expect(filter()).toStrictEqual([{ id: 2, name: "Los Angeles" }]);
    expect(filter.toString()).toMatch(/\.filter\(/);
  });

  it("sortAlphabetically", () => {
    expect(sortAlphabetically()).toBe("Ägerisee");
    expect(sortAlphabetically.toString()).toMatch(/\.localeCompare\(/);
  });

  it("parseAndFormatDate", () => {
    expect(parseAndFormatDate()).toStrictEqual(
      "Mon, October 3, 2022, 01:15:00 PM"
    );
    expect(parseAndFormatDate.toString()).toMatch(/.toLocaleString\(/);
  });

  it("searchString", () => {
    expect(searchString()).toBe(2);
    expect(searchString.toString()).toMatch(/\/.*\//);
  });

  it("querySelectorAttribute", () => {
    const elements = Array.from(querySelectorAttribute());
    expect(elements.map((el) => el.outerHTML)).toStrictEqual([
      `<input type="checkbox" name="item">`,
      `<input type="checkbox" name="item">`,
    ]);
    expect(querySelectorAttribute.toString()).toMatch(/.querySelectorAll\(/);
  });

  it("promise", async () => {
    const wrapper = new Promise(promise);
    const result = await wrapper;

    expect(result).toStrictEqual({ a: 1 });
    expect(promise.toString()).toMatch(/await /);
    expect(promise.toString()).toMatch(/try /);
  });

  it("promiseAll", async () => {
    const wrapper = new Promise(promiseAll);
    const result = await wrapper;

    expect(result).toStrictEqual([{ a: 1 }, { b: 2 }]);
    expect(promiseAll.toString()).toMatch(/Promise\.all\(/);
  });
});
