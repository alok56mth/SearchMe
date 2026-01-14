# 🔍 SearchMe - Modern Google Clone

A sleek, modern Google Search clone built with React and Vite. Features a stunning dark/light mode toggle, glassmorphism UI, and real-time search powered by Google Custom Search API.

![SearchMe Banner](./screenshots/homepage-dark.png)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌙 **Dark/Light Mode** | Toggle between stunning dark theme and classic light theme |
| 🔮 **Glassmorphism UI** | Modern frosted glass effects with glow animations |
| 🔍 **Real Search** | Powered by Google Custom Search API |
| 🖼️ **Image Search** | Dedicated image search with beautiful grid layout |
| 📱 **Fully Responsive** | Works seamlessly on desktop, tablet, and mobile |
| ⚡ **Fast & Modern** | Built with Vite for lightning-fast development |
| 🎨 **Smooth Animations** | Floating logos, hover effects, and transitions |

---

## 🎨 Screenshots

### 🌙 Dark Mode
![Dark Mode Home](./screenshots/homepage-dark.png)

### ☀️ Light Mode
![Light Mode Home](./screenshots/homepage-light.png)

### 🔍 Search Results
![Search Results](./screenshots/search-results.png)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Google Custom Search API Key & CX

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/searchme.git

# Navigate to project directory
cd searchme

# Install dependencies
npm install

# Create .env file with your API keys
echo "VITE_GOOGLE_API_KEY=your_api_key_here" > .env
echo "VITE_GOOGLE_CX=your_cx_here" >> .env

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GOOGLE_API_KEY=your_google_api_key
VITE_GOOGLE_CX=your_custom_search_engine_id
```

### Getting API Keys

1. **Google API Key**: 
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project
   - Enable "Custom Search API"
   - Create credentials (API Key)

2. **Custom Search Engine ID (CX)**:
   - Go to [Programmable Search Engine](https://programmablesearchengine.google.com/)
   - Create a new search engine
   - Copy the Search Engine ID

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| ⚛️ **React 18** | UI Framework |
| ⚡ **Vite** | Build Tool |
| 🎨 **TailwindCSS** | Styling |
| 🔀 **React Router** | Navigation |
| 📡 **Axios** | API Requests |
| 🎯 **React Icons** | Icon Library |

---

## 📁 Project Structure

```
searchme/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/           # Images & icons
│   ├── components/       # React components
│   │   ├── Home.jsx
│   │   ├── SearchResult.jsx
│   │   ├── SearchInput.jsx
│   │   ├── Pagination.jsx
│   │   └── ...
│   ├── utils/            # Utilities & context
│   │   ├── api.js
│   │   ├── ContextApi.jsx
│   │   └── Constants.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
├── tailwind.config.cjs
├── vite.config.js
└── README.md
```

---

## 🎯 Key Components

| Component | Description |
|-----------|-------------|
| `Home.jsx` | Landing page with search input and theme toggle |
| `SearchResult.jsx` | Displays search results with pagination |
| `SearchInput.jsx` | Search bar with voice & image search icons |
| `SearchResultHeader.jsx` | Header with tabs (All, Images, News, etc.) |
| `Pagination.jsx` | Page navigation for results |

---

## 🌐 API Usage

This project uses the **Google Custom Search JSON API**. Note that the free tier has limits:
- **100 queries/day** for free
- Additional queries require billing

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Alok Kumar**

- GitHub: [@Alok56mth](https://github.com/Alok56mth)
- LinkedIn: [Alok Kumar](https://linkedin.com/in/alokkumar)

---

## ⭐ Show Your Support

If you found this project helpful, please give it a ⭐ on GitHub!

---

<p align="center">Made with ❤️ and React</p>
