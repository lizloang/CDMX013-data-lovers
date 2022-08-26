import { filterData, sortData, searchInput, computeStats } from "../src/data.js";

describe("filterData", () => {
  it("is a function", () => {
    expect(typeof filterData).toBe("function");
  });

  it("Should return an array of objects with gender property and Male value", () => {
    const data = [
      { gender: "Female" },
      { gender: "Male" },
      { gender: "Genderless" },
    ];
    expect(filterData(data, (element) => element.gender === "Male")).toEqual([
      { gender: "Male" },
    ]);
  });

  it("Should return an array of objects with status property and Alive value", () => {
    const data = [
      { status: "Alive" },
      { status: "Dead" },
      { status: "unknown" },
    ];
    expect(filterData(data, (element) => element.status === "Alive")).toEqual([
      { status: "Alive" },
    ]);
  });

  it("Should return an array of objects with specie property and Alien value", () => {
    const data = [
      { specie: "Animal" },
      { specie: "Humanoid" },
      { specie: "Alien" },
    ];
    expect(filterData(data, (element) => element.specie === "Alien")).toEqual([
      { specie: "Alien" },
    ]);
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("return data ascendant order ", () => {
    const inputData = [
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
      { name: "Stewart Ackerley" },
    ];
    const outputData = [
      { name: "Morty Smith" },
      { name: "Rick Sanchez" },
      { name: "Stewart Ackerley" },
    ];
    expect(sortData(inputData, "a_z")).toEqual(outputData);
  });

  it("return data falling order ", () => {
    const inputData = [
      { name: "Morty Smith" },
      { name: "Rick Sanchez" },
      { name: "Stewart Ackerley" },
    ];
    const outputData = [
      { name: "Stewart Ackerley" },
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
    ];
    expect(sortData(inputData, "z_a")).toEqual(outputData);
  });

  it("return 0 to reapet data ", () => {
    const inputData = [
      { name: "Stewart Ackerley" },
      { name: "Rick Sanchez" },
      { name: "Stewart Ackerley" },
    ];
    const outputData = [
      { name: "Rick Sanchez" },
      { name: "Stewart Ackerley" },
      { name: "Stewart Ackerley" },
    ];
    expect(sortData(inputData, "a_z")).toEqual(outputData);
  });
});

describe("searchInput", () => {
  it("is a function", () => {
    expect(typeof searchInput).toBe("function");
  });

  it("return search characters by full name ", () => {
    const inputData = [
      { name: "Rick Sanchez" },
      { name: "Morty Smith" },
      { name: "Stewart Ackerley" },
    ];
    const outputData = [{ name: "Morty Smith" }];
    expect(searchInput(inputData, "Morty Smith")).toEqual(outputData);
  });

  it("return search characters by name ", () => {
    const inputData = [
      { name: "Adjudicator Rick" },
      { name: "Morty Smith" },
      { name: "Rick Sanchez" },
    ];
    const outputData = [{ name: "Adjudicator Rick" }, { name: "Rick Sanchez" }];
    expect(searchInput(inputData, "rick")).toEqual(outputData);
  });

  it("return search characters by some letters ", () => {
    const inputData = [
      { name: "Adjudicator Rick" },
      { name: "Morty Smith" },
      { name: "Rick Sanchez" },
    ];
    const outputData = [{ name: "Adjudicator Rick" }, { name: "Rick Sanchez" }];
    expect(searchInput(inputData, "ric")).toEqual(outputData);
  });

  it("return search characters by multiple same name ", () => {
    const inputData = [
      { name: "Adjudicator Rick" },
      { name: "Morty Smith" },
      { name: "Morty Smith" },
    ];
    const outputData = [{ name: "Morty Smith" }, { name: "Morty Smith" }];
    expect(searchInput(inputData, "Morty Smith")).toEqual(outputData);
  });

  it("return search characters by all capital letters ", () => {
    const inputData = [
      { name: "Adjudicator Rick" },
      { name: "Morty Smith" },
      { name: "Rick Sanchez" },
    ];
    const outputData = [{ name: "Morty Smith" }];
    expect(searchInput(inputData, "MORTY SMITH")).toEqual(outputData);
  });

  it("return search characters by char ", () => {
    const inputData = [
      { name: "Stewart Ackerley" },
      { name: "Beth Smith" },
      { name: "Albert Einstein" },
    ];
    const outputData = [{ name: "Beth Smith" }, { name: "Albert Einstein" }];
    expect(searchInput(inputData, "b")).toEqual(outputData);
  });

  it("return not match search characters", () => {
    const inputData = [
      { name: "Stewart Ackerley" },
      { name: "Beth Smith" },
      { name: "Albert Einstein" },
    ];
    expect(searchInput(inputData, "rosa")).toEqual([]);
  });
});

describe("computeStats", () => {
  it("is a function", () => {
    expect(typeof computeStats).toBe("function");
  });

  it("return a dictionary with property of all status and the sum of each one ", () => {
    const data = [
      { status: "Alive" },
      { status: "unknown" },
      { status: "Dead" },
      { status: "Alive" },
      { status: "unknown" },
      { status: "Alive" }
    ];
    
    const outputData =  {Alive: 3, Dead: 1 ,unknown: 2 };
    expect(computeStats(data,"status")).toEqual(outputData);
  });
  
  it("return a dictionary with property of all gender and the sum of each one ", () => {
    const data = [
      { gender: "Female" },
      { gender: "Male" },
      { gender: "Genderless" },
      { gender: "Female" }
    ];
    
    const outputData =  {Female: 2, Male: 1 ,Genderless: 1 };
    expect(computeStats(data,"gender")).toEqual(outputData);
  });

  it("return a dictionary with property of all species and the sum of each one ", () => {
    const data = [
      { species: "Animal" },
      { species: "Humanoid" },
      { species: "Alien" },
      { species: "Humanoid" },
      { species: "Alien" },
      { species: "Animal" },
      { species: "Humanoid" }
    ];
    
    const outputData =  {Animal: 2, Humanoid: 3 ,Alien: 2 };
    expect(computeStats(data,"species")).toEqual(outputData);
  });
});