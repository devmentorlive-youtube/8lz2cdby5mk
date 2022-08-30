function expensive() {
  return new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000));
}

(async () => {
  const a = await Promise.all([
    expensive(),
    expensive(),
    expensive(),
    expensive(),
    expensive(),
  ]);
  console.dir(a);
})();
