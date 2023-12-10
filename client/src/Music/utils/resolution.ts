export const getCurrentResolution = () => {
  if (window.innerWidth >= 1200) {
    return 'DESKTOP';
  } else if (window.innerWidth >= 768) {
    return 'Tablet';
  } else {
    return 'MOBILE';
  }
};
