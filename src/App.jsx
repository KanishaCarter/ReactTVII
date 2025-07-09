/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import {useState} from 'react'
import ShowSelection from './shows/ShowSelection'

export default function App() {
  return (
    <>
      <header>
        <p>React TV</p>
      </header>
      <main>
        <ShowSelection />
      </main>
    </>
  );
}
