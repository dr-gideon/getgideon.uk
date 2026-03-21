// Procedural lightning background — amber bolts that strike and fade
(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'lightning-bg';
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:0.30;';
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Lightning bolt data
  const bolts = [];

  function createBolt() {
    // Random start point along top third
    const x = Math.random() * W;
    const y = Math.random() * H * 0.15;
    const segments = [];
    let cx = x, cy = y;
    const targetY = y + H * (0.3 + Math.random() * 0.5);
    const steps = 8 + Math.floor(Math.random() * 12);

    for (let i = 0; i < steps; i++) {
      const ny = cy + (targetY - y) / steps;
      const nx = cx + (Math.random() - 0.5) * 120;
      segments.push({ x1: cx, y1: cy, x2: nx, y2: ny });
      cx = nx;
      cy = ny;

      // Occasional branch
      if (Math.random() < 0.25) {
        const bx = cx + (Math.random() - 0.5) * 80;
        const by = cy + 20 + Math.random() * 60;
        segments.push({ x1: cx, y1: cy, x2: bx, y2: by, branch: true });
      }
    }

    return {
      segments,
      life: 1.0,
      decay: 0.015 + Math.random() * 0.025,
      width: 1.5 + Math.random() * 2.5,
    };
  }

  function drawBolt(bolt) {
    const alpha = bolt.life;
    bolt.segments.forEach(function (s) {
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
      ctx.strokeStyle =
        'rgba(255,176,0,' + alpha * (s.branch ? 0.4 : 1) + ')';
      ctx.lineWidth = s.branch ? bolt.width * 0.6 : bolt.width;
      ctx.stroke();
    });

    // Glow pass
    bolt.segments.forEach(function (s) {
      if (s.branch) return;
      ctx.beginPath();
      ctx.moveTo(s.x1, s.y1);
      ctx.lineTo(s.x2, s.y2);
      ctx.strokeStyle = 'rgba(255,176,0,' + alpha * 0.45 + ')';
      ctx.lineWidth = bolt.width * 5;
      ctx.stroke();
    });
  }

  // Timing
  let nextBolt = 1000 + Math.random() * 2000;
  let lastTime = performance.now();

  function loop(now) {
    const dt = now - lastTime;
    lastTime = now;
    nextBolt -= dt;

    if (nextBolt <= 0) {
      bolts.push(createBolt());
      // Sometimes double-strike
      if (Math.random() < 0.3) {
        setTimeout(function () {
          bolts.push(createBolt());
        }, 50 + Math.random() * 100);
      }
      nextBolt = 2000 + Math.random() * 4000;
    }

    ctx.clearRect(0, 0, W, H);

    for (let i = bolts.length - 1; i >= 0; i--) {
      bolts[i].life -= bolts[i].decay;
      if (bolts[i].life <= 0) {
        bolts.splice(i, 1);
      } else {
        drawBolt(bolts[i]);
      }
    }

    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
