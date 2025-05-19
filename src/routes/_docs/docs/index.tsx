import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

export const Route = createFileRoute("/_docs/docs/")({
  component: DocsPage,
});

function DocsPage() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("typescript");

  return (
    <div className="docs-index">
      <h2>Welcome to the Documentation</h2>
      <p>
        This is the main page for the documentation section. Here you can find
        guides, tutorials, and references to help you get started.
      </p>
      <ul>
        <li>Getting Started Guide</li>
        <li>API Reference</li>
        <li>FAQs</li>
      </ul>

      {/* Basic styles */}
      <style>{`
      .docs-index {
        padding: 20px;
      }
      h2 {
        color: #333;
      }
      ul {
        list-style-type: disc;
        margin-left: 20px;
      }
    `}</style>
    </div>
  );
}
