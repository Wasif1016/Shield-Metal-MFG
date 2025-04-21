"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
    to: number | string;
    from?: number | string;
    direction?: "up" | "down";
    delay?: number;
    duration?: number;
    className?: string;
    startWhen?: boolean;
    separator?: string;
    onStart?: () => void;
    onEnd?: () => void;
}

export default function CountUp({
    to,
    from = 0,
    direction = "up",
    delay = 0,
    duration = 2, // Duration of the animation in seconds
    className = "",
    startWhen = true,
    separator = "",
    onStart,
    onEnd,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    
    // Convert string values to numbers safely
    const toNumber = typeof to === 'string' ? parseFloat(to.replace(/[^\d.-]/g, '')) || 0 : to;
    const fromNumber = typeof from === 'string' ? parseFloat(from.replace(/[^\d.-]/g, '')) || 0 : from;
    
    const motionValue = useMotionValue(Number(direction === "down" ? toNumber : fromNumber));

    // Calculate damping and stiffness based on duration
    const damping = 20 + 40 * (1 / duration); // Adjust this formula for finer control
    const stiffness = 100 * (1 / duration);   // Adjust this formula for finer control

    const springValue = useSpring(motionValue, {
        damping,
        stiffness,
    });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    // Set initial text content to the initial value based on direction
    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = String(direction === "down" ? to : from);
        }
    }, [from, to, direction]);

    // Start the animation when in view and startWhen is true
    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === "function") {
                onStart();
            }

            const timeoutId = setTimeout(() => {
                motionValue.set(Number(direction === "down" ? fromNumber : toNumber));
            }, delay * 1000);

            const durationTimeoutId = setTimeout(() => {
                if (typeof onEnd === "function") {
                    onEnd();
                }
            }, delay * 1000 + duration * 1000);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(durationTimeoutId);
            };
        }
    }, [isInView, startWhen, motionValue, direction, fromNumber, toNumber, delay, onStart, onEnd, duration]);

    // Update text content with formatted number on spring value change
    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (ref.current) {
                const options = {
                    useGrouping: !!separator,
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                };

                const formattedNumber = Intl.NumberFormat("en-US", options).format(
                    Math.abs(latest)
                );

                ref.current.textContent = typeof to === 'string' && latest >= toNumber
                    ? to 
                    : separator
                        ? formattedNumber.replace(/,/g, separator)
                        : formattedNumber;
            }
        });

        return () => unsubscribe();
    }, [springValue, separator, to, toNumber]);

    return <span className={`${className}`} ref={ref} />;
}