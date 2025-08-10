#!/usr/bin/env bash
set -e

mkdir -p src .github/workflows

# .gitignore
cat > .gitignore <<'EOF'
node_modules
dist
.DS_Store
EOF

# package.json（含 gh-pages，保留本機手動 deploy 選項）
cat > package.json <<'EOF'
{
  "name": "chi-mei-month",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "lucide-react": "^0.469.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.19",
    "gh-pages": "^6.2.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.13",
    "vite": "^5.3.4"
  }
}
EOF

# vite.config.js（已寫好 Pages 子路徑）
cat > vite.config.js <<'EOF'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 子路徑：qpig0218/ChiMei-Month
export default defineConfig({
  plugins: [react()],
  base: '/ChiMei-Month/',
})
EOF

# Tailwind / PostCSS
cat > tailwind.config.js <<'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
}
EOF

cat > postcss.config.js <<'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# index.html
cat > index.html <<'EOF'
<!doctype html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>奇美月視覺化</title>
  </head>
  <body class="bg-stone-100">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
EOF

# src/index.css
cat > src/index.css <<'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 自訂：需要再加也 OK */
:root { color-scheme: light; }
EOF

# src/main.jsx
cat > src/main.jsx <<'EOF'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
EOF

# src/App.jsx（簡版可跑；待你覆蓋成完整版）
cat > src/App.jsx <<'EOF'
import React, { useState } from 'react'
import { Brush, TrendingUp, ScrollText, TreePine, Target, Leaf, FlaskConical, ChevronUp, ChevronDown } from 'lucide-react'

function Accordion({ title, icon: Icon, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-stone-300 rounded-lg mb-4 shadow-sm bg-neutral-50">
      <button className="flex justify-between items-center w-full p-4 text-lg font-semibold text-stone-700 bg-neutral-100 hover:bg-neutral-200 rounded-t-lg"
              onClick={()=>setOpen(!open)}>
        <span className="flex items-center">{Icon && <Icon className="mr-3 text-emerald-600" size={24} />}{title}</span>
        {open ? <ChevronUp className="text-stone-500" /> : <ChevronDown className="text-stone-500" />}
      </button>
      {open && <div className="p-4 border-t border-stone-300 text-stone-700 leading-relaxed">{children}</div>}
    </div>
  )
}

