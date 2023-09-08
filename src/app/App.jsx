import React, { useState, useEffect } from "react"
import "./app.css"
import "shiftgrid"

export default function App() {
  return (
    <div className="app container">
      <header className="row">
        قسمت نوبار
      </header>
      <main className="row">
        قسمت اصلی
      </main>
      <footer className="row">
        قسمت پابرگ
      </footer>
    </div>
  );
}

