import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import { useData } from '../hooks/useData';

type Props = {
  setEditOption: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditOptionPage: React.FC<Props> = ({ setEditOption }) => {
  const { setOption, options } = useData();

  const [stayPeriods, setStayPeriods] = useState(1);
  const [peoples, setPeoples] = useState(options.adultNum ?? 1);
  const [minCharge, setMinCharge] = useState(options.minCharge ?? 1000);
  const [maxCharge, setMaxCharge] = useState(options.maxCharge ?? 10000);
  const [distance, setDistance] = useState(options.maxDistance ?? 0.5);

  useEffect(() => {
    setPeoples(options.adultNum ?? 1);
    setMinCharge(options.minCharge ?? 1000);
    setMaxCharge(options.maxCharge ?? 10000);
    setDistance(options.maxDistance ?? 0.5);
  }, [options]);

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
              <option value={4}>4日</option>
              <option value={5}>5日</option>
              <option value={6}>6日</option>
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
              value={peoples}
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
              value={minCharge}
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
        </Box>
        〜
        <Box sx={{ maxWidth: 150 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="minCharge">
              最高
            </InputLabel>
            <NativeSelect
              value={maxCharge}
              onChange={(event) => setMaxCharge(Number(event.target.value))}
              inputProps={{
                name: 'stayPeoples',
                id: 'uncontrolled-native',
              }}
            >
              <option value={10000}>10000円</option>
              <option value={20000}>20000円</option>
              <option value={30000}>30000円</option>
              <option value={40000}>40000円</option>
              <option value={50000}>50000円</option>
              <option value={60000}>60000円</option>
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
              value={distance}
              onChange={(event) => setDistance(Number(event.target.value))}
              inputProps={{
                name: 'stayPeriods',
                id: 'uncontrolled-native',
              }}
            >
              <option value={0.5}>0.5km</option>
              <option value={1}>1km</option>
              <option value={1.5}>1.5km</option>
              <option value={2}>2km</option>
              <option value={2.5}>2.5km</option>
              <option value={3}>3km</option>
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
              minCharge,
              maxCharge,
              maxDistance: distance,
            });
            setEditOption(false);
          }}
        >
          検索
        </Button>
      </div>
    </div>
  );
};

export default EditOptionPage;
