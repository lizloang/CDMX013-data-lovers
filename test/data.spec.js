import { anotherExample, filterData } from '../src/data.js';


describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('Should return an array of objects with gender property and Male value', () => {
    const data = [
      {gender: 'Female'},
      {gender: 'Male'},
      {gender: 'Genderless'}
    ];
    expect(filterData(data, element => element.gender === 'Male')).toEqual([{gender: 'Male'}]);
  });

  it('Should return an array of objects with status property and Alive value', () => {
    const data = [
      {status: 'Alive'},
      {status: 'Dead'},
      {status: 'unknown'}
    ];
    expect(filterData(data, element => element.status === 'Alive')).toEqual([{status: 'Alive'}]);
  });
  
  it('Should return an array of objects with specie property and Alien value', () => {
    const data = [
      {specie: 'Animal'},
      {specie: 'Humanoid'},
      {specie: 'Alien'}
    ];
    expect(filterData(data, element => element.specie === 'Alien')).toEqual([{specie: 'Alien'}]);
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
