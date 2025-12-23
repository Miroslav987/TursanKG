'use client'

export const scrollToElement = (
  selector: string | HTMLElement,
  options: ScrollIntoViewOptions = { behavior: 'smooth', block: 'start' }
) => {
  if (typeof window === 'undefined') return

  let element: HTMLElement | null = null

  if (typeof selector === 'string') {
    element = document.querySelector(selector) 
      || document.getElementById(selector.replace('#', ''));
  } else {
    element = selector
  }

  if (element) {
    element.scrollIntoView(options);
  } else {
    console.warn(`Element not found for selector: ${selector}`);
  }
}