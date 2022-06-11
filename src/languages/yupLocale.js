import { upperCaseFirst } from "text-case";

const yupLocale = {
  mixed: {
    default: ({ path }) => ({
      key: "yup.mixed.default",
      values: { path: upperCaseFirst(path) },
    }),
    required: ({ path }) => ({
      key: "yup.mixed.required",
      values: { path: upperCaseFirst(path) },
    }),
    oneOf: ({ path, values }) => ({
      key: "yup.mixed.oneOf",
      values: { path: upperCaseFirst(path), values },
    }),
    notOneOf: ({ path, values }) => ({
      key: "yup.mixed.notOneOf",
      values: { path: upperCaseFirst(path), values },
    }),
    notType: ({ path, type }) => ({
      key: "yup.mixed.notType",
      values: { path: upperCaseFirst(path), type },
    }),
    defined: ({ path }) => ({
      key: "yup.mixed.defined",
      values: { path: upperCaseFirst(path) },
    }),
  },
  string: {
    length: ({ path, length }) => ({
      key: "yup.string.length",
      values: { path: upperCaseFirst(path), length },
    }),
    min: ({ path, min }) => ({
      key: "yup.string.min",
      values: { path: upperCaseFirst(path), min },
    }),
    max: ({ path, max }) => ({
      key: "yup.string.max",
      values: { path: upperCaseFirst(path), max },
    }),
    matches: ({ path, regex }) => ({
      key: "yup.string.matches",
      values: { path: upperCaseFirst(path), regex },
    }),
    email: ({ path }) => ({
      key: "yup.string.email",
      values: { path: upperCaseFirst(path) },
    }),
    url: ({ path }) => ({
      key: "yup.string.url",
      values: { path: upperCaseFirst(path) },
    }),
    uuid: ({ path }) => ({
      key: "yup.string.uuid",
      values: { path: upperCaseFirst(path) },
    }),
    trim: ({ path }) => ({
      key: "yup.string.trim",
      values: { path: upperCaseFirst(path) },
    }),
    lowercase: ({ path }) => ({
      key: "yup.string.lowercase",
      values: { path: upperCaseFirst(path) },
    }),
    uppercase: ({ path }) => ({
      key: "yup.string.uppercase",
      values: { path: upperCaseFirst(path) },
    }),
  },
  number: {
    min: ({ path, min }) => ({
      key: "yup.number.min",
      values: { path: upperCaseFirst(path), min },
    }),
    max: ({ path, max }) => ({
      key: "yup.number.max",
      values: { path: upperCaseFirst(path), max },
    }),
    lessThan: ({ path, less }) => ({
      key: "yup.number.lessThan",
      values: { path: upperCaseFirst(path), less },
    }),
    moreThan: ({ path, more }) => ({
      key: "yup.number.moreThan",
      values: { path: upperCaseFirst(path), more },
    }),
    positive: ({ path }) => ({
      key: "yup.number.positive",
      values: { path: upperCaseFirst(path) },
    }),
    negative: ({ path }) => ({
      key: "yup.number.negative",
      values: { path: upperCaseFirst(path) },
    }),
    integer: ({ path }) => ({
      key: "yup.number.integer",
      values: { path: upperCaseFirst(path) },
    }),
  },
  date: {
    min: ({ path, min }) => ({
      key: "yup.min.min",
      values: { path: upperCaseFirst(path), min },
    }),
    max: ({ path, max }) => ({
      key: "yup.min.max",
      values: { path: upperCaseFirst(path), max },
    }),
  },
  boolean: {
    isValue: ({ path, value }) => ({
      key: "yup.boolean.isValue",
      values: { path: upperCaseFirst(path), value },
    }),
  },
  object: {
    noUnknown: ({ path, unknown }) => ({
      key: "yup.boolean.noUnknown",
      values: { path: upperCaseFirst(path), unknown },
    }),
  },
  array: {
    min: ({ path, min }) => ({
      key: "yup.array.min",
      values: { path: upperCaseFirst(path), min },
    }),
    max: ({ path, max }) => ({
      key: "yup.array.max",
      values: { path: upperCaseFirst(path), max },
    }),
    length: ({ path, length }) => ({
      key: "yup.array.default",
      values: { path: upperCaseFirst(path), length },
    }),
  },
};

export default yupLocale;
