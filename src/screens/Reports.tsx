import {useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {Text, FlatList, View} from 'react-native';
import {REPORTES_BY_USUARIO_ID} from '../apollo/querys';
import {User, Reporte} from '../common/types';
import {getCurrentUser} from '../services/loginService';

const Reports = () => {
  const [user, setUser] = useState<User>();
  const {data} = useQuery(REPORTES_BY_USUARIO_ID, {
    variables: {
      id: user?.id,
    },
  });

  console.log(data?.allInconvenientes?.nodes);

  const getUser = async () => {
    const userR = await getCurrentUser();
    if (userR) {
      setUser(userR);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <View>
      <Text>Reportes</Text>
      <FlatList<Reporte>
        data={data?.allInconvenientes?.nodes}
        renderItem={({item}) => <Text>{item.id}</Text>}
      />
    </View>
  );
};

export default Reports;
