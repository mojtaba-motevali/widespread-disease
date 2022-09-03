
import { Container,Text } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import styles from './style';
import Map from '../../../components/map';
const DoctorInfo = ({specialistName,firstName,lastName,latitude,longitude,phone,address}) => {
    return (
        <Container>
                <View style={styles.title_container}>

                        <View style={styles.each_row} >
                                <Text style={styles.title} >
                                        {firstName + " " + lastName}
                                </Text>
                                <Text style={styles.title} >
                                        نام و نام خانوادگی :  
                                </Text>
                        </View>
                        <View style={styles.each_row} >
                                <Text style={styles.title} >
                                        {phone ? phone:'اطلاعاتی یافت نشد'}
                                </Text>
                                <Text style={styles.title} >
                                        تلفن:  
                                </Text>
                        </View>
                        <View style={styles.each_row} >
                                <Text style={{...styles.title}} >
                                        {specialistName}
                                </Text>
                                <Text style={styles.title} >
                                        تخصص:   
                                </Text>
                        </View>
                        <View style={{...styles.each_row}} >
                                <Text style={{...styles.title}} >
                                        {address ? address:'اطلاعاتی یافت نشد.'}
                                </Text>
                                <Text style={styles.title} >
                                        آدرس:
                                </Text>
                        </View>
                </View>

            <Map latitude={latitude} longitude={longitude} />
        </Container>
    )
} 

export default DoctorInfo;