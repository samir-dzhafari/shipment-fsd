export const combineClassNames = (...classNames: Maybe<string>[]) => {
  return classNames.filter(Boolean).join(' ')
}
