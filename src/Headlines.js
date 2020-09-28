import React, { useState, useEffect } from 'react'


const Headlines = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.ft.com/content/search/v1?apiKey=INSERT-API-KEY-HERE", {
      method: "POST",
      // mode: 'cors',
      headers: {
        'Content-Type':	'application/json',
        'Access-Control-Allow-Origin': '*'
      }
      })
    .then(response => response.json())
    .then(data => setItems(data["results"]["title"]))
  }, [])

  return (
    <div>
    {items.map(item => <p>{item["title"]}</p>)}
    </div>
  )
}

export default Headlines
