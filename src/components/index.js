FaAppStore.post("/carts", async (req, res) => {
  const cartItem = req.body;
  const result = await cartCollections.inserOne(cartItem);
  res.send(result);
});
