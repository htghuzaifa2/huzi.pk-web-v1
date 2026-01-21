"use client";

import { useEffect, useRef } from "react";
import { useLightbox } from "@/context/lightbox-context";

interface BlogContentProps {
    content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { openLightbox } = useLightbox();

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const images = container.querySelectorAll("img");
        const imageUrls = Array.from(images).map((img) => img.src);

        const handleImageClick = (index: number) => () => {
            openLightbox(imageUrls, index, "Blog Image");
        };

        images.forEach((img, index) => {
            img.style.cursor = "zoom-in";
            img.addEventListener("click", handleImageClick(index));
        });

        return () => {
            images.forEach((img, index) => {
                img.removeEventListener("click", handleImageClick(index));
            });
        };
    }, [content, openLightbox]);

    return (
        <div
            ref={containerRef}
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
