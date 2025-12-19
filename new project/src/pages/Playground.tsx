import { useState } from 'react';
import { Play, Download, Share2, RotateCcw, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const templates = [
  { id: 'html', name: 'HTML/CSS', code: '<div class="container">\n  <h1>Hello World!</h1>\n  <p>Start coding here...</p>\n</div>', language: 'html' },
  { id: 'js', name: 'JavaScript', code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("World"));', language: 'javascript' },
  { id: 'react', name: 'React', code: 'function App() {\n  return (\n    <div>\n      <h1>Hello React!</h1>\n    </div>\n  );\n}', language: 'jsx' },
  { id: 'python', name: 'Python', code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("World"))', language: 'python' },
];

export default function Playground() {
  const [selectedTemplate, setSelectedTemplate] = useState(templates[0]);
  const [code, setCode] = useState(selectedTemplate.code);
  const [output, setOutput] = useState('');
  const [cssCode, setCssCode] = useState('.container {\n  padding: 20px;\n  text-align: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 10px;\n}');

  const runCode = () => {
    if (selectedTemplate.id === 'html') {
      const fullHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>${code}</body>
        </html>
      `;
      setOutput(fullHtml);
    } else if (selectedTemplate.id === 'js') {
      try {
        const logs: string[] = [];
        const customConsole = {
          log: (...args: any[]) => logs.push(args.join(' ')),
          error: (...args: any[]) => logs.push(`Error: ${args.join(' ')}`),
        };
        const wrappedCode = `
          (function(console) {
            ${code}
          })(customConsole);
        `;
        eval(wrappedCode.replace('customConsole', 'customConsole'));
        setOutput(logs.join('\n') || 'Code executed successfully!');
      } catch (error: any) {
        setOutput(`Error: ${error.message}`);
      }
    } else {
      setOutput('Preview not available for this language. Code saved!');
    }
  };

  const resetCode = () => {
    setCode(selectedTemplate.code);
    setCssCode('.container {\n  padding: 20px;\n  text-align: center;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-radius: 10px;\n}');
    setOutput('');
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-white text-5xl mb-2">Code Playground</h1>
          <p className="text-gray-400 text-lg">
            Write, run, and experiment with code in real-time
          </p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            <Share2 className="w-5 h-5" />
          </button>
          <button onClick={resetCode} className="p-3 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>
      </motion.div>

      {/* Template Selector */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {templates.map(template => (
          <button
            key={template.id}
            onClick={() => {
              setSelectedTemplate(template);
              setCode(template.code);
              setOutput('');
            }}
            className={`
              px-6 py-3 rounded-lg whitespace-nowrap transition-all
              ${selectedTemplate.id === template.id
                ? 'bg-gradient-to-r from-[#3b82f6] to-[#10b981] text-white'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }
            `}
          >
            {template.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="space-y-4">
          <GlassCard className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white text-lg">Editor</h3>
              <GradientButton onClick={runCode} size="sm" variant="success">
                <Play className="w-4 h-4 mr-2 inline" />
                Run Code
              </GradientButton>
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 bg-[#0f0f23] border border-white/10 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
              spellCheck={false}
            />
          </GlassCard>

          {selectedTemplate.id === 'html' && (
            <GlassCard className="p-4">
              <h3 className="text-white text-lg mb-4">CSS Styles</h3>
              <textarea
                value={cssCode}
                onChange={(e) => setCssCode(e.target.value)}
                className="w-full h-48 p-4 bg-[#0f0f23] border border-white/10 rounded-lg text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6] resize-none"
                spellCheck={false}
              />
            </GlassCard>
          )}
        </div>

        {/* Output Preview */}
        <GlassCard className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white text-lg">Preview</h3>
            <button className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
          
          {selectedTemplate.id === 'html' && output ? (
            <div className="bg-white rounded-lg overflow-hidden h-[calc(100%-60px)]">
              <iframe
                srcDoc={output}
                className="w-full h-full border-0"
                title="preview"
                sandbox="allow-scripts"
              />
            </div>
          ) : (
            <div className="bg-[#0f0f23] border border-white/10 rounded-lg p-4 h-[calc(100%-60px)] overflow-auto">
              <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
                {output || 'Click "Run Code" to see output...'}
              </pre>
            </div>
          )}
        </GlassCard>
      </div>

      {/* Code Snippets */}
      <div>
        <h2 className="text-white text-2xl mb-4">Popular Snippets</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { title: 'Fetch API Example', language: 'JavaScript', lines: 8 },
            { title: 'CSS Grid Layout', language: 'CSS', lines: 12 },
            { title: 'React Component', language: 'React', lines: 15 },
          ].map((snippet, index) => (
            <GlassCard key={index} className="p-4 cursor-pointer" hover>
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-white">{snippet.title}</h4>
                <span className="px-2 py-1 rounded text-xs bg-[#3b82f6]/20 text-[#3b82f6]">
                  {snippet.language}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{snippet.lines} lines of code</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
