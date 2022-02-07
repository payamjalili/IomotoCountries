export const BoxShadow = (shadow: string = '0 0 10px #c7c7c7') => {
  return `
  -webkit-box-shadow: ${shadow};
  -moz-box-shadow: ${shadow};
  box-shadow: ${shadow};
  `;
};
