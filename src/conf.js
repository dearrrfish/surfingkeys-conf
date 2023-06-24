import theme from "theme" // webpack resolve
import keys from "keys" // webpack resolve
import searchEngines from "search-engines"  // webpack resolve

export default {
  settings: {
    hintAlign: "left",
    hintCharacters: "qwertasdfgzxcvb",
    omnibarSuggestionTimeout: 500,
    richHintsForKeystroke: 1,
    defaultSearchEngine: "dd",
    theme,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: "<Space>",

  // Leader for OmniBar searchEngines
  searchleader: "a",

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    "error",
  ],
}
