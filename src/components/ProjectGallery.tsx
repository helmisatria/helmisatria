import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
} from "react";

type ProjectGalleryProps = {
  project: string;
  images: string[];
  imageWidth: number;
  imageHeight: number;
};

type PreviewPosition = {
  maxHeight: number;
  side: "bottom" | "top";
  x: number;
};

export function ProjectGallery({
  project,
  images,
  imageWidth,
  imageHeight,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [position, setPosition] = useState<PreviewPosition>({
    maxHeight: 520,
    side: "top",
    x: 0,
  });
  const closeTimer = useRef<number | undefined>(undefined);
  const menuRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const positionPreview = useCallback((index: number) => {
    const menu = menuRef.current;
    const preview = previewRef.current;
    const trigger = triggerRefs.current[index];

    if (!menu || !preview || !trigger) {
      return;
    }

    const menuRect = menu.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const previewWidth = preview.offsetWidth;
    const previewHeight = preview.offsetHeight;
    const centeredX = triggerRect.left - menuRect.left + triggerRect.width / 2 - previewWidth / 2;
    const maxX = Math.max(0, menuRect.width - previewWidth);
    const gap = 9;
    const viewportPadding = 8;
    const spaceAbove = menuRect.top - gap - viewportPadding;
    const spaceBelow = window.innerHeight - menuRect.bottom - gap - viewportPadding;
    let side: PreviewPosition["side"] = "top";

    if (spaceAbove < previewHeight && spaceBelow >= previewHeight) {
      side = "bottom";
    } else if (spaceAbove < previewHeight && spaceBelow < previewHeight) {
      side = spaceBelow > spaceAbove ? "bottom" : "top";
    }

    setPosition({
      maxHeight: Math.max(160, side === "top" ? spaceAbove : spaceBelow),
      side,
      x: Math.min(Math.max(0, centeredX), maxX),
    });
  }, []);

  const showPreview = useCallback(
    (index: number) => {
      window.clearTimeout(closeTimer.current);
      setDirection(activeIndex === null || index > activeIndex ? "right" : "left");
      setActiveIndex(index);
      window.requestAnimationFrame(() => positionPreview(index));
    },
    [activeIndex, positionPreview],
  );

  useEffect(() => {
    function repositionPreview() {
      if (activeIndex !== null) {
        positionPreview(activeIndex);
      }
    }

    window.addEventListener("resize", repositionPreview);
    return () => window.removeEventListener("resize", repositionPreview);
  }, [activeIndex, positionPreview]);

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  function closePreview() {
    closeTimer.current = window.setTimeout(() => setActiveIndex(null), 120);
  }

  function handleBlur(event: React.FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closePreview();
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      window.clearTimeout(closeTimer.current);
      setActiveIndex(null);
    }
  }

  const previewStyle = {
    "--preview-max-height": `${position.maxHeight}px`,
    "--preview-x": `${position.x}px`,
    "--preview-ratio": `${imageWidth} / ${imageHeight}`,
  } as CSSProperties;

  return (
    <div
      className="highlight-menu"
      data-project={project}
      ref={menuRef}
      onPointerEnter={() => window.clearTimeout(closeTimer.current)}
      onPointerLeave={closePreview}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <p className="highlight-hint">Hover, focus, or tap to preview.</p>
      <div
        className="highlight-preview"
        data-state={activeIndex === null ? "closed" : "open"}
        data-side={position.side}
        ref={previewRef}
        role="tooltip"
        style={previewStyle}
      >
        <div className="highlight-preview-media">
          {activeIndex !== null ? (
            <img
              className="highlight-preview-image"
              data-direction={direction}
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt=""
            />
          ) : null}
        </div>
        <p>
          {project} — screen {(activeIndex ?? 0) + 1} of {images.length}
        </p>
      </div>
      <div className="highlight-strip" aria-label={`${project} visual highlights`}>
        {images.map((image, index) => (
          <button
            className="highlight-trigger"
            data-active={activeIndex === index ? "true" : undefined}
            key={image}
            ref={(element) => {
              triggerRefs.current[index] = element;
            }}
            type="button"
            onPointerEnter={() => showPreview(index)}
            onFocus={() => showPreview(index)}
            onClick={() => showPreview(index)}
            aria-label={`Preview ${project} screen ${index + 1} of ${images.length}`}
          >
            <img
              src={image}
              alt=""
              width={imageWidth}
              height={imageHeight}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
