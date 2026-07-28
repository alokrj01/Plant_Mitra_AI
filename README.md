<div align="center">

# 🌱 PlantMitra AI

### AI-powered Plant Health Platform for Disease Diagnosis & Intelligent Crop Management


<p>
PlantMitra AI combines <strong>Computer Vision</strong>, <strong>Natural Language Processing</strong>, and <strong>Machine Learning</strong> to help gardeners, researchers, and farmers identify plant diseases, understand their causes, and receive actionable treatment recommendations in seconds.
</p>

<p>

[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)

[![Backend](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)

[![ML](https://img.shields.io/badge/AI-PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)](https://pytorch.org)

[![Tailwind CSS](https://img.shields.io/badge/UI-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

</p>

<p>

<a href="https://plantmitraai.vercel.app">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Visit-success?style=for-the-badge">
</a>

<a href="https://alokrj-plant-disease-backend.hf.space/docs">
<img src="https://img.shields.io/badge/API-Documentation-blue?style=for-the-badge">
</a>

</p>

</div>

---


# 📖 Overview

Plant diseases are one of the leading causes of reduced agricultural productivity worldwide. Accurate diagnosis often requires expert knowledge, making early disease detection difficult for many gardeners and farmers.

**PlantMitra AI** addresses this challenge by combining **Deep Learning**, **Natural Language Processing**, and a modern **full-stack web application** to provide fast, accessible, and intelligent plant disease diagnosis.

Users can either upload an image of an affected leaf or describe the visible symptoms in natural language. The application analyzes the input using trained machine learning models and generates an AI-assisted diagnosis along with confidence scores, disease information, and treatment recommendations.

PlantMitra AI is designed with scalability in mind and serves as the foundation for a modern AI-powered agricultural platform.

---

# ✨ Key Features

## 🤖 AI Disease Detection

- 🌿 Image-based plant disease prediction using Deep Learning
- 📝 Symptom-based disease prediction using Natural Language Processing
- 📊 Confidence score for every prediction
- ⚡ Real-time prediction through FastAPI APIs

---

## 🔬 Disease Analysis

- 🦠 Disease identification
- 📖 Detailed disease description
- 🚨 Severity information
- 💊 Immediate treatment recommendations
- 🛡 Long-term prevention strategies

---

## 🎨 Modern User Experience

- 🌗 Light / Dark / System Theme
- 📱 Fully Responsive Design
- ✨ Premium glassmorphism-inspired interface
- ⚡ Fast and interactive UI
- 🔔 Beautiful toast notifications
- 🎯 Smooth animations and transitions

---

## ⚙️ Software Architecture

- 🔥 Modular React component architecture
- 🚀 FastAPI REST APIs
- 🧠 PyTorch-based inference engine
- 🔄 Reusable UI component system
- 📂 Clean project organization
- 🌍 Environment-based configuration

---

# 🎯 Why PlantMitra AI?

Unlike traditional plant disease classifiers that only predict a disease label, PlantMitra AI focuses on delivering a complete diagnosis experience by combining prediction, disease knowledge, and treatment guidance within a modern and intuitive interface.

The long-term vision is to evolve PlantMitra AI into an intelligent agricultural platform capable of supporting disease diagnosis, AI-assisted consultation, crop monitoring, and precision farming.

---

![App Screenshot](https://github.com/alokrj01/ai-plant-doc/blob/main/frontend/Screenshot%20from%202026-02-21%2015-00-29.png)

</div>

<br />

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [📥 Model Setup (Crucial)](#-model-setup-crucial)
  - [💻 Installation Steps](#-installation-steps)

---

## ✨ Features

- 📝 **Text-Based Prediction:** Describe your plant's symptoms and get an AI-powered diagnosis.
- 📸 **Image-Based Prediction:** Upload an image of a plant leaf to detect diseases instantly.
- 📊 **Detailed Results:** Get a predicted disease name, confidence score, and severity description.
- 💊 **Treatment Recommendations:** Receive immediate and long-term advice for treating the detected disease.
- 🎨 **Premium UI:** A clean, responsive, glassmorphic interface built with React and Tailwind CSS.

---

## 🛠️ Tech Stack

<details>
<summary><b>Click to expand technology details</b></summary>
<br/>

- **Frontend:** React.js, Vite, Tailwind CSS, Lucide Icons, React Router
- **Backend:** Python, FastAPI, Uvicorn
- **Machine Learning:** PyTorch, Transformers (HuggingFace), Scikit-learn
- **Architecture:** Client-Server model with RESTful APIs

</details>

---

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+ or higher)
- [Python](https://www.python.org/downloads/) (v3.10+ or higher)
- Git

### 📥 Model Setup (Crucial)

> ⚠️ **IMPORTANT:** The machine learning models for this project are too large for GitHub and must be downloaded separately before running the backend.

1. **Download the Image Model:** [Get `cnn_model.pth` here](https://drive.google.com/file/d/1MXMz-hBrqbqKnczM486nkbkY2rbSzaiU/view?usp=sharing)
2. **Download the Text Models:** - [Part 1 (Folder)](https://drive.google.com/drive/folders/1aqKHcEMsyzvO4ym0kHpsig3AoS1XOZ9L?usp=sharing)
   - [Part 2 (File)](https://drive.google.com/file/d/1jZA8RYyh3S6iIzAWpEm90Rsk7mtgxhzP/view?usp=sharing)
3. **Organize the Files:** Place them inside the `backend/` directory of this project.

<details>
<summary><b>📁 Click here to view the required Folder Structure</b></summary>

```text
backend/
├── Models/              <-- Create this folder if it doesn't exist
│   ├── cnn_model.pth    <-- Place the downloaded image model here
│   └── best_model_text/ <-- Place the text model files inside this folder
└── main.py
```

</details>

### Installation

1. Clone the Repository

```bash
git clone https://github.com/alokrj01/ai-plant-doc
cd ai-plant-doc
```

2. Setup and run the Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

3. Setup and Run the frontend

```bash
cd frontend
npm install
npm run dev
```

<div align="center">
<p>Made with ❤️ by <a href="https://github.com/alokrj01">Alok Ranjan</a></p>
</div>
