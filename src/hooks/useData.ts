import axios from 'axios';
import { useCallback, useState } from 'react';

export type Options = {
  adultNum?: number;
  minCharge?: number;
  maxCharge?: number;
  maxDistance?: number;
};

// これの項目　明日の朝確認
export type Plan = {
  name: string;
  hotelName: string;
  roomName: string;
  distance: number;
  reserveURL: string;
  charge: number;
};

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([] as Plan[]);
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
        'https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=2022-09-01&checkoutDate=2022-09-02&datumType=1&latitude=35.233549392171&longitude=139.1035099094733&adultNum=2&applicationId=1001591218102377156'
      )
      .then((res) => {
        // ここにロジックが入る

        setPlans(
          res.data.hotels
            .map((hotel: any) =>
              hotel.hotel.slice(1).map((roomInfo: any) => ({
                name: roomInfo.roomInfo[0].roomBasicInfo.planName,
                hotelName: hotel.hotel[0].hotelBasicInfo.hotelName,
                roomName: roomInfo.roomInfo[0].roomBasicInfo.roomName,
                distance: 0.2,
                reserveURL: roomInfo.roomInfo[0].roomBasicInfo.reserveUrl,
                charge: roomInfo.roomInfo[1].dailyCharge.total,
              }))
            )
            .flat()
        );
        setLoading(false);
      });
  }, []);

  const setConfig = useCallback((newOptions: Options) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }, []);

  return { fetchData, setConfig, plans, fetchCurrentLocation, latitude, longitude, loading };
};