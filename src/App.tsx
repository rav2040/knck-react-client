import React, { useState } from 'react';
import 'fontsource-lobster/latin-400-normal.css';
import './bootstrap.min.css';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {
  const [result, setResult] = useState<string | null>(null);

  return (
    <React.Fragment>
      <main role="main" className="inner cover text-center">
        <div id="main-container" className="position-relative">
          <Title />
          {!result
            ? <Form setResult={setResult} />
            : <Result setResult={setResult} shortUrl={result} />
          }
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
