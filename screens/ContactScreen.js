import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                <Card.Title>
                    <Text>
                        Contact Information
                    </Text>
                </Card.Title>
                <Card.Divider />
                <Text>
                    1 Nucamp Way
                </Text>
                <Text>
                    Seattle, WA 98001
                </Text>
                <Text style={{ marginBottom:10 }}>
                    U.S.A
                </Text>
                <Text>
                    Phone: 1-206-555-1234
                </Text>
                <Text>
                    Email: campsite@nucamp.co
                </Text>
            </Card>
        </ScrollView>
    )
}

export default ContactScreen;