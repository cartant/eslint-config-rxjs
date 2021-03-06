module.exports = {
  plugins: ["rxjs"],
  rules: {
    "rxjs/no-async-subscribe": ["error"],
    "rxjs/no-compat": ["error"],
    "rxjs/no-connectable": ["error"],
    "rxjs/no-create": ["error"],
    "rxjs/no-explicit-generics": ["error"],
    "rxjs/no-ignored-notifier": ["error"],
    "rxjs/no-ignored-replay-buffer": ["error"],
    "rxjs/no-ignored-observable": ["error"],
    "rxjs/no-ignored-subscription": ["error"],
    "rxjs/no-ignored-takewhile-value": ["error"],
    "rxjs/no-implicit-any-catch": ["error"],
    "rxjs/no-index": ["error"],
    "rxjs/no-internal": ["error"],
    "rxjs/no-nested-subscribe": ["error"],
    "rxjs/no-sharereplay": ["error", { allowConfig: true }],
    "rxjs/no-subclass": ["error"],
    "rxjs/no-subject-unsubscribe": ["error"],
    "rxjs/no-subject-value": ["error"],
    "rxjs/no-unbound-methods": ["error"],
    "rxjs/no-unsafe-catch": ["error"],
    "rxjs/no-unsafe-first": ["error"],
    "rxjs/no-unsafe-subject-next": ["error"],
    "rxjs/no-unsafe-switchmap": ["error"],
    "rxjs/no-unsafe-takeuntil": ["error"],
    "rxjs/throw-error": ["error"],
  },
};
