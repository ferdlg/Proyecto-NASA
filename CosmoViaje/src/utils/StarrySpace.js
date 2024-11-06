const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];
const DEFAULT_STAR_COUNT = 400;

export const generateSpaceLayer = (size, container, starCount = DEFAULT_STAR_COUNT, duration) => {
    const layer = [];
    for (let i = 0; i < starCount; i++) {
        const color = COLORS[Math.floor(Math.random() * COLORS.length)];
        const x = Math.floor(Math.random() * 200);
        const y = Math.floor(Math.random() * 200);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 200}vh 0 ${color}`);
    }

    if (container && container instanceof HTMLElement) {
        container.style.setProperty("--space-layer", layer.join(","));
        container.style.setProperty("--size", size);
        container.style.setProperty("--duration", duration);
    } else {
        console.error("El contenedor proporcionado no es un elemento válido o no está definido.");
    }
};
