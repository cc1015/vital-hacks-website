export function useSmoothScroll() {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with id "${id}" not found.`);
      return;
    }

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return { scrollToId };
}

