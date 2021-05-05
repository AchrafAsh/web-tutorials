import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import BarChart from './BarChart';
import GaugeChart from './GaugeChart';
import ml5 from 'ml5';
import BBTime from './BBTime';
import RacingBarChart from './RacingBarChart';
import TreeChart from './TreeChart';
import GeoChart from './GeoChart';
import data from './custom.geo.json';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function getRandomIndex(data) {
  return Math.floor(Math.random() * data.length);
}

// Bar Chart App

const initialData = [25, 30, 45, 60, 20, 65, 75];
function App() {
  const [data, setData] = useState(initialData);

  return (
    <React.Fragment>
      <BarChart data={data} />
      <div className="buttons">
        <button onClick={() => setData(data.map(value => value + 10))}>
          Update Data
        </button>
        <button onClick={() => setData(data.filter(value => value <= 50))}>
          Filter Data
        </button>
        <button
          onClick={() => setData([...data, Math.floor(Math.random() * 100)])}
        >
          Add data
        </button>
        <button
          onClick={() =>
            setData(data.filter((value, index) => index < data.length - 1))
          }
        >
          Remove Data
        </button>
      </div>
    </React.Fragment>
  );
}

// Gauge Chart App
// let classifier;

// function App() {
//   const videoRef = useRef();
//   const [gaugeData, setGaugeData] = useState([0.5, 0.5]);
//   const [shouldClassify, setShouldClassify] = useState(false);

//   useEffect(() => {
//     classifier = ml5.imageClassifier('./model/model.json', () => {
//       navigator.mediaDevices
//         .getUserMedia({ video: true, audio: false })
//         .then(stream => {
//           videoRef.current.srcObject = stream;
//           videoRef.current.play();
//         });
//     });
//   }, []);

//   useInterval(() => {
//     if (classifier && shouldClassify) {
//       classifier.classify(videoRef.current, (error, results) => {
//         if (error) {
//           console.log(error);
//           return;
//         }
//         results.sort((a, b) => b.label.localeCompare(a.label));
//         setGaugeData(results.map(entry => entry.confidence));
//       });
//     }
//   }, 500);

//   return (
//     <React.Fragment>
//       <h1>Are You Here ?</h1>
//       <GaugeChart data={gaugeData} />
//       <button onClick={() => setShouldClassify(!shouldClassify)}>
//         {shouldClassify ? 'Stop Classifying' : 'Start Classifying'}
//       </button>
//       <video ref={videoRef} width='300' height='300' />
//     </React.Fragment>
//   );
// }

// Breaking Bad Chart
// function App() {
//   const [bbEpisodes, setBbEpisodes] = useState([]);
//   const [bbCharacters, setBbCharacters] = useState([]);
//   const [highlight, setHighlight] = useState();

//   useEffect(() => {
//     fetch("https://breakingbadapi.com/api/characters?category=Breaking+Bad")
//       .then(response => response.ok && response.json())
//       .then(characters => {
//         console.log(characters);
//         setBbCharacters(characters);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   useEffect(() => {
//     fetch("https://breakingbadapi.com/api/episodes?series=Breaking+Bad")
//       .then(response => response.ok && response.json())
//       .then(episodes => {
//         setBbEpisodes(episodes);
//       })
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <React.Fragment>
//       <h1>Breaking Bad Timeline</h1>
//       <BBTime data={bbEpisodes} highlight={highlight} />
//       <h3>Select a character</h3>
//       <select value={highlight} onChange={e => setHighlight(e.target.value)}>
//         <option disabled selected>
//           Select a character
//         </option>
//         {bbCharacters
//           ? bbCharacters.map(character => (
//               <option key={character.char_id}>{character.name}</option>
//             ))
//           : null}
//       </select>
//     </React.Fragment>
//   );
// }

// Racing Bar Chart
// function App() {
//   const [iteration, setIteration] = useState(0);
//   const [start, setStart] = useState(false);
//   const [data, setData] = useState([
//     {
//       name: "alpha",
//       value: 10,
//       color: "#f4efd3"
//     },
//     {
//       name: "beta",
//       value: 15,
//       color: "#cccccc"
//     },
//     {
//       name: "charlie",
//       value: 20,
//       color: "#c2b0c9"
//     },
//     {
//       name: "delta",
//       value: 25,
//       color: "#9656a1"
//     },
//     {
//       name: "echo",
//       value: 30,
//       color: "#fa697c"
//     },
//     {
//       name: "foxtrot",
//       value: 35,
//       color: "#fcc169"
//     }
//   ]);

//   useInterval(() => {
//     if (start) {
//       const randomIndex = getRandomIndex(data);
//       setData(
//         data.map((entry, index) =>
//           index === randomIndex
//             ? {
//                 ...entry,
//                 value: entry.value + 10
//               }
//             : entry
//         )
//       );
//       setIteration(iteration + 1);
//     }
//   }, 500);

//   return (
//     <React.Fragment>
//       <h1>Racing Bar Chart</h1>
//       <RacingBarChart data={data} />
//       <button onClick={() => setStart(!start)}>
//         {start ? "Stop the race !" : "Start the race !"}
//       </button>
//       <p>Iteration: {iteration}</p>
//     </React.Fragment>
//   );
// }

// // Animated Tree Chart
// function App() {
//   const initialData = {
//     name: "👨",
//     children: [
//       {
//         name: "👧",
//         children: [
//           {
//             name: "👦"
//           },
//           {
//             name: "👦👦"
//           },
//           {
//             name: "👦👧"
//           }
//         ]
//       },
//       {
//         name: "👦"
//       }
//     ]
//   };
//   const [data, setData] = useState(initialData);

//   return (
//     <React.Fragment>
//       <h1>Animated Tree Chart</h1>
//       <TreeChart data={data} />
//       <button onClick={() => setData(initialData.children[0])}>
//         Update Data
//       </button>
//       <button onClick={() => setData(initialData)}>Back To Start</button>
//     </React.Fragment>
//   );
// }

// World Map
// function App() {
//   const [property, setProperty] = useState('pop_est');

//   return (
//     <React.Fragment>
//       <h2>World Map With d3 Geo</h2>
//       <GeoChart data={data} property={property} />
//       <h3>Select property to highlight</h3>
//       <select value={property} onChange={(e) => setProperty(e.target.value)}>
//         <option disabled selected>
//           Chose a property
//         </option>
//         <option value='pop_est'>Population</option>
//         <option value='name_len'>Name length</option>
//         <option value='gdp_md_est'>GDP</option>
//       </select>
//     </React.Fragment>
//   );
// }

export default App;
