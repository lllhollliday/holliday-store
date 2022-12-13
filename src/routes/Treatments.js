import React, { useEffect } from "react";

function Treatments() {

  
  useEffect(() => {
    fetch("/treatments").then(res => {
      return res.json()
    }).then((data) => {
      console.log(data);

    })
    
  }, []);

  return (
    <div>
      <main>
        <h2>Treatments</h2>
      </main>
    </div>
  );
}

export default Treatments;
