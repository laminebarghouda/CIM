import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';

import * as theme from '../theme';

const { width, height } = Dimensions.get('window');
const mocks = [
  {
    id: 1,
    user: {
      name: 'WallysCar',
      avatar: require('../assets/avatars/LOGO_WALLYSCAR.jpg'),
    },
    saved: true,
    location: 'Kabaria،, Tunis Sud',
    temperature: 34,
    title: 'WallysCar',
    description: 'Wallys est un constructeur automobile basé en Tunisie depuis 2006. La marque est une référence' +
        ' dans la production des véhicules artisanals de petite série.\n' +
        ' La demande de véhicules électriques s’est intensifiée en 2018 et la survie de WallysCar dépend de sa capacité à' +
        ' suivre les dernières tendances sur le marché automobile. Les voitures électriques très plébiscitées en France ne sont' +
        ' pas adaptées au marché du Moyen-Orient et de l’Afrique du Nord. Et ce, à cause de la longévité de la batterie électrique ' +
        'et le manque d’infrastructure. En effet, l’autonomie de la batterie ne permet de faire que 200 km, dans des étendues désertiques ' +
        'à perte de vue. L’idée d’une voiture hybride s’impose alors !',
    reviews: 3212,
    preview: require('../assets/images/wallyscar_2.jpg'),
    images: [
      require('../assets/images/wallyscar_1.jpg'),
      require('../assets/images/wallyscar_3.jpg'),
      require('../assets/images/wallyscar_4.jpg'),
    ]
  },
  {
    id: 2,
    user: {
      name: 'WallysCar',
      avatar: require('../assets/avatars/LOGO_WALLYSCAR.jpg'),
    },
    saved: true,
    location: 'Kabaria،, Tunis Sud',
    temperature: 34,
    title: 'WallysCar',
    description: 'Wallys est un constructeur automobile basé en Tunisie depuis 2006. La marque est une référence' +
        ' dans la production des véhicules artisanals de petite série.\n' +
        ' La demande de véhicules électriques s’est intensifiée en 2018 et la survie de WallysCar dépend de sa capacité à' +
        ' suivre les dernières tendances sur le marché automobile. Les voitures électriques très plébiscitées en France ne sont' +
        ' pas adaptées au marché du Moyen-Orient et de l’Afrique du Nord. Et ce, à cause de la longévité de la batterie électrique ' +
        'et le manque d’infrastructure. En effet, l’autonomie de la batterie ne permet de faire que 200 km, dans des étendues désertiques ' +
        'à perte de vue. L’idée d’une voiture hybride s’impose alors !',
    reviews: 3212,
    preview: require('../assets/images/wallyscar_2.jpg'),
    images: [
      require('../assets/images/wallyscar_1.jpg'),
      require('../assets/images/wallyscar_3.jpg'),
      require('../assets/images/wallyscar_4.jpg'),
    ]
  },
  {
    id: 3,
    user: {
      name: 'WallysCar',
      avatar: require('../assets/avatars/LOGO_WALLYSCAR.jpg'),
    },
    saved: true,
    location: 'Kabaria،, Tunis Sud',
    temperature: 34,
    title: 'WallysCar',
    description: 'Wallys est un constructeur automobile basé en Tunisie depuis 2006. La marque est une référence' +
        ' dans la production des véhicules artisanals de petite série.\n' +
        ' La demande de véhicules électriques s’est intensifiée en 2018 et la survie de WallysCar dépend de sa capacité à' +
        ' suivre les dernières tendances sur le marché automobile. Les voitures électriques très plébiscitées en France ne sont' +
        ' pas adaptées au marché du Moyen-Orient et de l’Afrique du Nord. Et ce, à cause de la longévité de la batterie électrique ' +
        'et le manque d’infrastructure. En effet, l’autonomie de la batterie ne permet de faire que 200 km, dans des étendues désertiques ' +
        'à perte de vue. L’idée d’une voiture hybride s’impose alors !',
    reviews: 3212,
    preview: require('../assets/images/wallyscar_2.jpg'),
    images: [
      require('../assets/images/wallyscar_1.jpg'),
      require('../assets/images/wallyscar_3.jpg'),
      require('../assets/images/wallyscar_4.jpg'),
    ]
  },
  {
    id: 4,
    user: {
      name: 'WallysCar',
      avatar: require('../assets/avatars/LOGO_WALLYSCAR.jpg'),
    },
    saved: true,
    location: 'Kabaria،, Tunis Sud',
    temperature: 34,
    title: 'WallysCar',
    description: 'Wallys est un constructeur automobile basé en Tunisie depuis 2006. La marque est une référence' +
        ' dans la production des véhicules artisanals de petite série.\n' +
        ' La demande de véhicules électriques s’est intensifiée en 2018 et la survie de WallysCar dépend de sa capacité à' +
        ' suivre les dernières tendances sur le marché automobile. Les voitures électriques très plébiscitées en France ne sont' +
        ' pas adaptées au marché du Moyen-Orient et de l’Afrique du Nord. Et ce, à cause de la longévité de la batterie électrique ' +
        'et le manque d’infrastructure. En effet, l’autonomie de la batterie ne permet de faire que 200 km, dans des étendues désertiques ' +
        'à perte de vue. L’idée d’une voiture hybride s’impose alors !',
    reviews: 3212,
    preview: require('../assets/images/wallyscar_2.jpg'),
    images: [
      require('../assets/images/wallyscar_1.jpg'),
      require('../assets/images/wallyscar_3.jpg'),
      require('../assets/images/wallyscar_4.jpg'),
    ]
  },
]
const styles = StyleSheet.create({
  flex: {
    flex: 0,
  },
  column: {
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 1.33,
    paddingBottom: theme.sizes.padding * 0.66,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  articles: {
  },
  destinations: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
  destination: {
    width: width - (theme.sizes.padding * 2),
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius,
  },
  destinationInfo: {
    position: 'absolute',
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 4)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 4),
  },
  introduction: {
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left: (width - (theme.sizes.padding * 7)) / (Platform.OS === 'ios' ? 3.2 : 3),
    backgroundColor: theme.colors.white,
    width: width - (theme.sizes.padding * 2),

  },
  recommended: {

  },
  recommendedHeader: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: theme.sizes.padding,
      marginBottom: theme.sizes.margin * 0.5,
  },
    upcomingHeader: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: theme.sizes.padding,
        marginBottom: theme.sizes.margin*0.5,
    },
  recommendedList: {
  },
  recommendation: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5,
  },
  recommendationHeader: {
    overflow: 'hidden',
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius,
  },
  recommendationOptions: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.sizes.padding / 2,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  recommendationTemp: {
    fontSize: theme.sizes.font * 1.25,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - (theme.sizes.padding * 2)) / 2,
    height: (width - (theme.sizes.padding * 2)) / 2,
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: 'transparent',
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active,
  }
});

