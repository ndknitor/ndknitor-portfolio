'use client'
import React, { useEffect, useRef } from 'react';

const DynamicBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (!canvasRef.current) {
            return;
        }

        // Get canvas element and context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
            return;
        }

        let X = canvas.width = window.innerWidth;
        let Y = canvas.height = window.innerHeight;

        // Random Number function
        function rand(min: number, max: number): number {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        // Shape class
        class Shape {
            x: number;
            y: number;
            r: number;
            ga: number;
            v: { x: number; y: number };
            l: number;
            sl: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.r = rand(10, 25);
                this.ga = Math.random() * Math.random() * Math.random() * Math.random();
                this.v = {
                    x: Math.random(),
                    y: -1,
                };
                this.l = rand(0, 20);
                this.sl = this.l;
            }

            init(x: number, y: number): void {
                this.x = x;
                this.y = y;
                this.r = rand(10, 25);
                this.ga = Math.random() * Math.random() * Math.random() * Math.random();
                this.v = {
                    x: Math.random(),
                    y: -1,
                };
                this.l = rand(0, 20);
                this.sl = this.l;
            }

            updateParams(): void {
                const ratio = this.l / this.sl;
                this.l -= 1;
                if (this.l < 0) {
                    this.init(X * (Math.random() + Math.random()) / 2, rand(0, Y));
                }
            }

            updatePosition(): void {
                this.x += Math.random();
                this.y += -Math.random();
            }

            draw(): void {
                if (ctx) {
                    ctx.save();
                    ctx.globalCompositeOperation = 'lighter';
                    ctx.globalAlpha = this.ga;
                    ctx.fillStyle = 'rgba(242, 0, 68)';
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                    ctx.fill();
                    ctx.restore();
                }
            }

            render(): void {
                this.updatePosition();
                this.updateParams();
                this.draw();
            }
        }

        const shapes: Shape[] = Array.from({ length: window.innerWidth < 600 ? 100 : 300 }, () =>
            new Shape(X * (Math.random() + Math.random()) / 2, rand(0, Y))
        );

        function render(): void {
            ctx && ctx.clearRect(0, 0, X, Y);
            shapes.forEach((shape, i) => shape.render());
            requestAnimationFrame(render);
        }

        render();

        function onResize(): void {
            X = canvas.width = window.innerWidth;
            Y = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };

    }, []); // Empty dependency array ensures useEffect runs only once

    return <canvas ref={canvasRef} style={{
        display: 'block',
        position: '-webkit-sticky',
        height: '100vh',
        width: "100%"
    }} />;
};

export default DynamicBackground;
