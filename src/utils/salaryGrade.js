import RegexPattern from "../constants/RegexPattern";

export const formatCurrency = (number, separator = ".") =>
  number?.toString?.().replace(RegexPattern.CurrencyVND, separator);

export const deepClone = (object) => {
  try {
    return JSON.parse(JSON.stringify(object));
  } catch {
    return object;
  }
};

export const getAllKeys = (data) => {
  const keys = [];

  JSON.stringify(data, (key, value) => {
    if (key === "key") {
      keys.push(value);
    }
    return value;
  });

  return keys;
};

export const getNestedObjectByKey = (object, key) => {
  if (!object) return null;
  if (object.key === key) return object;
  if (object.children) return getObjectByKey(object.children, key);

  return null;
};

export const getObjectByKey = (data, key) => {
  if (!Array.isArray(data) || data.length === 0) return null;

  for (let i = 0; i < data.length; i++) {
    const tempObject = getNestedObjectByKey(data[i], key);
    if (tempObject) return tempObject;
  }

  return null;
};

export const mapPropsToColumns = (columns, createColumnsProps) =>
  columns.map((column) =>
    Object.entries(createColumnsProps(column)).reduce((object, [key, item]) => {
      if (object.children) {
        mapPropsToColumns(object.children, createColumnsProps);
      }

      if (Array.isArray(item.excludeDataIndex)) {
        if (!item.excludeDataIndex.includes(object.dataIndex) && !object[key]) {
          object[key] = item.value;
        }
      } else if (!object[key]) {
        object[key] = item.value;
      }

      return object;
    }, column)
  );