export default function App(){
  const [tab,setTab]=useState('overview')
  return (
    <div className="font-inter bg-stone-100 min-h-screen pt-20">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap'); body{font-family:Inter, sans-serif}`}</style>

      <nav className="bg-gradient-to-r from-stone-500 to-stone-700 p-4 shadow-lg fixed w-full z-50 top-0">
        <div className="container mx-auto flex flex-wrap justify-center gap-4">
          {[
            ['總覽','overview'],
            ['醫學教育','carp'],
            ['奇美月活動','schedule'],
          ].map(([t,id])=>(
            <button key={id} onClick={()=>setTab(id)}
              className={`px-4 py-2 rounded-full text-white font-medium transition duration-300 ${tab===id?'bg-emerald-500 shadow-md':'hover:bg-stone-600'}`}>{t}</button>
          ))}
        </div>
      </nav>

      <main className="container mx-auto p-4">
        {tab==='overview' && (
          <section className="py-12 bg-neutral-50 rounded-lg shadow-md mb-8">
            <h2 className="text-4xl font-extrabold text-stone-800 mb-8 text-center border-b-4 border-emerald-500 pb-4">奇美月活動總覽</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-stone-700">
              <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md"><Brush className="text-rose-500 mb-4" size={48}/><h3 className="text-xl font-bold">創辦人哲學</h3><p className="text-center">文化 × 醫療，照顧台南鄉親身心健康。</p></div>
              <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md"><TrendingUp className="text-amber-600 mb-4" size={48}/><h3 className="text-xl font-bold">活動演進</h3><p className="text-center">從醫學教育月擴展為三館聯展。</p></div>
              <div className="flex flex-col items-center p-6 bg-neutral-100 rounded-lg shadow-md"><ScrollText className="text-blue-500 mb-4" size={48}/><h3 className="text-xl font-bold">鯉躍計劃核心</h3><p className="text-center">接軌國際、培育新世代醫師核心能力。</p></div>
            </div>
          </section>
        )}

        {tab==='carp' && (
          <section className="py-12 bg-neutral-50 rounded-lg shadow-md mb-8">
            <h2 className="text-4xl font-extrabold text-stone-800 mb-8 text-center border-b-4 border-emerald-500 pb-4">醫學教育：根 → 幹 → 枝枒 → 開花</h2>
            <div className="flex flex-col items-center mb-6"><div className="bg-emerald-600 text-white p-4 rounded-full shadow w-24 h-24 flex items-center justify-center"><TreePine size={48}/></div></div>
            <div className="grid md:grid-cols-3 gap-6">
              <Accordion title="第一性原理">以病人為中心、維護尊嚴與需求</Accordion>
              <Accordion title="歸零重構">在不確定中回到本質、重構解方</Accordion>
              <Accordion title="360°平衡">專業與生活並重，打造幸福職場</Accordion>
            </div>
            <div className="flex flex-col items-center mb-6 mt-12"><div className="bg-slate-600 text-white p-4 rounded-full shadow w-24 h-24 flex items-center justify-center"><Target size={48}/></div></div>
            <div className="grid md:grid-cols-2 gap-6">
              <Accordion title="學生中心">強化以病人為中心的重構思維</Accordion>
              <Accordion title="人文並重">醫術與人文並舉，融入敘事與倫理</Accordion>
              <Accordion title="創新精神">培養第一性思考與創新能力</Accordion>
              <Accordion title="社會責任">無牆醫院，促進社區健康</Accordion>
            </div>
            <div className="flex flex-col items-center mb-6 mt-12"><div className="bg-rose-600 text-white p-4 rounded-full shadow w-24 h-24 flex items-center justify-center"><Leaf size={48}/></div></div>
            <div className="grid md:grid-cols-2 gap-6">
              <Accordion title="A. 師資培育">研習社群、導師制、典範教育者</Accordion>
              <Accordion title="B. 學生核心能力">臨床重構、溝通同理、團隊合作、終身學習</Accordion>
              <Accordion title="C. 醫學人文">臨床人文融合與生命經驗教育</Accordion>
              <Accordion title="D. 數位賦能">AI/資訊素養與 LHS</Accordion>
            </div>
            <div className="flex flex-col items-center mb-6 mt-12"><div className="bg-amber-600 text-white p-4 rounded-full shadow w-24 h-24 flex items-center justify-center"><FlaskConical size={48}/></div></div>
          </section>
        )}

        {tab==='schedule' && (
          <section className="py-12 bg-neutral-50 rounded-lg shadow-md mb-8">
            <h2 className="text-4xl font-extrabold text-stone-800 mb-8 text-center border-b-4 border-emerald-500 pb-4">「奇美月」活動實踐</h2>
            <p className="text-center text-stone-600">可在這裡補上完整時間表。</p>
          </section>
        )}
      </main>

      <footer className="bg-stone-800 text-white text-center p-6 mt-12 rounded-t-lg shadow-inner">
        <p>&copy; 2025 奇美醫院「奇美月」視覺化。版權所有。</p>
      </footer>
    </div>
  )
}
EOF

# GitHub Actions：push 到 main 自動發佈 gh-pages
cat > .github/workflows/deploy.yml <<'EOF'
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          publish_branch: gh-pages
EOF

echo "✅ 檔案建立完成。接著："
echo "1) npm i"
echo "2) (可選) npm run dev"
echo "3) git init && git add -A && git commit -m 'init' && git branch -M main"
echo "4) git remote add origin https://github.com/qpig0218/ChiMei-Month.git"
echo "5) git push -u origin main"
