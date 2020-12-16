import React from 'react';

export default function Footer() {
  return (
    <footer className="mastfoot mt-auto">
      <div className="container text-muted py-4">
        <div className="row justify-content-center">
          <div className="col-auto px-1">
            <p>Powered by <a href="https://tuft.dev" target="_blank" rel="noopener">Tuft</a>.</p>
          </div>
          <div className="col-auto px-1">
            <p>&copy; 2020 Stuart Kennedy.</p>
          </div>
        </div>
        <div className="row justify-content-center d-flex align-items-center">
          <p>View the project on <a href="https://github.com/rav2040/knck" target="_blank" rel="noopener">GitHub</a>.</p>
        </div>
      </div>
    </footer>
  );
}
