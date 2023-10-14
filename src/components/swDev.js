const swDev = () => {
  let url = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(url).then(async (response) => {
    console.warn("response", response);
  });
};
export default swDev;
