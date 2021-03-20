/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

<script type="text/javascript" src="http://code.jquery.com/jquery-latest.js"></script>


$(function() { 
$(window).scroll(function() { 
  if ($(this).scrollTop() > 250) { 
  $('#topBtn').fadeIn(); } else { $('#topBtn').fadeOut(); } }); 
  $("#topBtn").click(function() { $('html, body').animate({ scrollTop : 0 
  }, 400); }); })


function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class ScrollableHeader extends Component {

  _renderScrollViewContent() {
    const data = Array.from({length: 30});
    return (
      <View style={styles.scrollViewContent}>
        {data.map((_, i) =>
          <View key={i} style={styles.row}>
            <Text>{i}</Text>
          </View>
        )}
      </View>
    );
  }

  render() {
    const headerGeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    })
    return (
      <View style={styles.fill}>
        <ScrollView
          style={styles.fill}
          scrollEventThrottle={16}
    onScroll={Animated.event(
      [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
    )}
        >
          {this._renderScrollViewContent()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

constructor(props)

  super(props);

  this.state = {
    scrollY: new Animated.Value(0),
  };
  
  const imageOpacity = this.state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslate = this.state.scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });
<Animated.View style={[styles.header, {height: headerHeight}]}>
  <Animated.Image
    style={[
      styles.backgroundImage,
      {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
    ]}
    source={require('./images/cat.jpeg')}
  />
</Animated.View>

backgroundImage 

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: null;
  height: HEADER_MAX_HEIGHT;
  resizeMode: 'cover';


header 
    position: 'absolute';
    top: 0;
    left: 0;
    right: 0;
    backgroundColor: '#03A9F4';
    overflow: 'hidden';

bar 
    marginTop: 28;
    height: 32;
    alignItems: 'center';
    justifyContent: 'center';

title 
    backgroundColor: 'transparent';
    color: 'white';
    fontSize: 18;
  
scrollViewContent 
    marginTop: HEADER_MAX_HEIGHT;