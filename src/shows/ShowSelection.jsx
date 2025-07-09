/*
export const tvShows = [
  {
    name: "Galactic Odyssey",
    genre: "Sci-Fi",
    episodes: [
*/

import "./shows.css";
import { useState } from 'react'
import { tvShows } from "./data";
import { ShowDetails } from './ShowDetails'

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection() {

  const [show , setShow] = useState(null);

  return (
  <nav className="shows">
    {tvShows.map((show)=> {
      <p key={show.name} onClick={()=> setShow(show)}>{show.name}</p>}
    )}
    <ShowDetails show={show.name} />
  </nav>
  )
}
