

export const exerciseOptions={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ebe5c808bmsh3a610710e88e56fp18e77djsn0966a7e51096',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '1ebe5c808bmsh3a610710e88e56fp18e77djsn0966a7e51096',
    },
  };




export const fetchData=async(url,options)=>{
    const response = await fetch(url,options);
    const data=await response.json();

    return data; 

}