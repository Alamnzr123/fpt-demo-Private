import React from "react";
import { toast } from 'react-toastify';
import Service from './assets/network-data';
import { useNavigate } from "react-router-dom";
import "./App.css";
import MusicPlayer from "./Component/MusicPlayer";
import 'react-toastify/dist/ReactToastify.min.css';

const Apps = () => {
  const navigate = useNavigate();

  const [play, setPlay] = React.useState(false);
  const [data, setData] = React.useState({
    imageURL: "",
    releaseDate: "",
    artistID: "",
    albumName: "",
    price: "",
    artistName: "",
    sampleURL: ""
  })


  React.useEffect(() => {
    OngetAllData();
  }, [])

  const onEmailChangeHandler = (event) => {
    setData(event.target.value);
  }

  const OngetAllData = () => {
    Service.getArtistData().then((data) => {
      setData(data);
      console.log(data);
    })
      .catch((error) => {
        toast.error('Error fetching data!' + error.message);
        console.log(error.message);
      });
  }

  const onDeleteHandler = (id) => {
    const result = window.confirm('Are you sure you want to delete this?');

    if (result) {
      Service.DeleteArtistData(id)
        .then(() => {
          console.log(id);

          toast.success('Note deleted!');
          OngetAllData();
        })
    } else {
      toast.error('Deletion cancelled!');
    }
  }

  const onUpdateHandler = (id) => {
    const result = window.confirm('Are you sure you want to Edit this?');

    if (result) {
      console.log('update ' + id)
      return navigate(`/listartist/${id}`)
    } else {
      toast.error('Edit cancelled!');
    }
  }

  const onAddHandler = () => {
    return navigate(`/listartist/-1`)
  }

  return (
    <React.Fragment>
      {
        data.data?.map((item, index) => (
          <table key={index}>
            <tr>
              <th>Num.</th>
              <th>Album Name</th>
              <th>Artist Name</th>
              <th>Date Release</th>
              <th>Sample Audio</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            <tr>
              <td>{index + 1}.</td>
              <td><img src={item.imageURL} alt="Album Cover" />{item.albumName}</td>
              <td>{item.artistName}</td>
              <td>{item.releaseDate}</td>
              <td>      <MusicPlayer
                urls=
                {[item.sampleURL]}
              /></td>
              <td>
                {item.price}
              </td>
              <td><button onClick={() => onDeleteHandler(item.artistID)}>Delete</button><button onClick={() => onUpdateHandler(item.artistID)}>Update</button></td>
            </tr>
          </table>
        ))
      }
      <div className="row">
        <button className="btn btn-success" onClick={onAddHandler}>Add</button>
      </div>

    </React.Fragment >
  )
}


export default Apps;