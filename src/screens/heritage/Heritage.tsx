import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import useAppDispatch, {useAppSelector} from '../../app/hooks';

import {getInnerPageContentById} from '../appSlice';

const Heritage = () => {
  const dispatch = useAppDispatch();

  const sectionsData = useAppSelector(state => state?.dashboard?.innerPageData);

  console.log('sectionsDataOfHERITAGE=====>', sectionsData);

  useEffect(() => {
    dispatch(getInnerPageContentById(32157115));
  }, [dispatch]);

  return (
    <View>
      <Text>Heritage</Text>
    </View>
  );
};

export default Heritage;
