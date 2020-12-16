import type { Dispatch, SetStateAction } from 'react';

import React, { useState, useRef } from 'react';
import copy from 'copy-to-clipboard';

interface ResultProps {
  setResult: Dispatch<SetStateAction<string | null>>;
  shortUrl: string;
}

export default function Result({ setResult, shortUrl }: ResultProps) {
  const copyBtnRef = useRef(null);
  const [urlCopied, setUrlCopied] = useState(false);

  const displayUrl = shortUrl.replace(/^https?:\/\//, '' );

  const copyToClipboard = () => {
    copy(shortUrl);
    //@ts-ignore
    copyBtnRef.current.blur();
    setUrlCopied(true);
  };

  const backToHome = () => (setResult(null));

  const copyBtnClassList = [
    'btn',
    'text-no-wrap',
    !urlCopied ? 'btn-primary' : 'btn-success',
  ];

  return (
    <div id="result-container" className="pt-5">
      <p className="my-0">Your new short URL is</p>
      <h3 id="short-url" className="align-middle my-3">{displayUrl}</h3>
      <div className="container-fluid py-3 my-3">
        <div className="row justify-content-center no-gutters">
          <div className="col-auto px-2">
            <button
              ref={copyBtnRef}
              type="button"
              id="copy-btn"
              className={copyBtnClassList.join(' ')}
              onClick={copyToClipboard}
            >
              {!urlCopied ? 'Copy' : 'Copied'}
            </button>
          </div>
          <div className="col-auto px-2">
            <button id="home-link" className="btn btn-secondary text-no-wrap" onClick={backToHome}>
              "Knck" Another URL
            </button>
          </div>
        </div>
      </div>
      <p><em>Short URLs expire automatically after 30 days.</em></p>
    </div>
  );
}
