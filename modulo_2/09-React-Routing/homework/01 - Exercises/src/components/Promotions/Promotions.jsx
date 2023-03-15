import React from "react";

export default function Promotions() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2em",
      }}
    >
      <img
        style={{ width: "50vw" }}
        src="https://cdn-content.crucerum.com/public/storage/destinos/1517345477.jpg"
        alt="prom1"
      />
      <img
        style={{ width: "50vw", paddingTop: "2em" }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKv2jSK990XUhFBFbKq03_jVP2h7pvK2E4CaA3vSnvKkbgfwaw1SNooMTMBuUOOsgmvUs&usqp=CAU"
        alt="prom2"
      />
      <img
        style={{ width: "50vw", paddingTop: "2em" }}
        src="https://static.traveltek.net/uploaded/2020/2/1581093734_hpbfredolsenjanv2.jpg"
        alt="prom3"
      />
    </div>
  );
}
