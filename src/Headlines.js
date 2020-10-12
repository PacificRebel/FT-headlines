import React, { useState, useEffect } from 'react'


const Headlines = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=NY_API_KEY")
    .then(response => response.json())
    .then(data => setItems(data["status"]))
  }, [])

  return (
    <div>
    {items.map(item => <p>{item["title"]}</p>)}
    </div>
  )
}

console.log(useEffect)

export default Headlines
