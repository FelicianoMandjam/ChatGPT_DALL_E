import "./Chat.css";
import { useEffect, useState } from "react";

function Chat() {
  const [prompt, setPrompt] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const historyStorage = localStorage.getItem("messages");
    if (historyStorage) {
      setHistory(JSON.parse(historyStorage));
    }
  }, []);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/api/chat", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ question: prompt.trim(), messages: history }),
    });

    const result = await response.json();

    const newHistory = [
      ...history,
      {
        user: prompt,
        assistant: result.completion.choices[0].message.content,
      },
    ];

    setHistory(newHistory);

    localStorage.setItem("messages", JSON.stringify(newHistory));

    setPrompt("");
  };

  console.log(history);

  return (
    <div className="chat">
      <h1>Bienvenue au ChatBox</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Prompt</legend>
          <input type="text" onChange={handleChange} />
          <button>Send</button>
        </fieldset>
      </form>

      <fieldset className="conversation">
        <legend>Conversation</legend>
        {history.map((message, index) => (
          <div key={index}>
            <p className="user">
              <span>You:</span> {message.user}
            </p>
            <p className="assistant">
              <span>Assistant:</span> {message.assistant}
            </p>
          </div>
        ))}
      </fieldset>
    </div>
  );
}

export default Chat;

// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// // Envoyer la questions a la place
// const Chat = () => {
//   const [question, setQuestion] = useState("");
//   const [response, setResponse] = useState("");
//   const [tabQuestion, setTabQuestion] = useState([]);
//   const [tabResponse, setTabResponse] = useState([]);

//   //   const [tab, setTab] = useState({
//   //     question: "",
//   //     reponse: "",
//   //   });

//   const URL = "http://localhost:8000/api/chat/";

//   const hundleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(URL, { question: question });
//       console.log(data);
//       setResponse(data);

//       tabQuestion.push(question);
//       //   const questions = localStorage.getItem(question);
//       //   JSON.parse(questions);
//       console.log(tabQuestion);

//       //   enregistre la reponse et en string
//       tabResponse.push(data);
//       localStorage.setItem("reponse", JSON.stringify(data));
//       console.log(tabResponse);
//       //   enregistre la question que j'ai pose
//       //   localStorage.setItem(question , JSON.stringify(question));
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   return (
//     <div className="chatbox">
//       <h1>Bienvenue au chat</h1>

//       <div className="reponse">
//         {tabResponse.map((responsee) => (
//           <b>
//
//             <p> ChatGPFeli : {responsee}</p>
//           </b>
//         ))}
//         <br />
//         {tabQuestion.map((quest) => {
//           <p> Vous : {quest}</p>;
//         })}
//       </div>

//       <form onSubmit={hundleSubmit}>
//         <input
//           type="text"
//           name="message"
//           value={question}
//           onChange={(e) => setQuestion(e.target.value)}
//         />
//         <button className="btn" type="submit">Poser la question</button>
//       </form>
//     </div>
//   );
// };

// export default Chat;
