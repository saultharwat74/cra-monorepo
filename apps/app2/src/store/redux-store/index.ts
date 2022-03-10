// generic action template
export const genericAction = (action: string) => ({
  fulfilled: `${action}_FULFILLED`,
  rejected: `${action}_REJECTED`,
  requested: `${action}_REQUESTED`,
});
