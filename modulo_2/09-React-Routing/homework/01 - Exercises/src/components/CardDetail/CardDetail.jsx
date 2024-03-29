import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./CardDetail.module.css";

export default function CardDetail(props) {
  const [cruiseDetail, setCruiseDetail] = React.useState({});
  
  const {id} = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    //eslint-disable-next-line
    fetch(`http://localhost:3001/cruises/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCruiseDetail(data);
      })
      .catch((error) => console.log(error));
    return () => setCruiseDetail({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const backToHome = () => navigate('/');

  return (
    <div className={styles.container}>
      <button className={styles.buttonBack} onClick={backToHome}>
        Volver
      </button>

      <div>
        <div>
          <h1 className={styles.name}>{cruiseDetail.name}</h1>
          <img
            className={styles.image}
            src={cruiseDetail.image}
            alt={cruiseDetail.name + "picture"}
          />
          <h2>Acerca de {cruiseDetail.name}</h2>
          <p>{cruiseDetail.about}</p>
        </div>

        <div className={styles.divMapIti}>
          <div className={styles.containerTable}>
            <div className={styles.tableTitle}>Itinerario</div>
            {cruiseDetail.itinerary &&
              cruiseDetail.itinerary.map((d) => (
                <div className={styles.travel} key={d.travelDay}>
                  <div className={styles.day}>Día {d.travelDay}</div>
                  <div className={styles.items}>{d.day}</div>
                  <div className={styles.items}>{d.date}</div>
                  <div className={styles.items}>{d.city}</div>
                  <div className={styles.items}>
                    {d.departure_time ? "Salida: " + d.departure_time : ""}
                  </div>
                  <div className={styles.items}>
                    {d.arrival_time ? "Llegada: " + d.arrival_time : ""}
                  </div>
                </div>
              ))}
          </div>
          <img src={cruiseDetail.map} alt={cruiseDetail.name + "map"} />
        </div>
      </div>
    </div>
  );
}
