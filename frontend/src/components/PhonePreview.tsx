type PhonePreviewProps = {
  src: string
  alt: string
  viewBox: string
}

// Viewports exclude the exports' transparent margins without modifying the PNGs.
// Every viewport has the same dimensions, keeping the devices consistently sized.
const PhonePreview = ({ src, alt, viewBox }: PhonePreviewProps) => (
  <svg
    viewBox={viewBox}
    role="img"
    aria-label={alt}
    className="block h-auto w-full"
  >
    <image href={src} width="2160" height="2160" />
  </svg>
)

export default PhonePreview
