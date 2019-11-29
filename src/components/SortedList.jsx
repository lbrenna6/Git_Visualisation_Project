import React from 'react';
import "./css/App.css";
import Moment from 'react-moment';const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              <div>

                <div>
                  <a href={repitem.html_url} target="_blank">{repitem.name}</a><p> Started: <Moment from={new Date()}>{repitem.created_at}</Moment></p><i>{repitem.description}</i>Language: <b>{repitem.language} </b>
                    <p></p>
                </div>

              

              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };export default SortedList;