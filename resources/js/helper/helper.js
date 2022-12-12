export const debounce = (func) => {
    let timer;
    return function (...argument) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, argument);
      }, 500);
    };
  };