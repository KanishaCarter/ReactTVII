import { useState } from 'react'
import { tvShows } from './data'
import { EpisodeDetails } from './EpisodeDetails.jsx'
import { EpisodeList } from './EpisodeList.jsx'

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

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({show}) { /*name genre, episodes*/

  const [selectedShow, setSelectedShow] = useState({});
  
  return (
    <div className="show-details">
      {(!show) ?
      (<section>
        <h3>Please select a show.</h3>
        <h3>Shows List</h3>
        <ol>
          {tvShows.map((show)=> (
            <li 
            onClick={()=>(setSelectedShow(show))}>
              {show.name}
            </li>))}
        </ol>
      </section>)
      :
      (<h2>{show.name}</h2>
        <ol>
          {selectedShow.map((show))}
        </ol>
      )}
    </div>
  )


}
