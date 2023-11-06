import axios from "axios";
import { useState, useEffect } from "react";

export function Page1() {
  const [data, setData] = useState();

  async function getData() {
    try {
      const response = await axios.get(
        "https://6509bd34f6553137159bedbc.mockapi.io/testApp/prompts"
      );
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


const customStyle={
    display:'grid',
    gridTemplateColumns:'repeat(2,1fr)',
    gap:'10px'
}
console.log(data)
  return (
    <>
      {/* {data &&
        data.length > 0 &&
        data.map((p,i) => {
          return (<>
         <div style={customStyle}>



         </div>

          </>
          );
        })} */}

      <div style={customStyle}>
        {data &&
          data.length > 0 &&
          data.map((p, i) => {
            return(<> <>

            <div key={i}>
              <h5>{p.name}</h5>

              <h5>{p.createdAt}</h5>

            </div>
        </></>)
               
        
          })}
      </div>
    </>
  );
}
