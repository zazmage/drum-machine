import "./App.css";
import c from "./notes/c3.mp3";
import cs from "./notes/c-3.mp3";
import d from "./notes/d3.mp3";
import ds from "./notes/d-3.mp3";
import e from "./notes/e3.mp3";
import f from "./notes/f3.mp3";
import fs from "./notes/f-3.mp3";
import g from "./notes/g3.mp3";
import gs from "./notes/g-3.mp3";
import a from "./notes/a4.mp3";
import as from "./notes/a-4.mp3";
import b from "./notes/b3.mp3";
import { useEffect } from "react";

const playSound = (note) => {
  switch (note) {
    case "Do": {
      const audio = new Audio(c);
      audio.play();
      break;
    }
    case "Do#": {
      const audio = new Audio(cs);
      audio.play();
      break;
    }
    case "Re": {
      const audio = new Audio(d);
      audio.play();
      break;
    }
    case "Re#": {
      const audio = new Audio(ds);
      audio.play();
      break;
    }
    case "Mi": {
      const audio = new Audio(e);
      audio.play();
      break;
    }
    case "Fa": {
      const audio = new Audio(f);
      audio.play();
      break;
    }
    case "Fa#": {
      const audio = new Audio(fs);
      audio.play();
      break;
    }
    case "Sol": {
      const audio = new Audio(g);
      audio.play();
      break;
    }
    case "Sol#": {
      const audio = new Audio(gs);
      audio.play();
      break;
    }
    case "La": {
      const audio = new Audio(a);
      audio.play();
      break;
    }
    case "La#": {
      const audio = new Audio(as);
      audio.play();
      break;
    }
    case "Si": {
      const audio = new Audio(b);
      audio.play();
      break;
    }
    default: {
      console.log("error");
      break;
    }
  }
};

function App() {
  const handleNote = ({ target }) => {
    playSound(target.innerText);
  };
  useEffect(() => {
    document.addEventListener("keydown", ({ code }) => {
      switch (code) {
        case "KeyA": {
          playSound("Do");
          break;
        }
        case "KeyW": {
          playSound("Do#");
          break;
        }
        case "KeyS": {
          playSound("Re");
          break;
        }
        case "KeyE": {
          playSound("Re#");
          break;
        }
        case "KeyD": {
          playSound("Mi");
          break;
        }
        case "KeyF": {
          playSound("Fa");
          break;
        }
        case "KeyT": {
          playSound("Fa#");
          break;
        }
        case "KeyG": {
          playSound("Sol");
          break;
        }
        case "KeyY": {
          playSound("Sol#");
          break;
        }
        case "KeyH": {
          playSound("La");
          break;
        }
        case "KeyU": {
          playSound("La#");
          break;
        }
        case "KeyJ": {
          playSound("Si");
          break;
        }

        default: {
          console.log("Tecla no admitida");
          break;
        }
      }
    });
  }, []);
  return (
    <div>
      <h3 style={{ color: "rgba(255, 255, 255, 0.692)", textAlign: "center" }}>
        Presiona las teclas de la A-W-S-E-D-F-T-G-Y-H-J para tocar.
      </h3>
      <ul className="set">
        <li onClick={handleNote} className="white c">
          <p className="white-key">Do</p>
        </li>
        <li onClick={handleNote} className="black cs">
          <p className="black-key">Do#</p>
        </li>
        <li onClick={handleNote} className="white d">
          <p className="white-key">Re</p>
        </li>
        <li onClick={handleNote} className="black ds">
          <p className="black-key">Re#</p>
        </li>
        <li onClick={handleNote} className="white e">
          <p className="white-key">Mi</p>
        </li>
        <li onClick={handleNote} className="white f">
          <p className="white-key">Fa</p>
        </li>
        <li onClick={handleNote} className="black fs">
          <p className="black-key">Fa#</p>
        </li>
        <li onClick={handleNote} className="white g">
          <p className="white-key">Sol</p>
        </li>
        <li onClick={handleNote} className="black gs">
          <p className="black-key">Sol#</p>
        </li>
        <li onClick={handleNote} className="white a">
          <p className="white-key">La</p>
        </li>
        <li onClick={handleNote} className="black as">
          <p className="black-key">La#</p>
        </li>
        <li onClick={handleNote} className="white b">
          <p className="white-key">Si</p>
        </li>
      </ul>
    </div>
  );
}

export default App;
