const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

exports.sleep = sleep;
