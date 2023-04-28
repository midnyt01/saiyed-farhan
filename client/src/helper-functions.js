export function convertUnixToDM(unixTimestamp) {
    // Convert Unix timestamp to milliseconds
    const dateObj = new Date(unixTimestamp * 1000);
    
    // Get date and month as numbers (starting from 0)
    const date = dateObj.getDate(); // 1-31
    const month = dateObj.getMonth(); // 0-11
    
    // Create an array of month names
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    
    // Get the name of the month
    const monthName = monthNames[month];
    
    // Return the date and month as an object
    return { date, month: monthName };
  }


  export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}
  

export async function getPlaceReviews(placeId, apiKey) {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data.result.reviews;
    } else {
      throw new Error(`Error fetching place reviews: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }

  return [];
}

const apiKey = "AIzaSyDKI7XTRAxzODbotQKS2enFgF6AgwYl8MQ";