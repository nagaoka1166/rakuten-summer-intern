import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useData } from '../hooks/useData';

const Header = ({ setEditOption }: { setEditOption: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const setEditOptionClick = () => {
    setEditOption(true);
  };
  const { fetchCurrentLocation } = useData();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ mx: 'auto' }}>
            <svg height="50" viewBox="0 0 4465 1055">
              <svg
                width="4465"
                height="1055"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlSpace="preserve"
                overflow="hidden"
              >
                <defs>
                  <clipPath id="clip0">
                    <rect x="255" y="783" width="4465" height="1055" />
                  </clipPath>
                  <clipPath id="clip1">
                    <rect x="255" y="951" width="1945" height="573" />
                  </clipPath>
                  <clipPath id="clip2">
                    <rect x="255" y="951" width="1945" height="573" />
                  </clipPath>
                  <clipPath id="clip3">
                    <rect x="255" y="951" width="1945" height="573" />
                  </clipPath>
                </defs>
                <g clipPath="url(#clip0)" transform="translate(-255 -783)">
                  <g clipPath="url(#clip1)">
                    <g clipPath="url(#clip2)">
                      <g clipPath="url(#clip3)">
                        <path
                          d="M1548.49 480.206 385.093 480.206 477.886 573Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M1735.24 421.05 1735.24 235.463C1735.24 200.666 1759.6 171.668 1794.39 171.668 1829.19 171.668 1853.55 200.666 1853.55 235.463L1853.55 421.05 1925.46 421.05 1925.46 235.463C1925.46 158.909 1873.27 97.4331 1796.71 97.4331 1761.92 97.4331 1735.24 117.152 1735.24 117.152L1735.24 104.393 1663.32 104.393 1663.32 419.89 1735.24 419.89Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M1497.45 96.2732C1413.94 96.2732 1354.78 169.348 1354.78 262.142 1354.78 359.575 1429.02 428.01 1504.41 428.01 1542.69 428.01 1590.25 415.251 1630.85 357.255L1567.05 320.137C1518.33 392.052 1435.98 356.095 1426.7 283.02L1633.17 283.02C1651.72 171.668 1578.65 96.2732 1497.45 96.2732ZM1560.09 221.544 1431.34 221.544C1446.42 148.47 1546.17 143.83 1560.09 221.544Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M1331.59 345.656C1324.63 350.295 1316.51 353.775 1307.23 353.775 1295.63 353.775 1273.59 344.496 1273.59 315.498L1273.59 179.787 1335.07 179.787 1335.07 104.393 1273.59 104.393 1273.59 25.5182 1201.68 25.5182 1201.68 104.393 1163.4 104.393 1163.4 179.787 1201.68 179.787 1201.68 315.498C1201.68 386.253 1255.03 428.01 1308.39 428.01 1328.11 428.01 1355.94 421.05 1377.98 408.291L1331.59 345.656Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M1067.12 104.393 1067.12 289.98C1067.12 324.777 1042.77 353.775 1007.97 353.775 973.172 353.775 948.813 324.777 948.813 289.98L948.813 104.393 876.898 104.393 876.898 289.98C876.898 366.534 929.095 428.01 1005.65 428.01 1040.45 428.01 1067.12 408.291 1067.12 408.291L1067.12 419.89 1139.04 419.89 1139.04 104.393 1067.12 104.393Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M742.348 252.862 865.299 104.393 765.546 104.393 678.552 214.585 678.552 0 605.477 0 605.477 421.05 678.552 421.05 678.552 291.14 785.265 421.05 885.018 421.05Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M492.965 104.393 492.965 118.312C470.927 104.393 452.368 96.2732 425.69 96.2732 344.496 96.2732 281.86 170.508 281.86 262.142 281.86 353.775 343.336 428.01 425.69 428.01 452.368 428.01 472.087 419.89 492.965 405.971L492.965 419.89 564.88 419.89 564.88 104.393 492.965 104.393ZM424.53 352.615C383.933 352.615 354.935 313.178 354.935 263.301 354.935 213.425 383.933 173.988 424.53 173.988 465.127 173.988 492.965 213.425 492.965 263.301 494.125 313.178 465.127 352.615 424.53 352.615Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                        <path
                          d="M75.3947 421.05 75.3947 298.099 127.591 298.099 219.225 419.89 313.178 419.89 201.826 272.581C236.623 248.223 258.662 207.625 258.662 161.229 258.662 85.834 197.186 25.5182 122.951 25.5182L0 25.5182 0 419.89 75.3947 419.89ZM75.3947 100.913 124.111 100.913C157.749 100.913 185.587 128.751 185.587 162.389 185.587 196.026 157.749 223.864 124.111 223.864L75.3947 223.864 75.3947 100.913Z"
                          stroke="#FFFFFF"
                          strokeWidth="11.5992"
                          fill="#FFFFFF"
                          transform="matrix(1.00197 0 0 1 263.456 951)"
                        />
                      </g>
                    </g>
                  </g>
                  <text
                    fill="#FFFFFF"
                    fontFamily="Meiryo UI,Meiryo UI_MSFontService,sans-serif"
                    fontWeight="700"
                    fontSize="440"
                    transform="matrix(1 0 0 1 2249.92 1356)"
                  >
                    トマレル
                  </text>
                  <path
                    d="M2285 1465 4577.61 1465"
                    stroke="#FFFFFF"
                    strokeWidth="27.5"
                    strokeMiterlimit="8"
                    fill="none"
                    fillRule="evenodd"
                  />
                  <text
                    fill="#FFFFFF"
                    fontFamily="Meiryo UI,Meiryo UI_MSFontService,sans-serif"
                    fontWeight="700"
                    fontSize="165"
                    transform="matrix(1 0 0 1 2978.56 1706)"
                  >
                    Rakuten{' '}
                    <tspan fontSize="165" x="783.177" y="0">
                      Tomareru
                    </tspan>
                  </text>
                </g>
              </svg>
            </svg>
          </Box>
          <IconButton size="large" color="inherit" aria-label="reload" sx={{ mr: 2 }} onClick={fetchCurrentLocation}>
            <RestartAltIcon />
          </IconButton>
          <IconButton size="large" color="inherit" aria-label="editOption" sx={{ mr: 2 }} onClick={setEditOptionClick}>
            <SettingsSharpIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
