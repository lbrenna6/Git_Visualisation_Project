import React from 'react';
import Moment from 'react-moment';const SortedList = (props) => {
  if (props.repitems) {
    return (
        <ul>
          {props.repitems.map((repitem) =>
            <li key={repitem.id}>
              <div>

                <div>
                  <a href={repitem.html_url} target="_blank">{repitem.name}</a><p> Started: <Moment from={new Date()}>{repitem.created_at}</Moment></p>
                </div>

                <div>
                  <i>{repitem.description}</i>
                </div>

                <div>
                  Language: <b>{repitem.language} </b>
                </div>

              </div>
            </li>
          )}
        </ul>
      )
  } else { return null;}
  };export default SortedList;