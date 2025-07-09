/*### ShowDetails

1. `<ShowDetails>` takes a `show` as a prop.
2. `<ShowDetails>` keeps the selected episode in a state variable.
3. If no show is provided, `<ShowDetails>` renders a message encouraging the user to select a show.
4. If a show is provided, `<ShowDetails>` renders `<EpisodeList>` and `<EpisodeDetails>`.
5. `<EpisodeList>` and `<EpisodeDetails>` are provided the correct props. Read the source code of 
these components to figure out what props they expect!
import "./shows.css";

export default function EpisodeList({
name,
  episodes,
  selectedEpisode,
  setSelectedEpisode,
  
export default function EpisodeDetails({ episode })
*/

import { useState } from 'react'
import EpisodeDetails from './episodes/EpisodeDetails'
import EpisodeList from './episodes/EpisodeList'

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) { /*name genre, episodes*/

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <div>
        <h2>Show Details</h2>
        <p>Select a show.</p>
      </div>
    )
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <p>Genre: {show.genre}</p>
      <EpisodeList name={show.name} episodes={show.episodes} selectedEpisode={selectedEpisode} setSelectedEpisode={setSelectedEpisode} />
      <EpisodeDetails episode={selectedEpisode} />
    </div>

  )
}
