import type { Dispatch, SetStateAction } from 'react';

import React, { useState } from 'react';
import { stringify as qsStringify } from 'querystring';

interface FormProps {
  setResult: Dispatch<SetStateAction<string | null>>;
}

const API_ENDPOINT = 'https://knck.xyz/';

export default function Form({ setResult }: FormProps) {
  const [url, setUrl] = useState('');

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: qsStringify({ jsonResponse: true, url }),
      });

      const result = await response.json();

      setResult(result.shortUrl);
    }

    catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      <br />
      <h4 id="subtitle" className="text-muted">URL too long? <span className="text-dark"><em>Kn</em></span>o<span className="text-dark"><em>ck</em></span> it down to size!</h4>
      <form id="form" className="pt-3" onSubmit={handleSubmit}>
        <div className="form-group col-md-2 mx-auto px-1">
          <input
            type="url"
            className="form-control px-3 py-4"
            id="url"
            placeholder="Enter a URL"
            name="url"
            value={url}
            onChange={handleUrlChange}
          />
          <button type="submit" className="btn btn-primary btn-lg my-3 text-no-wrap">
            Shorten
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
