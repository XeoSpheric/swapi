function Stringify<T>(data: T) {
  return JSON.stringify(data, (_, value) =>
    typeof value === 'bigint' ? value.toString() + 'n' : value
  );
}

export { Stringify };
