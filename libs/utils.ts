export const sleep = (response: any, timeout: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(response);
    }, timeout || 300)
  });
}