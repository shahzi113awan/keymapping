export type KeyMap = [string, string][]; // Array of ["oldKey", "newKey"] mappings

export function updateKeyMap<T>(
  obj: Record<string, unknown>,
  map: Map<string, string> | KeyMap
): T {
  const updatedObj = { ...obj };

  function updateKeyRecursively(
    target: Record<string, unknown>,
    keyMap: KeyMap
  ) {
    for (const [oldKey, newKey] of keyMap) {
      if (oldKey in target) {
        const value = target[oldKey];
        delete target[oldKey];
        target[newKey] = value;
      }
    }
    for (const key in target) {
      const value = target[key];
      if (typeof value === "object" && value !== null) {
        const nestedKeyMap = keyMap
          .filter(([oldKey]) => oldKey.startsWith(key + "."))
          .map(([oldKey, newKey]) => {
            const newKeyWithoutParent = newKey.substring(
              newKey.indexOf(".") + 1
            );
            return [oldKey.substring(key.length + 1), newKeyWithoutParent];
          }) as KeyMap;
        updateKeyRecursively(value as Record<string, unknown>, nestedKeyMap);
      }
    }
  }
  const keyMap: KeyMap =  map as KeyMap
  updateKeyRecursively(updatedObj, keyMap);

  return updatedObj as T;
}

const obj = {
  name: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    name: "jaja",
  },
};

const keyMap: KeyMap = [
  ["name", "firstName"],
  ["address.name", "address.lala"],
  ["address.street", "address.akak"],
];

const updatedObj = updateKeyMap(obj, keyMap);
console.log(updatedObj);
