import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, Text, View, ScrollView, Image, Linking, TouchableOpacity, TextInput, Button } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faTools, faEnvelope, faStar, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

// Home Screen
function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        <Image
          source={{ uri: 'https://wefixanywatch.co.uk/wp-content/uploads/2023/08/wefixanybluegoldnew-e1737351757272-1024x252.png' }}
          style={{ width: '100%', height: 80, resizeMode: 'contain' }}
        />
        <Text className="text-2xl font-bold mt-4 mb-2">Fast & Reliable Watch Repair Near You</Text>
        <Text className="mb-4">
          Convenient and affordable, our fully insured repairs start from only £30, including free postage from and to you.
          Trusted by many, we excel in luxury and vintage watch repairs.
        </Text>
        <TouchableOpacity
          className="bg-blue-600 rounded p-3 mb-2"
          onPress={() => Linking.openURL('https://wefixanywatch.co.uk/order/')}
        >
          <Text className="text-white text-center font-semibold">Book Free Assessment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-green-600 rounded p-3"
          onPress={() => Linking.openURL('https://wefixanywatch.co.uk/quote/')}
        >
          <Text className="text-white text-center font-semibold">Get A Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// Services Screen
function ServicesScreen() {
  const services = [
    {
      title: 'Battery Replacement',
      description: 'Is your watch losing its tick? A watch battery replacement can breathe new life into your timepiece.',
      image: 'https://wefixanywatch.co.uk/wp-content/uploads/2023/08/20230809114228_fpdl.in_close-up-watch-battery-replacement_63097-363_large.jpg',
      phone: '02038382122',
      email: 'info@wefixanywatch.co.uk',
    },
    {
      title: 'Glass Replacement',
      description: 'Replace your watch glass with precision for a clear, flawless finish.',
      image: 'https://wefixanywatch.co.uk/wp-content/uploads/2024/12/close-up-clock-with-time-change_23-2149241148.jpg',
      phone: '02038382122',
      email: 'info@wefixanywatch.co.uk',
    },
    {
      title: 'Watch Restoration',
      description: 'Bring your timepiece back to life with expert restoration, preserving its beauty and functionality.',
      image: 'https://wefixanywatch.co.uk/wp-content/uploads/2023/10/fpdl.in_repair-watch_99233-19_large.jpg',
      phone: '02038382122',
      email: 'info@wefixanywatch.co.uk',
    },
    {
      title: 'Watch Polishing',
      description: 'Restore your watch’s shine with expert polishing for a flawless finish.',
      image: 'https://wefixanywatch.co.uk/wp-content/uploads/2023/12/crop-man-drying-portafilter_23-2147775908.jpg',
      phone: '02038382122',
      email: 'info@wefixanywatch.co.uk',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        {services.map((service, index) => (
          <View key={index} className="mb-6 border rounded-lg overflow-hidden shadow">
            <Image source={{ uri: service.image }} style={{ width: '100%', height: 180, resizeMode: 'cover' }} />
            <View className="p-4">
              <Text className="text-xl font-bold mb-2">{service.title}</Text>
              <Text className="mb-2">{service.description}</Text>
              <Text className="text-blue-600" onPress={() => Linking.openURL(`tel:${service.phone}`)}>Phone: {service.phone}</Text>
              <Text className="text-blue-600" onPress={() => Linking.openURL(`mailto:${service.email}`)}>Email: {service.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// Contact Screen
function ContactScreen() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [postcode, setPostcode] = React.useState('');
  const [query, setQuery] = React.useState('');

  const handleSubmit = () => {
    alert('Thank you for your query. We will get back to you soon.');
    // In a real app, form submission logic would be here
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        <Text className="text-2xl font-bold mb-4">Contact Us</Text>
        <TextInput
          placeholder="First Name *"
          value={firstName}
          onChangeText={setFirstName}
          className="border border-gray-300 rounded p-2 mb-3"
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          className="border border-gray-300 rounded p-2 mb-3"
        />
        <TextInput
          placeholder="Email Address *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="border border-gray-300 rounded p-2 mb-3"
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          className="border border-gray-300 rounded p-2 mb-3"
        />
        <TextInput
          placeholder="Postcode"
          value={postcode}
          onChangeText={setPostcode}
          className="border border-gray-300 rounded p-2 mb-3"
        />
        <TextInput
          placeholder="Please Provide Details Of Your Query"
          value={query}
          onChangeText={setQuery}
          multiline
          numberOfLines={4}
          className="border border-gray-300 rounded p-2 mb-3"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Testimonials Screen
function TestimonialsScreen() {
  const testimonials = [
    { name: 'Vanessa P.', text: 'From the moment I walked in, I felt valued as a customer. The team took the time to understand my needs and delivered outstanding results. Highly recommend!' },
    { name: 'Chris J.', text: 'Excellent service and craftsmanship! They fixed my watch quickly and efficiently. I’m thrilled with how it looks and runs now!' },
    { name: 'Sarah L.', text: 'Fantastic service! They took the time to explain the repair process and provided a detailed estimate. My Omega runs perfectly now. I’ll definitely be coming back!' },
    { name: 'Michael T.', text: 'I was worried about finding parts for my discontinued watch, but the experts at Luxury Watch Repair handled it seamlessly. Their craftsmanship is top-notch!' },
    { name: 'Emily R.', text: 'I had a great experience from start to finish. The staff was friendly, and they really know their stuff. My watch was repaired quickly, and it looks stunning!' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        <Text className="text-2xl font-bold mb-4">Customer Testimonials</Text>
        {testimonials.map((t, index) => (
          <View key={index} className="mb-4 p-4 border rounded shadow">
            <Text className="italic mb-2">"{t.text}"</Text>
            <Text className="font-bold text-right">- {t.name}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// FAQ Screen
function FAQScreen() {
  const faqs = [
    { question: 'What types of watches do you repair?', answer: 'We specialize in luxury watches from various brands, including mechanical, automatic, and quartz timepieces. Whether it’s a vintage model or a contemporary design, our skilled technicians can handle it.' },
    { question: 'How long does a typical service take?', answer: 'The duration of service varies depending on the type of repair. A basic service usually takes 1-2 weeks, while more extensive repairs may take longer. We’ll provide an estimated timeline when you bring in your watch.' },
    { question: 'Do you offer a warranty on your services?', answer: 'Yes, all our services come with a warranty for both parts and labor. This warranty varies based on the service provided, and we will explain the details during your consultation.' },
    { question: 'How often should I have my watch serviced?', answer: 'For optimal performance, it\'s recommended to service your watch every 3 to 5 years. Regular maintenance helps prevent issues and extends the life of your timepiece.' },
    { question: 'Can you repair watches that are no longer in production?', answer: 'Yes, we can often source parts for discontinued models. However, availability depends on the brand and model. Our team will assess the watch and inform you of the options.' },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <ScrollView>
        <Text className="text-2xl font-bold mb-4">Frequently Asked Questions</Text>
        {faqs.map((faq, index) => (
          <View key={index} className="mb-4">
            <Text className="font-semibold mb-1">{faq.question}</Text>
            <Text>{faq.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let icon;
              if (route.name === 'Home') icon = faHome;
              else if (route.name === 'Services') icon = faTools;
              else if (route.name === 'Contact') icon = faEnvelope;
              else if (route.name === 'Testimonials') icon = faStar;
              else if (route.name === 'FAQ') icon = faQuestionCircle;
              return <FontAwesomeIcon icon={icon} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2563eb',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Services" component={ServicesScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Testimonials" component={TestimonialsScreen} />
          <Tab.Screen name="FAQ" component={FAQScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
