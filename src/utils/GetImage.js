const getImage = id => {
  const moduleImage = require(`../assets/images/${id}.jpg`);
  return moduleImage.default;
};

export default getImage;