// const imgData=(arr)=> arr.map((item) => item["url"]);
                                       // item.url
  const imgData=(arr)=> 
                   arr.map((item) => `<img src="${item.url}" alt="${item.title}" />`)                                   
console.log(
    imgData([
    {url:"google.com", title:"Google"},
    {url:"intagram.com", title:"instagram"},
    {url:"pickupbiz.com", title:"pickupbiz"}
]))