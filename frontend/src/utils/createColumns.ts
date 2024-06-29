const createColumns = (data = []) => {
  let checkForArray = data;

  if (!Array.isArray(data)) { checkForArray = [data]; }

  const columns = checkForArray.reduce((prev, curr) => {
    const keys = Object.keys(curr);
    keys.forEach((key) => {
      if (!prev.includes(key)) prev.push(key);
    });
    return prev;
  }, []);

  return columns;
};

export default createColumns;
