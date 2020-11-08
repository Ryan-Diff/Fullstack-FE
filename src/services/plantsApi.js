const URL = process.env.API_KEY;

export const postPlant = async([plant]) => {
    const res = await fetch(`${process.env.API_KEY}/api/v1/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(plant)
    });
  
    const json = await res.json();
    if(!res.ok) throw json;
  
    return json;
  };