"use client";

import {useEffect} from "react";

export default function Cursor() {
    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        document.body.appendChild(cursor);

        const cursorCircle = document.createElement('div');
        cursorCircle.id = 'custom-cursor-circle';
        document.body.appendChild(cursorCircle);

        let mouseX = 0;
        let mouseY = 0;
        let circleX = 0;
        let circleY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        function animateCircle() {
            circleX += (mouseX - circleX) * 0.3;
            circleY += (mouseY - circleY) * 0.3;

            cursorCircle.style.left = `${circleX}px`;
            cursorCircle.style.top = `${circleY}px`;

            requestAnimationFrame(animateCircle);
        }

        animateCircle();
    }, []);

    return null;
}