import { useState } from 'react';

// =============================================
// CODE BLOCK COMPONENT
// =============================================

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-1.5 rounded bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs"
      >
        {copied ? '✓ Copied' : 'Copy'}
      </button>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
}

// =============================================
// SHOWCASE WRAPPER WITH CODE
// =============================================

export function Showcase({ title, description, code, children }: {
  title: string;
  description?: string;
  code?: string;
  children: React.ReactNode;
}) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {code && (
            <button
              onClick={() => setShowCode(!showCode)}
              className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
            >
              {showCode ? '◁ Hide Code' : '▷ Show Code'}
            </button>
          )}
        </div>
        {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
        <div className="overflow-visible">{children}</div>
      </div>
      {code && showCode && (
        <div className="border-t border-gray-200 p-4 bg-gray-50 overflow-hidden rounded-b-lg">
          <CodeBlock code={code} />
        </div>
      )}
    </section>
  );
}

export function PropsTable({ title = 'Props', props }: { title?: string; props: any[] }) {
  return (
    <section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-500 uppercase bg-gray-50">
              <tr>
                <th className="px-4 py-3">Prop</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Default</th>
                <th className="px-4 py-3">Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr key={prop.name} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-primary-600">{prop.name}</td>
                  <td className="px-4 py-3 text-purple-600 font-mono text-xs">{prop.type}</td>
                  <td className="px-4 py-3 text-gray-500 font-mono text-xs">{prop.default || '-'}</td>
                  <td className="px-4 py-3 text-gray-600">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
