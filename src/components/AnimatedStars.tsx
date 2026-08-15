const LAYERS = [
  { count: 60, size: 1, duration: 180, opacity: 0.5 },
  { count: 40, size: 1.6, duration: 120, opacity: 0.75 },
  { count: 20, size: 2.4, duration: 80, opacity: 0.95 },
];

function seeded(i: number, salt: number) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function layerShadow(count: number, salt: number) {
  const parts: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = (seeded(i, salt) * 100).toFixed(3);
    const y = (seeded(i, salt + 1) * 100).toFixed(3);
    const o = (0.35 + seeded(i, salt + 2) * 0.65).toFixed(2);
    parts.push(`${x}vw ${y}vh 0 0 rgba(255,255,255,${o})`);
  }
  return parts.join(", ");
}

export function AnimatedStars() {
  return (
    <div aria-hidden="true" className="star-field">
      <div className="star-glow" />
      {LAYERS.map((layer, idx) => (
        <div key={idx} className="star-layer-wrap">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="star-layer"
              style={{
                top: `${dup * 100}vh`,
                width: `${layer.size}px`,
                height: `${layer.size}px`,
                boxShadow: layerShadow(layer.count, idx + 1 + dup * 17),
                opacity: layer.opacity,
                animationDuration: `${layer.duration}s`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default AnimatedStars;
