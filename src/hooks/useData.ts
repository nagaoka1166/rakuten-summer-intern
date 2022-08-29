import axios from 'axios';
import { useCallback, useMemo, useState } from 'react';

type Options = {
  adultNum?: number;
  minCharge?: number;
  maxCharge?: number;
  maxDistance?: number;
};

type RoomInfo = {
  name: string;
  reserveURL: string;
  charge: number;
  planName: string;
};

type Hotel = {
  name: string;
  distance: number;
  roomInfos: RoomInfo[];
};

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([] as Hotel[]);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [options, setOptions] = useState({
    adultNum: 1,
    minCharge: 1000,
    maxCharge: 40000,
    maxDistance: 2,
  } as Options);

  const fetchCurrentLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [setLatitude, setLongitude]);

  const fetchData = useCallback(() => {
    if (loading) return;

    setLoading(true);
    axios
      .get(
        'https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=2022-08-29&checkoutDate=2022-08-30&datumType=1&latitude=35.233549392171&longitude=139.1035099094733&adultNum=2&applicationId=1001591218102377156'
      )
      .then((res) => {
        setHotels(
          res.data.hotels.map((hotel: any) => ({
            name: hotel.hotel[0].hotelBasicInfo.hotelName,
            distance: 0.2,
            roomInfos: hotel.hotel.slice(1).map((roomInfo: any) => ({
              name: roomInfo.roomInfo[0].roomBasicInfo.roomName,
              reserveURL: roomInfo.roomInfo[0].roomBasicInfo.reserveUrl,
              planName: roomInfo.roomInfo[0].roomBasicInfo.planName,
              charge: roomInfo.roomInfo[1].dailyCharge.rakutenCharge,
            })),
          }))
        );
        setLoading(false);
      });
  }, []);

  const setConfig = useCallback((newOptions: Options) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }, []);

  return { fetchData, setConfig, hotels, fetchCurrentLocation, latitude, longitude };
};
