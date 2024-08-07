const obj = {
  value: 29,
  method: function () {
    const nested = () => {
      console.log("LOG 1: ", this.value);
    };
    nested();
  },
};

const obj2 = {
  value: 25,
  method: function () {
    setTimeout(function () {
      console.log("LOG 2: ", this.value);
    }, 1000);
  },
};

obj.method();
obj2.method();
