import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export default function Intro() {
  const navigation = useNavigation();

  const handleOptionPress = () => {
    navigation.navigate('City');
  };

  return (
    <View style={styles.introContainer}>
      <View style={styles.topPart}>
        <Text style={styles.heading}>זקוקים לשירות צמיגים?</Text>
        <Text style={styles.information}>
          אנחנו מתמחים בכל פתרונות שירותי החלפת גלגל ותיקון פנצ'ר לכל סוגי הרכבים בדרכים. נגיע במהירות לכל מקום ובכל שעה 24/6.
        </Text>
        <Text style={styles.separator}>-------------------------------------------</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem} >
          <Image style={styles.img} source={require('../assets/Chat.png')} />
          <Text style={styles.optionItemText}>הזמנת טיפול בעזרת צ'אט עם נציג</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem} onPress={handleOptionPress}>
          <Image style={styles.img} source={require('../assets/Navigate.png')} />
          <Text style={styles.optionItemText}>איתור ונייוט לפנצ'ריה</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  topPart: {
    alignItems: 'center',
    width: '85%',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  information: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 20,
    lineHeight: 20,
  },
  separator: {
    fontSize: 18,
    color: '#888',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  optionsContainer: {
    width: 'auto',
  },
  optionItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  img: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
  optionItemText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
});
