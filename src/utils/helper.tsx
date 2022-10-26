const getCookie = (cookie: string, key: string): string => {
  let cookieItem = cookie
    .split(";")
    .find((item) => item.split("=")[0].trim() === key);
  if (cookieItem) {
    cookieItem = cookieItem.trim();
    let value = cookieItem
      .substring(cookieItem.indexOf("=") + 1, cookieItem.length)
      .trim();
    return value;
  } else {
    return "";
  }
};

export { getCookie };
