/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import {useState} from 'react'
import {ShowDetails} from './shows/ShowDetails'
export default function App() {
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        {<ShowDetails />}

      </main>
    </>
  );
}
