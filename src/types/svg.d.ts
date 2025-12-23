declare module '*.svg?url' {
  const content: import('next/dist/shared/lib/get-img-props').StaticImageData;
  export default content;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
declare module '*.webp' {
  const content: import('next/dist/shared/lib/get-img-props').StaticImageData;
  export default content;
}