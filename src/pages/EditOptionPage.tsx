import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { Typography } from '@mui/material';
import { useData } from '../hooks/useData';

type Props = {
  setEditOption: React.Dispatch<React.SetStateAction<boolean>>;
};

const EditOptionPage: React.FC<Props> = ({ setEditOption }) => {
  const { setOption, options } = useData();

  const [peoples, setPeoples] = useState('');
  const [minCharge, setMinCharge] = useState('');
  const [maxCharge, setMaxCharge] = useState('');
  const [distance, setDistance] = useState('');

  useEffect(() => {
    setPeoples((options.adultNum ?? 1).toString());
    setMinCharge((options.minCharge ?? 1000).toString());
    setMaxCharge((options.maxCharge ?? 10000).toString());
    setDistance((options.maxDistance ?? 0.5).toString());
  }, [options]);

  return (
    <Box
      sx={{ my: 5, mx: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '60vh' }}
    >
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="stayPeoples">
              宿泊人数
            </InputLabel>
            <Input
              type="number"
              value={peoples}
              onChange={(e) => {
                setPeoples(e.target.value);
              }}
            />
          </FormControl>
        </Box>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <Typography>金額</Typography>
        <Box sx={{ mx: 2 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="minCharge">
              最低
            </InputLabel>
            <Input
              type="number"
              value={minCharge}
              onChange={(e) => {
                setMinCharge(e.target.value);
              }}
            />
          </FormControl>
        </Box>
        〜
        <Box sx={{ mx: 2 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="minCharge">
              最高
            </InputLabel>
            <Input
              type="number"
              value={maxCharge}
              onChange={(e) => {
                setMaxCharge(e.target.value);
              }}
            />
          </FormControl>
        </Box>
      </div>
      <div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel variant="standard" htmlFor="distance">
              距離半径 (0.1 ~ 3.0km)
            </InputLabel>
            <Input
              type="number"
              value={distance}
              onChange={(e) => {
                setDistance(e.target.value);
              }}
            />
          </FormControl>
        </Box>
      </div>
      <div>
        <Button
          variant="contained"
          onClick={() => {
            const adultNum = Number(peoples);
            const minC = Number(minCharge);
            const maxC = Number(maxCharge);
            const maxD = Number(distance);
            setOption({
              adultNum: adultNum < 100 && adultNum > 0 ? adultNum : undefined,
              minCharge: minC > 1000 && minC < 1000000 ? minC : undefined,
              maxCharge: maxC > 1000 && maxC < 1000000 ? maxC : undefined,
              maxDistance: maxD >= 0.1 && maxD <= 3 ? Math.round(maxD * 10) / 10 : undefined,
            });
            setEditOption(false);
          }}
        >
          検索
        </Button>
      </div>
    </Box>
  );
};

export default EditOptionPage;
