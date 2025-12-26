'use client';
import { useEffect, useRef } from 'react';
import styles from './Snowfall.module.scss';

interface SnowfallProps {
  count?: number;
}

const Snowfall = ({ count = 200 }: SnowfallProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let snowHeight = 0; // Текущая высота сугроба
    let drift = 0;      // Для плавной анимации волн сугроба

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Snowflake {
      x = 0; y = 0; radius = 0; speed = 0; wind = 0; opacity = 0;

      constructor() { this.reset(true); }

      // initial = true если это первая генерация (раскидать по всему экрану)
      reset(initial = false) {
        this.x = Math.random() * canvas!.width;
        this.y = initial ? Math.random() * canvas!.height : -10;
        this.radius = Math.random() * 2.5 + 1; // Разные размеры
        this.speed = Math.random() * 1 + 0.5;
        this.wind = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.y += this.speed;
        this.x += this.wind;

        // Проверка: коснулась ли снежинка сугроба
        if (this.y > canvas!.height - snowHeight) {
          this.reset();
          // Медленно увеличиваем сугроб (макс 120px)
          if (snowHeight < 120) snowHeight += 0.02; 
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const snowflakes = Array.from({ length: count }, () => new Snowflake());

    // Отрисовка сугроба
    const drawSnowDrift = () => {
      if (!ctx) return;
      drift += 0.005;

      ctx.save();
      ctx.fillStyle = 'white';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      // Рисуем волнистый сугроб через синусоиду
      for (let i = 0; i <= canvas.width; i += 10) {
        const wave = Math.sin(i * 0.005 + drift) * 8; // Высота неровностей
        ctx.lineTo(i, canvas.height - snowHeight + wave);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Сначала рисуем сугроб, потом снежинки
      drawSnowDrift();

      snowflakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return <canvas ref={canvasRef} className={styles.canvasContainer} />;
};

export default Snowfall;