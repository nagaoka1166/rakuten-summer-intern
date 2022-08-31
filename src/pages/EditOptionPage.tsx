import React, { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useData } from "../hooks/useData";
import Button from "@mui/material/Button";



const EditOptionPage: React.FC = () => {
  const {setOption} = useData();

  const [stayPeriods, setStayPeriods] = useState(1)
  const [peoples, setPeoples] = useState(1)
  const [minCharge, setMinCharge] = useState(1000)
  const [maxCharge, setMaxCharge] = useState(2000)
  const [distance, setDistance] = useState(0.5)
  
  

  // const stayPeriodOptions = [
  //   { value: 1, label: "1日" },
  //   { value: 2, label: "2日" },
  //   { value: 3, label: "3日" },
  //   { value: 4, label: "4日" },
  //   { value: 5, label: "5日" },
  //   { value: 6, label: "6日" },
  // ];

  // const peoples = [
  //   { value: 1, label: "1人" },
  //   { value: 2, label: "2人" },
  //   { value: 3, label: "3人" },
  //   { value: 4, label: "4人" },
  //   { value: 5, label: "5人" },
  //   { value: 6, label: "6人" },
  // ];

  // const minCharge = [
  //   { value: "1000", label: "1000円" },
  //   { value: "2000", label: "2000円" },
  //   { value: "3000", label: "3000円" },
  //   { value: "4000", label: "4000円" },
  //   { value: "5000", label: "5000円" },
  //   { value: "6000", label: "6000円" },
  // ];

  // const maxCharge = [
  //   { value: "1000", label: "1000円" },
  //   { value: "2000", label: "2000円" },
  //   { value: "3000", label: "3000円" },
  //   { value: "4000", label: "4000円" },
  //   { value: "5000", label: "5000円" },
  //   { value: "6000", label: "6000円" },
  // ];

  // const distance = [
  //   { value: "1", label: "0.5km" },
  //   { value: "2", label: "1km" },
  //   { value: "3", label: "2km" },
  //   { value: "4", label: "3km" },
  // ];
    
  return (
    <div className="App">
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="stayPeriods">
                滞在日数 
              </InputLabel>
              <NativeSelect
                value={stayPeriods}
                onChange={(event) => setStayPeriods(Number(event.target.value))}
                inputProps={{
                  name: 'stayPeriods',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={1}>1日</option>
                <option value={2}>2日</option>
                <option value={3}>3日</option>
                <option value={4}>1日</option>
                <option value={5}>2日</option>
                <option value={6}>3日</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="peoples">
                  宿泊人数
                </InputLabel>
                <NativeSelect
                  value={setPeoples}
                  onChange={(event) => setPeoples(Number(event.target.value))}
                  inputProps={{
                    name: 'stayPeoples',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={1}>1人</option>
                  <option value={2}>2人</option>
                  <option value={3}>3人</option>
                  <option value={4}>4人</option>
                  <option value={5}>5人</option>
                  <option value={6}>6人</option>
                </NativeSelect>
              </FormControl>
            </Box>
        </div>
        <div>
          <InputLabel variant="standard" htmlFor="charge">
                  金額
          </InputLabel>
            <Box sx={{ maxWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="minCharge">
                    最低
                </InputLabel>
                <NativeSelect
                  value={setMinCharge}
                  onChange={(event) => setMinCharge(Number(event.target.value))}
                  inputProps={{
                    name: 'stayPeoples',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={1000}>1000円</option>
                  <option value={2000}>2000円</option>
                  <option value={3000}>3000円</option>
                  <option value={4000}>4000円</option>
                  <option value={5000}>5000円</option>
                  <option value={6000}>6000円</option>
                </NativeSelect>
              </FormControl>
            </Box>〜
            <Box sx={{ maxWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel variant="standard" htmlFor="minCharge">
                    最高
                </InputLabel>
                <NativeSelect
                  value={setMaxCharge}
                  onChange={(event) => setMaxCharge(Number(event.target.value))}
                  inputProps={{
                    name: 'stayPeoples',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={1000}>1000円</option>
                  <option value={2000}>2000円</option>
                  <option value={3000}>3000円</option>
                  <option value={4000}>4000円</option>
                  <option value={5000}>5000円</option>
                  <option value={6000}>6000円</option>
                </NativeSelect>
              </FormControl>
            </Box>
        </div>
        <div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="distance">
                距離(半径)
              </InputLabel>
              <NativeSelect
                value={setDistance}
                onChange={(event) => setDistance(Number(event.target.value))}
                inputProps={{
                  name: 'stayPeriods',
                  id: 'uncontrolled-native',
                }}
              >
                <option value={0.5}>0.5km</option>
                <option value={1}>1km</option>
                <option value={2}>2km</option>
                <option value={3}>3km</option>
                <option value={4}>4km</option>
                <option value={5}>5km</option>
              </NativeSelect>
            </FormControl>
          </Box>
        </div>
        <div>
          <Button 
            variant="contained"
            onClick={() => {
              setOption({
                adultNum: peoples,
                minCharge: minCharge,
                maxCharge: maxCharge,
                maxDistance: distance,
              })
            }}
          > 
            Contained
          </Button>
        </div>
    </div>
  );
}

export default EditOptionPage;