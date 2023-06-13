import { KeyMap, updateKeyMap } from "../src";

describe('updateKeyMap', () => {
    test('should update keys in a nested object based on the key mapping', () => {
      const obj = {
        age: 25,
        address: {
          city: 'New York',
          country: 'USA',
          name: 'jaja',
          'address.line1': '123 Main St'
        },
        firstName: 'John'
      };
  
      const keyMap: KeyMap = [
        ['address.city', 'address.cityName'],
        ['address.name', 'address.firstName'],
        ['address.address.line1', 'address.line1']
      ];
  
      const result = updateKeyMap(obj, keyMap);
  
      expect(result).toEqual({
        age: 25,
        address: {
          cityName: 'New York',
          country: 'USA',
          firstName: 'jaja',
          line1: '123 Main St'
        },
        firstName: 'John'
      });
    });
  
    test('should not update keys in a nested object if not specified in the key mapping', () => {
      const obj = {
        age: 25,
        address: {
          city: 'New York',
          country: 'USA',
          name: 'jaja',
          'address.line1': '123 Main St'
        },
        firstName: 'John'
      };
  
      const keyMap: KeyMap = [
        ['address.city', 'address.cityName'],
        ['address.name', 'address.firstName']
      ];
  
      const result = updateKeyMap(obj, keyMap);
  
      expect(result).toEqual(obj);
    });
  
     test('should handle an array as the key mapping', () => {
  const obj = {
    age: 25,
    address: {
      city: 'New York',
      country: 'USA',
      name: 'jaja',
      'address.line1': '123 Main St'
    },
    firstName: 'John'
  };

  const keyMap: KeyMap = [
    ['address.city', 'address.cityName'],
    ['address.name', 'address.firstName'],
    ['address.address.line1', 'address.line1']
  ];

  const result = updateKeyMap(obj, keyMap);

  expect(result).toEqual({
    age: 25,
    address: {
      cityName: 'New York',
      country: 'USA',
      firstName: 'jaja',
      line1: '123 Main St'
    },
    firstName: 'John'
  });
});

  });
  