import React from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, Button, Image } from 'react-native';
import styles from './styles';
import { getPost } from '../../actions/postActions';

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getPost(this.props.id);
  }

  parseTypeToName = (type) => {
    const typeNames = {
      lost: '協尋',
      event: '活動',
      adoption: '送養',
      care: '看護'
    };

    return typeNames[type];
  };

  render() {
    let user = this.props.post.user;
    return (
      <ScrollView style={{flex:1, backgroundColor: '#f5f1f1',padding:15}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              height: 80,
              width: 80,
              borderRadius: 40,
              marginTop: 10,
            }}
            source={{uri: 'https://d36lyudx79hk0a.cloudfront.net/p0/mn/p2/c16531eda44144f6.jpg'}}
          />
          <Text style={{flex:1,marginTop:40,marginLeft:10,fontSize:16}}>{`${user.first_name}${user.last_name}`}</Text>
        </View>

        <Text style={{fontSize:25,color:'#000000',marginTop:10,fontWeight:'bold'}}>{this.props.post.title}</Text>
        <Text style={{color:'#626161',marginTop:10}}>{`${this.parseTypeToName(this.props.post.type)}版 ${new Date(this.props.post.updated_at).getFullYear()}/${new Date(this.props.post.updated_at).getMonth()+1}/${new Date(this.props.post.updated_at).getDate()} ${new Date(this.props.post.updated_at).getHours()}:${new Date(this.props.post.updated_at).getMinutes()} `}</Text>
        <Text style={{fontSize:18,marginTop:20,color:'#626161',marginBottom:25}}>{this.props.post.content}</Text>
      </ScrollView>
    );
  }
}

export default connect((state) => ({
  post: state.getIn(['post', 'post'])
}), {
  getPost
})(Post);
