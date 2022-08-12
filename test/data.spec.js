import { anotherExample, filterData } from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Should return an objetc inside an array with property gender and Male value', () => {
    const data = [
      {gender: 'Female'},
      {gender: 'Male'},
      {gender: 'Genderless'}
    ];
    expect(filterData(data, element => element.gender === 'Male')).toEqual([{gender: 'Male'}]);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
