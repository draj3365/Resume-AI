async function generateResume() {
  
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let skills = document.getElementById("skills").value;
  
  let apiKey = "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";
  
  let response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are a professional resume writer." },
        { role: "user", content: `Make a resume for ${name}, job: ${job}, skills: ${skills}` }
      ]
    })
  });
  
  let data = await response.json();
  document.getElementById("output").innerText = data.choices[0].message.content;
}async function generateResume() {
  
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  let skills = document.getElementById("skills").value;
  
  let apiKey = "YOUR_API_KEY_HERE"; // apni key yaha paste
  
  let response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apiKey
    },
    body: JSON.stringify({
      model: "gpt-4.1-mini",
      messages: [
        { role: "system", content: "You are a professional resume writer." },
        { role: "user", content: `Make a resume for ${name}, job: ${job}, skills: ${skills}` }
      ]
    })
  });
  
  let data = await response.json();
  document.getElementById("output").innerText = data.choices[0].message.content;
}