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
    
    // Extract number and suffix from the 'to' value
    const getSuffixAndNumber = (value: string | number) => {
        if (typeof value === 'string') {
            const match = value.match(/^(\d+\.?\d*)(.*)$/);
            if (match) {
                return {
                    number: parseFloat(match[1]),
                    suffix: match[2]
                };
            }
        }
        return {
            number: Number(value),
            suffix: ''
        };
    };

    const toValue = getSuffixAndNumber(to);
    const fromValue = getSuffixAndNumber(from);
    
    const motionValue = useMotionValue(Number(direction === "down" ? toValue.number : fromValue.number));

    // Calculate damping and stiffness based on duration
    const damping = 20 + 40 * (1 / duration);
    const stiffness = 100 * (1 / duration);

    const springValue = useSpring(motionValue, {
        damping,
        stiffness,
    });

    const isInView = useInView(ref, { once: true, margin: "0px" });

    // Set initial text content
    useEffect(() => {
        if (ref.current) {
            const initialValue = direction === "down" ? toValue : fromValue;
            ref.current.textContent = `${initialValue.number}${initialValue.suffix}`;
        }
    }, [from, to, direction, toValue, fromValue]);

    // Start the animation when in view and startWhen is true
    useEffect(() => {
        if (isInView && startWhen) {
            if (typeof onStart === "function") {
                onStart();
            }

            const timeoutId = setTimeout(() => {
                motionValue.set(Number(direction === "down" ? fromValue.number : toValue.number));
            }, delay * 100);

            const durationTimeoutId = setTimeout(() => {
                if (typeof onEnd === "function") {
                    onEnd();
                }
            }, delay * 100 + duration * 100);

            return () => {
                clearTimeout(timeoutId);
                clearTimeout(durationTimeoutId);
            };
        }
    }, [isInView, startWhen, motionValue, direction, fromValue.number, toValue.number, delay, onStart, onEnd, duration]);

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

                const displayNumber = separator
                    ? formattedNumber.replace(/,/g, separator)
                    : formattedNumber;

                ref.current.textContent = `${displayNumber}${toValue.suffix}`;
            }
        });

        return () => unsubscribe();
    }, [springValue, separator, toValue.suffix]);

    return <span className={`${className}`} ref={ref} />;
}