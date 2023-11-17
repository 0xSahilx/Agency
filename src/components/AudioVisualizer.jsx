import { useEffect, useRef } from "react";

const AudioVisualizer = () => {
  const canvasRef = useRef();
  const ctxRef = useRef();
  const cwRef = useRef();
  const chRef = useRef();

  useEffect(() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    const frequencies = [
      4186.01, 3951.07, 3729.31, 3520.0, 3322.44, 3135.96, 2959.96, 2793.83,
      2637.02, 2489.02, 2349.32, 2217.46, 2093.0, 1975.53, 1864.66, 1760.0,
      1661.22, 1567.98, 1479.98, 1396.91, 1318.51, 1244.51, 1174.66, 1108.73,
      1046.5, 987.767, 932.328, 880.0, 830.609, 783.991, 739.989, 698.456,
      659.255, 622.254, 587.33, 554.365, 523.251, 493.883, 466.164, 440.0,
      415.305, 391.995, 369.994, 349.228, 329.628, 311.127, 293.665, 277.183,
      261.626, 246.942, 233.082, 220.0, 207.652, 195.998, 184.997, 174.614,
      164.814, 155.563, 146.832, 138.591, 130.813, 123.471, 116.541, 110.0,
      103.826, 97.9989, 92.4986, 87.3071, 82.4069, 77.7817, 73.4162, 69.2957,
      65.4064, 61.7354, 58.2705, 55.0, 51.913, 48.9995, 46.2493, 43.6536,
      41.2035, 38.8909, 36.7081, 34.6479,
    ];

    const symbols = ["\u2669", "\u266a", " \u266b", "\u266c"];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctxRef.current = ctx;

    const cw = (canvas.width = window.innerWidth);
    // eslint-disable-next-line no-unused-vars
    const cx = cw / 2;
    const ch = (canvas.height = window.innerHeight);
    // eslint-disable-next-line no-unused-vars
    const cy = ch / 2;

    cwRef.current = cw;
    chRef.current = ch;

    let requestId = null;
    const rad = Math.PI / 180;

    const rects = [];
    const notes = [];
    const particles = [];

    class Rect {
      constructor(x, y, freq) {
        this.w = cw / 12;
        this.h = ch / 7;
        this.x = x;
        this.y = y;
        // audio
        this.stop = true;
        this.frequency = freq; // la frecuencia
        this.waveform = "triangle"; // la forma de onda
        this.dur = 0.75; // la duración en segundos
        this.initialGain = 0.15;
      }

      play() {
        // crea un nuevo oscillator
        this.oscillator = audioCtx.createOscillator();
        // crea un nuevo nodo de ganancia
        this.gain = audioCtx.createGain();
        // establece el valor inicial del volumen del sonido
        this.gain.gain.value = this.initialGain;
        // establece el tipo de oscillator
        this.oscillator.type = this.waveform;
        // y el valor de la frecuencia
        this.oscillator.frequency.value = this.frequency;
        // el volumen del sonido baja exponencialmente
        this.gain.gain.exponentialRampToValueAtTime(
          0.01,
          audioCtx.currentTime + this.dur
        );
        // conecta el oscillator con el nodo de ganancia
        this.oscillator.connect(this.gain);
        // y la ganancia con el dispositivo de destino
        this.gain.connect(audioCtx.destination);
        // inicia el oscillator
        this.oscillator.start(audioCtx.currentTime);
        this.stop = false;
        // para el oscillator después de un tiempo (this.dur)
        this.oscillator.stop(audioCtx.currentTime + this.dur);
        this.oscillator.onended = () => (this.stop = true);
      }

      update(cw, ch) {
        this.w = cw / 12;
        this.h = ch / 7;
      }

      isPointInPath(m) {
        let x = this.x * this.w;
        let y = this.y * this.h;
        ctx.beginPath();
        ctx.rect(x, y, this.w, this.h);
        if (ctx.isPointInPath(m.x, m.y) & this.stop) {
          this.play();
        }
      }
    }

    for (let y = 0; y < 7; y++) {
      for (let x = 0; x < 12; x++) {
        let freq = frequencies[rects.length];
        let r = new Rect(x, y, freq);

        rects.push(r);
      }
    }

    class Particle {
      constructor() {
        this.r = 50 + Math.random() * 100;
        this.x = this.r + Math.random() * (cw - this.r);
        this.y = Math.random() * ch;
        this.speed = 0.5 + Math.random() * 2;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = grd();
        ctx.fill();
      }
      update() {
        if (this.y < -this.r) {
          this.y = ch + this.r;
          this.x = this.r + Math.random() * (cw - this.r);
        }
        this.y -= this.speed;
      }
    }

    for (let i = 0; i < 20; i++) {
      let p = new Particle();
      particles.push(p);
    }

    class Note {
      constructor(m) {
        /* eslint-disable no-unused-vars */
        this.text = symbols[~~(Math.random() * symbols.length)];
        this.x = m.x;
        this.y = m.y;
        this.fontSize = 10 + ~~(Math.random() * 40);
        this.alp = 1;
        this.speed = Math.random() + 0.5;
        this.frames = Math.random() * 360;
        this.angle = (Math.sin(frames * rad) * Math.PI) / 2; //Math.random()*2*Math.PI;
        /* eslint-enable no-unused-vars */
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.font = this.fontSize + "px Verdana";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `rgba(0, 0, 0, ${this.alp})`;
        ctx.fillText(this.text, 0, 0);
        ctx.restore();
      }

      update() {
        this.frames++;
        this.fontSize += 0.1;
        this.alp -= 0.01;
        this.angle = (Math.sin(this.frames * rad) * Math.PI) / 2;
        this.y -= this.speed;
        this.x += Math.sin(this.frames * rad);
      }
    }

    function Draw() {
      requestId = window.requestAnimationFrame(Draw);
      ctx.clearRect(0, 0, cw, ch);
      particles.map((p) => {
        p.update();
        p.draw();
      });
      notes.map((n, index) => {
        n.update();
        n.draw();
        if (n.alp <= 0) {
          notes.splice(index, 1);
        }
      });
    }

    function Init() {
      if (requestId) {
        window.cancelAnimationFrame(requestId);
        requestId = null;
      }

      let cw = (canvas.width = window.innerWidth);
      // eslint-disable-next-line no-unused-vars
      let w = cw / 12;
      // eslint-disable-next-line no-unused-vars
      let ch = (canvas.height = window.innerHeight);
      // eslint-disable-next-line no-unused-vars
      let h = ch / 7;
      rects.map((r) => r.update(cw, ch));
      particles.map((p) => p.update());
      Draw();
    }

    setTimeout(function () {
      Init();
      window.addEventListener("resize", Init, false);
    }, 15);

    canvas.addEventListener("mousemove", function (evt) {
      let m = oMousePos(canvas, evt);
      rects.map((r) => r.isPointInPath(m)); //sound

      if (Math.random() < 0.4) {
        //notes
        let note = new Note(m);
        notes.push(note);
      }
    });

    function grd() {
      let grd = ctx.createLinearGradient(0, 0, canvas.width, 0);
      grd.addColorStop(0, "rgba(255, 135, 1, 0)"); // Transparent orange
      grd.addColorStop(1, "rgba(255, 172, 2, 0)"); // Transparent gold
      return grd;
    }

    function oMousePos(canvas, evt) {
      var ClientRect = canvas.getBoundingClientRect();
      return {
        //objeto
        x: Math.round(evt.clientX - ClientRect.left),
        y: Math.round(evt.clientY - ClientRect.top),
      };
    }

    return () => {
      // Cleanup logic here
      if (requestId) {
        window.cancelAnimationFrame(requestId);
      }
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <div>
      <canvas
        ref={canvasRef}
        id="canvas"
        className="w-full h-full top-0 left-0 fixed"
        // style={{
        //   background:
        //     "radial-gradient(farthest-corner circle at left bottom, #ffbf02, #ff7f01)",
        // }}
      />
    </div>
  );
};

export default AudioVisualizer;
