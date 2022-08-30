import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export type Options = {
  adultNum?: number;
  minCharge?: number;
  maxCharge?: number;
  maxDistance?: number;
};

// これの項目 明日の朝確認
export type Plan = {
  name: string;
  hotelName: string;
  roomName: string;
  distance: number;
  reserveURL: string;
  charge: number;
  thumbnailURL: string;
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
    const date = new Date();
    const checkinDate = `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')}`;
    date.setDate(date.getDate() + 1);
    const checkoutDate = `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate()
    ).padStart(2, '0')}`;
    if (loading) return;
    if (latitude === 0 || longitude === 0) return;
    setLoading(true);
    // alert(`https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&datumType=1&latitude=${latitude}&longitude=${longitude}&adultNum=2&applicationId=1001591218102377156`)

    // eslint-disable-next-line no-void
    void axios
      .get(
        // `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=${date1}&checkoutDate=${date2}&datumType=1&latitude=35.233549392171&longitude=139.1035099094733&adultNum=2&applicationId=1001591218102377156`
        // `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&datumType=1&latitude=${latitude}&longitude=${longitude}&adultNum=2&applicationId=1001591218102377156`
        `https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&datumType=1&latitude=${latitude}&longitude=${longitude}&adultNum=${options.adultNum}&maxCharge=${options.maxCharge}%minCharge=${options.minCharge}&searchRadius=${options.maxDistance}&applicationId=1001591218102377156`
      )
      .then((res) => {
        // ここにロジックが入る

        setPlans(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          res.data.hotels
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((hotel: any) => ({
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              name: hotel.hotel[1].roomInfo[0].roomBasicInfo.planName,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
              hotelName: hotel.hotel[0].hotelBasicInfo.hotelName,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
              roomName: hotel.hotel[1].roomInfo[0].roomBasicInfo.roomName,
              distance: 0.2,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
              reserveURL: hotel.hotel[1].roomInfo[0].roomBasicInfo.reserveUrl,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
              charge: hotel.hotel[1].roomInfo[1].dailyCharge.total,
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
              thumbnailURL: hotel.hotel[0].hotelBasicInfo.hotelThumbnailUrl,
            }))
        );
        setLoading(false);
      });
  }, [latitude, loading, longitude, options]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchCurrentLocation, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude]);

  const setOption = useCallback((newOptions: Options) => {
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }, []);

  return { fetchData, setOption, plans, fetchCurrentLocation, latitude, longitude, loading };
};
