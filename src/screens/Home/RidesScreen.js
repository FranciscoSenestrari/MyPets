import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Layout from '../../layout/Layout';
import Header from '../../components/Header/Header';
import CardRides from '../../components/CardHistory/CardRides';
import {getJobs} from '../../methods/DataWalker';
const data = [
  {
    date: 'Sat Aug 20 17:12:16 2022',
    walker: 'nico',
    hours: '2',
    price: '11',
    latitude: 'latitude  nicoi',
    longitude: 'longitude nicoi',
  },
  {
    date: 'Sat Aug 20 17:12:16 2022',
    walker: 'pepe',
    hours: '2',
    price: '11',
    latitude: 'latitude  pepe',
    longitude: 'longitude pepe',
  },
];
const RidesScreen = ({navigation}) => {
  const [rides, setRides] = useState([]);
  const traerDatos = async () => {
    const datos = await getJobs();
    setRides(datos);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      traerDatos();
    }, 20000);
    return () => clearInterval(interval);
  }, []);
  return (
    <Layout>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Rides</Text>
        </View>
        <ScrollView style={styles.scroll}>
          {rides.map((item, key) => (
            <CardRides key={key} data={item} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};

export default RidesScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  containerTitle: {alignItems: 'center', marginBottom: 10, marginTop: 10},
  title: {fontSize: 30, fontWeight: 'bold', color: 'black'},
});
