const fetchOlympicsData = async () => {
  // Delay a little bit to enjoy the logo!!
  await new Promise(resolve => setTimeout(resolve, 2000));
  const apiDataLink = "https://s3.amazonaws.com/com.veea.medals/medals.json";
  const response = await fetch(apiDataLink);
  const data = await response.json();
  return data;
};

export default fetchOlympicsData;
