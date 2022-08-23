export async function getUserInfo(data) {
    const response = await fetch('http://localhost:9090/get/user', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({userlogin: data})
      })
    const content = await response.json();
    console.log('responseS: ' + JSON.stringify(content))
    return content;
}
export async function getWeather(data) {
    const response = await fetch('http://localhost:9090/get/weather', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({daydiff: data})
      })
    const content = await response.json();
    console.log('responseS: ' + JSON.stringify(content))
    return content;
}
export async function getBotpress(host, userid, data) {
  const response = await fetch(host + userid, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "type": "text",
        "text": data
      })
    })
  let content = await response.json();
  content = content.responses[0]
  console.log('responseS: ' + JSON.stringify(content))
  return content;
}