import { gsap } from 'gsap';

export const runLoaderSplitAnimation = (
  topElement: HTMLDivElement | null,
  bottomElement: HTMLDivElement | null,
  onComplete: () => void
) => {
  if (!topElement || !bottomElement) return;

  const tl = gsap.timeline({
    onComplete,
  });

  tl.to(topElement, {
    yPercent: -100,
    duration: 1,
    ease: 'power4.inOut',
  }, 0)
    .to(bottomElement, {
      yPercent: 100,
      duration: 1,
      ease: 'power4.inOut',
    }, 0);

  return tl;
};