class Articles extends Component {
  scrollX = new Animated.Value(0);
  static navigationOptions = {
    headerShown: false,
  };

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View style={[
        styles.flex, styles.row,
        { justifyContent: 'center', alignItems: 'center', marginTop: 10 }
      ]}>
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index -1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: 'clamp'
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[styles.dots, styles.activeDot, { borderWidth: borderWidth } ]}
            />
          )
        })}
      </View>
    )
  }

  renderDestinations = () => {
    return (
      <View style={[ styles.column, styles.destinations ]}>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow:'visible', height: 280 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: this.scrollX }} }])}
          renderItem={({ item }) => this.renderDestination(item)}
        />
        {this.renderDots()}
      </View>
    );
  }

  renderDestination = item => {
    const { navigation } = this.props;
    return (
        <View style={[styles.flex, styles.column, styles.recommended ]}>
          <View
              style={[
                styles.row,
                styles.upcomingHeader,
              ]}
          >
          </View>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Article', { article: item })}>
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={item.preview}
        >
          <View style={[styles.row, { justifyContent: 'space-between' }]}>
            <View style={{ flex: 0 }}>
              <Image source={item.user.avatar} style={styles.avatar} />
            </View>
            <View style={[styles.column, { flex: 2, paddingHorizontal: theme.sizes.padding / 2 }]}>
              <Text style={{ color: theme.colors.white, fontWeight: 'bold' }}>{item.user.name}</Text>
              <Text style={{ color: theme.colors.white }}>
                <Octicons
                  name="location"
                  size={theme.sizes.font * 0.8}
                  color={theme.colors.white}
                />
                <Text> {item.location}</Text>
              </Text>
            </View>
          </View>
        </ImageBackground>
          <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
            <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: 8, }}>
              {item.title}
            </Text>
            <View style={[ styles.row, { justifyContent: 'space-between', alignItems: 'flex-end', }]}>
              <Text style={{ color: theme.colors.caption }}>
                {item.description.split('').slice(0, 50)}...
              </Text>
              <FontAwesome
                name="chevron-right"
                size={theme.sizes.font * 0.75}
                color={theme.colors.caption}
              />
            </View>
          </View>
      </TouchableOpacity>
        </View>
    )
  }

  renderRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended ]}>
        <View
          style={[
            styles.row,
            styles.recommendedHeader
          ]}
        >
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Archive</Text>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[ styles.shadow, { overflow: 'visible' }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderRecommendation(item, index)}
          />
        </View>
      </View>
    );
  }

  renderRecommendation = (item, index) => {
    const { destinations } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View style={[
        styles.flex, styles.column, styles.recommendation, styles.shadow, 
        index === 0 ? { marginLeft: theme.sizes.margin } : null,
        isLastItem ? { marginRight: theme.sizes.margin / 2 } : null,
      ]}>
        <View style={[styles.flex, styles.recommendationHeader]}>
          <Image style={[styles.recommendationImage]} source={item.preview} />
          <View style={[ styles.flex, styles.row, styles.recommendationOptions ]}>
            <Text style={styles.recommendationTemp}>
              {item.temperature}℃
            </Text>
            <FontAwesome
              name={item.saved ? 'bookmark' : 'bookmark-o'}
              color={theme.colors.white}
              size={theme.sizes.font * 1.25}
            />
          </View>
        </View>
        <View style={[styles.flex, styles.column, styles.shadow, { justifyContent: 'space-evenly', padding: theme.sizes.padding / 2 }]}>
          <Text style={{ fontSize: theme.sizes.font * 1.25, fontWeight: '500', paddingBottom: theme.sizes.padding / 4.5, }}>{item.title}</Text>
          <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          <View style={[
            styles.row,
            { alignItems: 'center', justifyContent: 'space-between', marginTop: theme.sizes.margin }
          ]}>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: theme.sizes.padding , paddingBottom: theme.sizes.padding }}
      >
        <View style={[styles.flex, styles.column, styles.recommended ]}>
          <Text style={{ fontSize: theme.sizes.font * 1.4,paddingHorizontal: theme.sizes.padding,}}>Upcoming Events</Text>
        </View>
        {this.renderDestinations()}
        {this.renderRecommended()}

      </ScrollView>
    )
  }
}

Articles.defaultProps = {
  destinations: mocks
};

export default Articles;
