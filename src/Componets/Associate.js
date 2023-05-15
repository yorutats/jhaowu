import AssociateImg from "../images/associate.svg";
import {artists} from '../artists'



const Associate = () => {
  return (
    <div className="main_associate">
      <img src={AssociateImg} alt="Associate" />
      <div class="artistcontainer">
        <div className="artist-list">
          {artists.map((artist) => (
            <div className="artist" key={artist.id}>
              <img src={artist.avatar} alt={artist.name} />
              <div class="info">
                <a href={artist.url}>{artist.name}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Associate;
