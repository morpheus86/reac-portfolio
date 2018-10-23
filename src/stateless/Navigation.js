import posed from 'react-pose'

export const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
export const Item = posed.ul({
  enter: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 }
});
