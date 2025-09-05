# Chat App (Next.js + Tailwind CSS)

This is a simple chat application built with **Next.js 13+ (App Router)** and **Tailwind CSS**.  
The app focuses on a shared layout (Navbar + Footer) and core chat functionality.

---

## 🚀 Project Structure

app/
├─ layout.js → Shared layout (includes Navbar + Footer)
├─ page.js → Home/Landing page
└─ chat/
└─ [roomId]/
└─ page.js → Displays messages for a specific chat room

components/
├─ Navbar.js → Navigation bar
├─ Footer.js → Footer section
├─ ChatRoom.js → Shows chat messages
└─ MessageForm.js → Input form to send messages


---

## 🛠️ Features

- **Shared Layout**: Navbar and Footer applied across all pages.  
- **Home Page**: Landing page with basic info or navigation to chat rooms.  
- **Dynamic Chat Rooms**: `/chat/[roomId]` renders messages for that room.  
- **Reusable Components**: ChatRoom (message list) & MessageForm (send message).

---

## 📦 Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/chat-app.git
   cd chat-app

Install dependencies:
  npm install

Run the development server:
   npm run dev

Open in browser:
http://localhost:3000

📂 Next Steps

#Add authentication 

#Connect to a backend 

#Style components with Tailwind utilities.

#Improve UI/UX with animations & responsiveness.

📝 License

This project is for learning/demo purposes.

