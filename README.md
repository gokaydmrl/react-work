# React Audio Stream App with Auth0 & SSE

This is a React-based web application that uses **Auth0 for authentication** and streams **OpenAI-generated audio** using **Server-Sent Events (SSE)** served from a **NestJS backend**.

🔊 **Live App**: [https://react-work-two.vercel.app/](https://react-work-two.vercel.app/)

---

## ✨ Features

- 🔐 **Auth0 Authentication**  
  Secure user login and logout via Auth0.

- 🔁 **OpenAI Audio Streaming**  
  Streams audio in real time from OpenAI via an SSE (Server-Sent Events) connection.

- 🚫 **No WebSockets**  
  This app intentionally uses SSE, not WebSocket, for unidirectional, event-based audio delivery.

- 🧠 **NestJS Backend**  
  The audio stream is powered by a custom NestJS server that forwards OpenAI's streaming responses over SSE.

- ⚛️ **React + Vite Frontend**  
  Built with modern React tooling and Vite for blazing-fast builds.

---

## 🧰 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Frontend    | React, Vite      |
| Auth        | Auth0            |
| Audio       | OpenAI API       |
| Streaming   | Server-Sent Events (SSE) |
| Backend     | NestJS           |

---
