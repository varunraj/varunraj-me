"use client";

import { useEffect, useId, useState } from "react";
import mermaid from "mermaid";

type MermaidDiagramProps = {
  chart: string;
};

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<string>("");
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    let isMounted = true;

    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      securityLevel: "loose",
    });

    mermaid
      .render(`mermaid-${id}`, chart)
      .then((result) => {
        if (isMounted) {
          setSvg(result.svg);
          setError("");
        }
      })
      .catch((err: unknown) => {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Failed to render diagram");
          setSvg("");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [chart, id]);

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
        Mermaid render error: {error}
      </div>
    );
  }

  return (
    <div
      className="my-4 overflow-x-auto rounded-lg border border-gray-200 bg-white p-4"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
