import { db } from "./firebaseConfig.js";
import { collection, addDoc } from "firebase/firestore";

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const statusText = document.getElementById("status");

  try {
    await addDoc(collection(db, "messages"), { name, email, message, timestamp: new Date() });
    statusText.innerText = "Message Sent!";
  } catch (error) {
    statusText.innerText = "Error sending message.";
    console.error("Error: ", error);
  }
});
