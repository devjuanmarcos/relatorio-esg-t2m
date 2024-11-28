"use client";
import { useState, useEffect, useCallback, useRef } from "react";

export const useInView = (threshold: number = 0.5) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null); // Criar a referência para o elemento

  const onChange = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setIsInView(true);
    } else {
      setIsInView(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, {
      threshold,
    });
    const element = ref.current; // Referência ao elemento

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [onChange]);

  return { ref, isInView }; // Retorna a referência e o estado de visibilidade
};
