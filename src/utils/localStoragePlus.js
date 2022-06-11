import ms from "ms";

const localStoragePlus = (() => ({
  createStorage: (key) => {
    if (key) {
      const storage = JSON.parse(localStorage.getItem(key)) ?? {};
      const save = () => localStorage.setItem(key, JSON.stringify(storage));

      return {
        length: Object.keys(storage).length || 0,

        setItem: (key, value, ttl = 0) => {
          const exp = Date.now() + ms(ttl.toString());
          const item = { value, exp };

          storage[key] = item;
          save();
        },

        getItem: (key, options = { ignoreExp: true }) => {
          const item = storage[key];

          if (item) {
            if (options.ignoreExp || Date.now() <= item.exp) {
              return item.value;
            }
          }
          return null;
        },

        removeItem: (key) => {
          delete storage[key];
          save();
        },
      };
    }
  },
}))();

export default localStoragePlus;
