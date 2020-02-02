import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Animated,
    Image,
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native'
import * as theme from '../theme';
import AntDesign from "react-native-vector-icons/AntDesign";

const { width, height } = Dimensions.get('window');

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
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  back: {
    width: theme.sizes.base * 3,
    height: theme.sizes.base * 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  content: {
      marginBottom: 40,
  },
  contentHeader: {
    padding: theme.sizes.padding,
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: theme.sizes.radius,
    borderTopRightRadius: theme.sizes.radius,
    marginTop: -theme.sizes.padding / 2,
  },
  avatar: {
    position: 'absolute',
    top: -theme.sizes.margin,
    right: theme.sizes.margin,
    width: theme.sizes.padding * 2,
    height: theme.sizes.padding * 2,
    borderRadius: theme.sizes.padding,
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  dotsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 36,
    right: 0,
    left: 0
  },
  dots: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
  },
  title: {
    fontSize: theme.sizes.font * 2,
    fontWeight: 'bold'
  },
  description: {
    fontSize: theme.sizes.font * 1.2,
    lineHeight: theme.sizes.font * 2,
    color: theme.colors.caption
  },
    introduction: {
        borderRadius: theme.sizes.radius,
        paddingHorizontal: theme.sizes.padding,
        paddingLeft: 20,
        paddingRight: 20,
        paddingVertical: theme.sizes.padding / 2,
        bottom: 20,
        marginBottom:15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: theme.colors.white,

    },
    Link: {
        paddingBottom: 20,
    }
});

class Article extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = {
      headerShown: false,
  }

  renderDots = () => {
    const { navigation } = this.props;
    const article = navigation.getParam('article');
    const dotPosition = Animated.divide(this.scrollX, width);

    return (
        <View style={[ styles.flex, styles.row, styles.dotsContainer ]}>
          {article.images.map((item, index) => {
            const opacity = dotPosition.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.5, 1, 0.5],
              extrapolate: 'clamp'
            });
          return (
            <Animated.View
              key={`step-${item}-${index}`}
              style={[styles.dots, { opacity }]}
            />
          )
        })}
      </View>
    )
  }

  render() {
    const { navigation } = this.props;
    const type = navigation.getParam('type');
    const article = navigation.getParam('article');
      if (type === 'event') {
          return (
              <ScrollView>
                  <View style={styles.flex}>
                      <View style={[styles.flex]}>
                          <ScrollView
                              horizontal
                              pagingEnabled
                              scrollEnabled
                              showsHorizontalScrollIndicator={false}
                              decelerationRate={0}
                              scrollEventThrottle={16}
                              snapToAlignment="center"
                              onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.scrollX}}}])}
                          >
                              {
                                  article.images.map((img, index) =>
                                      <Image
                                          key={`${index}-${img}`}
                                          source={img}
                                          resizeMode='cover'
                                          style={{width, height: width / 1.2}}
                                      />
                                  )
                              }
                          </ScrollView>
                          {this.renderDots()}
                      </View>
                      <View style={[styles.flex, styles.content]}>
                          <View style={[styles.flex, styles.contentHeader]}>
                              <Image style={[styles.avatar, styles.shadow]} source={article.user.avatar}/>
                              <Text style={styles.title}>{article.title}</Text>
                              <View style={[
                                  styles.row,
                                  {alignItems: 'center', marginVertical: theme.sizes.margin / 4}
                              ]}>
                              </View>

                              <Text style={styles.description}>
                                  {article.description}
                              </Text>
                          </View>
                      </View>
                  </View>
                  <View style={[styles.column, styles.introduction, styles.shadow, styles.Link]}>
                      <TouchableOpacity onPress={() => Linking.openURL('fb://page/1374925749399726')}>
                          <View style={{justifyContent: 'center', alignItems: 'center',}}>
                              <Text style={{color: theme.colors.active}}>
                                  <AntDesign
                                      name="form"
                                      size={theme.sizes.font * 1.5}
                                  />
                                  {'\t'}{'\t'}Inscription
                              </Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              </ScrollView>

          )
      }
      else {
          return (
              <ScrollView>
                  <View style={styles.flex}>
                      <View style={[styles.flex]}>
                          <ScrollView
                              horizontal
                              pagingEnabled
                              scrollEnabled
                              showsHorizontalScrollIndicator={false}
                              decelerationRate={0}
                              scrollEventThrottle={16}
                              snapToAlignment="center"
                              onScroll={Animated.event([{nativeEvent: {contentOffset: {x: this.scrollX}}}])}
                          >
                              {
                                  article.images.map((img, index) =>
                                      <Image
                                          key={`${index}-${img}`}
                                          source={img}
                                          resizeMode='cover'
                                          style={{width, height: width / 1.2}}
                                      />
                                  )
                              }
                          </ScrollView>
                          {this.renderDots()}
                      </View>
                      <View style={[styles.flex, styles.content]}>
                          <View style={[styles.flex, styles.contentHeader]}>
                              <Image style={[styles.avatar, styles.shadow]} source={article.user.avatar}/>
                              <Text style={styles.title}>{article.title}</Text>
                              <View style={[
                                  styles.row,
                                  {alignItems: 'center', marginVertical: theme.sizes.margin / 4}
                              ]}>
                              </View>

                              <Text style={styles.description}>
                                  {article.description}
                              </Text>
                          </View>
                      </View>
                  </View>
              </ScrollView>

          )
      }
  }
}

export default Article;




