import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const BASE_URL =
  'https://app.rakuten.co.jp/services/api/Travel/VacantHotelSearch/20170426?format=json&applicationId=1001591218102377156';

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
  hotelmapURL: string;
};

export const useData = () => {
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState([] as Plan[]);
  const [latitude, setLatitude] = useState(0.0);
  const [longitude, setLongitude] = useState(0.0);
  const [options, setOptions] = useState({
    adultNum: 1,
    minCharge: 1000,
    maxCharge: 10000,
    maxDistance: 0.5,
  } as Options);

  const fetchCurrentLocation = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('fetch current location');
    setLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      setLoading(false);
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

    let url = `${BASE_URL}&checkinDate=${checkinDate}&checkoutDate=${checkoutDate}&datumType=1&latitude=${latitude}&longitude=${longitude}`;
    if (options.adultNum) url += `&adultNum=${options.adultNum}`;
    if (options.maxCharge) url += `&maxCharge=${options.maxCharge}`;
    if (options.minCharge) url += `&minCharge=${options.minCharge}`;
    if (options.maxDistance) url += `&searchRadius=${options.maxDistance}`;

    // eslint-disable-next-line no-console
    console.log(`fetch data: ${url}`);

    // eslint-disable-next-line no-void
    void axios
      .get(url)
      .then((res) => {
        setPlans(
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          res.data.hotels
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((hotel: any) => {
              // ロジック
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              const hotelLatitude = hotel.hotel[0].hotelBasicInfo.latitude;
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              const hotelLongitude = hotel.hotel[0].hotelBasicInfo.longitude;

              const R = Math.PI / 180;
              const usrLat = latitude * R;
              const usrLng = longitude * R;
              const htlLat = hotelLatitude * R;
              const htlLng = hotelLongitude * R;

              const distance =
                6371 *
                Math.acos(
                  Math.cos(usrLat) * Math.cos(htlLat) * Math.cos(htlLng - usrLng) + Math.sin(usrLat) * Math.sin(htlLat)
                );

              return {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                name: hotel.hotel[1].roomInfo[0].roomBasicInfo.planName,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                hotelName: hotel.hotel[0].hotelBasicInfo.hotelName,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                roomName: hotel.hotel[1].roomInfo[0].roomBasicInfo.roomName,
                distance: distance.toFixed(2).toString(),
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                reserveURL: hotel.hotel[1].roomInfo[0].roomBasicInfo.reserveUrl,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                charge: hotel.hotel[1].roomInfo[1].dailyCharge.total,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
                thumbnailURL: hotel.hotel[0].hotelBasicInfo.hotelImageUrl,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-template-expressions
                hotelmapURL: `https://www.google.com/maps/search/?api=1&query=${hotel.hotel[0].hotelBasicInfo.hotelName}`,
              };
            })
        );
        setLoading(false);
      })
      .catch(() => {
        setPlans([]);
        setLoading(false);
      });
  }, [latitude, loading, longitude, options]);

  const setOption = useCallback((newOptions: Options) => {
    if (newOptions?.adultNum) localStorage.setItem('adultNum', newOptions.adultNum.toString());
    if (newOptions?.minCharge) localStorage.setItem('minCharge', newOptions.minCharge.toString());
    if (newOptions?.maxCharge) localStorage.setItem('maxCharge', newOptions.maxCharge.toString());
    if (newOptions?.maxDistance) localStorage.setItem('maxDistance', newOptions.maxDistance.toString());
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchCurrentLocation, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude, options]);

  useEffect(() => {
    const newOptions: Options = {
      adultNum: Number(localStorage.getItem('adultNum')) ?? undefined,
      minCharge: Number(localStorage.getItem('minCharge')) ?? undefined,
      maxCharge: Number(localStorage.getItem('maxCharge')) ?? undefined,
      maxDistance: Number(localStorage.getItem('maxDistance')) ?? undefined,
    };
    setOptions((prev) => ({ ...prev, ...newOptions }));
  }, []);

  return { fetchData, setOption, plans, fetchCurrentLocation, latitude, longitude, loading, options };
};
