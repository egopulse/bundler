module.exports = (onFinished) => {
  const stdin = process.openStdin();
  let data = '';
  
  stdin.on('data', (chunk) => data += chunk);
  stdin.on('end', () => {
    onFinished(JSON.parse(data));
    delete data;
  });
}
