import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const transactions = [
  {date: '18 Jan', bank: 'HDFC Bank', acc: 'xxxxx77678', amount: '₹ 10,000'},
  {date: '08 Dec', bank: 'HDFC Bank', acc: 'xxxxx77678', amount: '₹ 10,000'},
];

const Fees = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
            style={styles.profilePic}
          />
          <View>
            <Text style={styles.userName}>Rohan Sharma</Text>
            <Text style={styles.welcomeText}>
              <MaterialCommunityIcons
                name="map-marker"
                size={12}
                color="#DB0D0D"
              />
              Rohini sec-21 New Delhi
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <MaterialCommunityIcons
            name="bell-outline"
            size={18}
            color="#4D2990"
          />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={styles.feeBox}>
          <Text style={styles.label}>Course Fee</Text>
          <Text style={styles.amount}>₹ 80,000</Text>
        </View>

        <View style={[styles.feeBox, {borderColor: '#FF656F'}]}>
          <Text style={styles.label}>Paid Amount</Text>
          <Text style={[styles.amountPaid, {color: '#FF656F'}]}>₹ 20,000</Text>
        </View>
      </View>

      {/* Transactions */}
      <Text style={styles.transactionTitle}>Transactions</Text>
      {transactions.map((txn, index) => (
        <View style={styles.transactionCard} key={index}>
          <Text style={styles.date}>{txn.date}</Text>
          <View>
            <Text style={styles.bank}>{txn.bank}</Text>
            <Text style={styles.account}>{txn.acc}</Text>
          </View>
          <Text style={[styles.amountPaid, {color: '#22B060', fontSize: 18}]}>
            {txn.amount}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  userInfo: {flexDirection: 'row', alignItems: 'center'},
  profilePic: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  welcomeText: {fontSize: 14, color: '#777'},
  userName: {fontSize: 16, fontWeight: 'bold'},
  studyButton: {
    flexDirection: 'row',
    backgroundColor: '#F9CBFF',
    padding: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  studyText: {color: '#670075', marginLeft: 5},
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    color: '#555',
  },
  studyMaterial: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8D9FD',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 6,
    gap: 4,
  },
  studyMaterialText: {
    fontSize: 12,
    color: '#4D2990',
    fontWeight: '600',
  },
  feeBox: {
    borderWidth: 1,
    borderColor: '#00B87B',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 13,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  amount: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#00B87B',
  },
  amountPaid: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#25A8C5',
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 10,
  },
  transactionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontWeight: 'bold',
    fontSize: 14,
    width: 60,
  },
  bank: {
    fontSize: 14,
    fontWeight: '500',
  },
  account: {
    fontSize: 12,
    color: '#555',
  },
});

export default Fees;
